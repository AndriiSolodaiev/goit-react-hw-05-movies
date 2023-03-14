import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMovieCast } from 'api/fetchMovieCast';

const Cast = () => {
  const [movieCast, setMovieCast] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    fetchMovieCast(movieId).then(data => setMovieCast(data));
  }, [movieId]);
  return (
    <ul>
      {movieCast.map(({ id, name, character, profile_path }) => (
        <li key={id}>
          <img src={`https://image.tmdb.org/t/p/w200${profile_path}`} alt="" />
          <h3>{name}</h3>
          <p>{character}</p>
        </li>
      ))}
    </ul>
  );
};
export default Cast;
