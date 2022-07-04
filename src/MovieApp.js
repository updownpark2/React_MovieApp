import { useEffect, useState } from "react";
import Movie from "./Movie";

function MovieApp() {
  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState([]);
  useEffect(() => {
    fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=9.0&sort_by=year"
    )
      .then((reponse) => reponse.json())
      .then((json) => {
        setInfo(json.data.movies);
        setLoading(false);
      });
  }, []);
  console.log(info);
  return (
    <div>
      <h1>Movie!!</h1>
      <div>
        {loading ? (
          <h2>Please Wait...</h2>
        ) : (
          <div>
            {info.map(function (item) {
              return (
                <Movie
                  key={item.id}
                  CoverImg={item.medium_cover_image}
                  Title={item.title}
                  Summary={item.summary}
                  Genres={item.genres}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
export default MovieApp;
