import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMovieReviews } from 'api/fetchMovieReviews';
const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    fetchMovieReviews(movieId).then(data => setMovieReviews(data));
  }, [movieId]);
  return movieReviews.length ? (
    <ul>
      {movieReviews.map(({ author, content, id }) => (
        <li key={id}>
          <h3>{author}</h3>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  ) : (
    <p> There are no reviews for this movie.</p>
  );
};

export default Reviews;
