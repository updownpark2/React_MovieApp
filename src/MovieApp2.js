import { useEffect, useState } from "react";

function MovieApp2() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.7&sort_by=year"
    )
      .then((response) => response.json())
      .then((json) => {
        setMovies(json.data.movies);
        setLoading(false);
      });
  }, []);
  console.log(movies);
  return (
    <div>
      <h1>I recommend you movies</h1>
      {loading ? (
        <h2>Loading</h2>
      ) : (
        <div>
          <ul>
            {movies.map(function (movie, index) {
              return (
                <div key={index}>
                  <img src={movie.medium_cover_image} />
                  <li key={movie.id}>{movie.title_long}</li>
                  <ul>
                    {movie.genres.map(function (item, index) {
                      return <li key={index}>{item}</li>;
                    })}
                  </ul>
                  <p>{movie.summary}</p>
                </div>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default MovieApp2;
