import { Link } from "react-router-dom";

function Movie({ CoverImg, Title, Summary, Genres }) {
  //빨간글씨의 pros들이
  //결국 바꾸고싶은 속성이 된다. 틀은 묶고 그 안에 내용물이 바뀌는 느낌
  return (
    //Link를 사용하면 새로고침이 되지 않고 연속적으로 화면전환이가능하다.
    <div>
      <img src={CoverImg} alt={Title} />
      <h2>
        <Link to="/movie">{Title}</Link>
      </h2>
      <p>{Summary}</p>
      <ul>
        {Genres.map(function (g) {
          return <li key={g}>{g}</li>;
        })}
      </ul>
    </div>
  );
}

export default Movie;
//0df8b3dcb31ae79a932729e9ef135343
