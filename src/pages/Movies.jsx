import { useState, useEffect } from 'react';
import { fetchMoviesByName } from 'api/fetchMoviesByName';
import { useSearchParams, useLocation } from 'react-router-dom';
import { MovieList } from 'components/MovieList/MovieList';

const Movies = () => {
  const [movieList, setMovieList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) {
      return;
    }
    fetchMoviesByName(query).then(data => setMovieList(data));
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.elements.search.value.trim()) {
      setSearchParams({ query: form.elements.search.value });
      form.reset();
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="search" />
        <button type="submit">Search</button>
      </form>
      {query && <MovieList movieList={movieList} location={location} />}
    </>
  );
};

export default Movies;
