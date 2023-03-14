import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { fetchMovieInfo } from 'api/fetchMovieInfo';
import { Suspense } from 'react';
const MovieDetails = () => {
  const [movieInfo, setMovieInfo] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  const previousParentRoute = useRef('/movies');
  const from = location.state?.from;
  useEffect(() => {
    if (from) {
      previousParentRoute.current = `${from.pathname}${from.search || ''}`;
    }
  }, [from]);

  useEffect(() => {
    fetchMovieInfo(movieId).then(data => setMovieInfo(data));
  }, [movieId]);
  return (
    <div>
      <Link to={previousParentRoute.current}>Go back</Link>
      <div>
        <img
          src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${movieInfo.poster_path}`}
          alt="Movie"
          width="375"
          height="478"
        />
      </div>

      <div>
        <h2> {movieInfo.title}</h2>
        <h3>ABOUT</h3>
        <p>{movieInfo.overview}</p>
      </div>

      <div>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};
export default MovieDetails;
