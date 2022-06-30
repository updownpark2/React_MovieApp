import { useEffect, useState } from "react";

function CoinTracker2() {
  const [loading, setLoading] = useState(true);
  const [coin, setCoin] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        //이때의 json을 이용한 함수를 실행한다는 개념!
        setCoin(json);
        setLoading(false); //해야하는 명령이 2가지라서 이렇게 쓴듯?
      });
  }, []);

  return (
    <div>
      {loading ? <strong>loading...</strong> : <h1>hello</h1>}
      <ul>
        {coin.map(function (item, index) {
          return (
            <li key={index}>
              {item.name} : {item.quotes.USD.price}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CoinTracker2;
