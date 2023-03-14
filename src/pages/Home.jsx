import { fetchTrendingMoviesPerDay } from 'api/fetchPopularMovies';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { MovieList } from 'components/MovieList/MovieList';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  useEffect(() => {
    fetchTrendingMoviesPerDay().then(data => setMovies(data));
  }, []);

  return <MovieList movieList={movies} location={location} />;
};

export default Home;
