function Movierecap({ imginfo, title, genres, summary }) {
  return (
    <div>
      <img src={imginfo} />
      <h3>{title}</h3>
      <ul>
        {genres.map(function (aa, index) {
          return <li key={index}>{aa}</li>;
        })}
      </ul>
      <p>{summary}</p>
    </div>
  );
}
export default Movierecap;
