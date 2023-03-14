import { Link } from 'react-router-dom';
export const MovieList = ({ movieList, location }) => {
  return (
    <ul>
      {movieList.map(({ title, id }) => (
        <li key={`${id}`}>
          <Link
            to={location.pathname.includes('movies') ? `${id}` : `movies/${id}`}
            state={{ from: location }}
          >
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
