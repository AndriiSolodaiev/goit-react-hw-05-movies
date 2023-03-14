import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

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

MovieList.propTypes = {
  movieList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
};
