function Movie({ CoverImg, Title, Summary, Genres }) {
  //빨간글씨의 pros들이
  //결국 바꾸고싶은 속성이 된다. 틀은 묶고 그 안에 내용물이 바뀌는 느낌
  return (
    <div>
      <img src={CoverImg} />
      <h2>{Title}</h2>
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
