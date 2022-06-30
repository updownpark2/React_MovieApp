import { useEffect, useState } from "react";

function CoinTracker() {
  const [loading, setLoading] = useState(true);
  const [coin, setCoin] = useState([]);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers") //비트코인 API를 부름
      .then((response) => response.json()) //json은 비트코인에 대한 정보전체를의미함
      .then((json) => {
        setCoin(json);
        setLoading(false);
      });
  }, []); //fetch는 서버에 네트워크 요청을 보내고 새로운 정보를 받아오는일
  //즉 API를 불러오는 일 fetch(접근하고자하는url)
  return (
    <div>
      <h1>The Coins!</h1>
      {loading ? <strong>loading...</strong> : null}
      <ul>
        {coin.map(function (item, index) {
          return <li key={index}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default CoinTracker;
