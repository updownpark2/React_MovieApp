import { useEffect, useState } from "react";
import Movierecap from "./Movierecap";

function MovieApprecap() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
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
      <h1>Hello</h1>
      {loading ? (
        <h2>로딩중... 잠시만 기다려주세요</h2>
      ) : (
        movies.map(function (item, index) {
          return (
            <Movierecap
              key={item.id}
              imginfo={item.medium_cover_image}
              title={item.title}
              genres={item.genres}
              summary={item.summary}
            />
          );
        })
      )}
    </div>
  );
}
export default MovieApprecap;
