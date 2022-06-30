import { useEffect, useState } from "react";

function CoinTracker2() {
  const [loading, setLoading] = useState(true);
  const [coin, setCoin] = useState([]);
  const [gopage, setGOpage] = useState("");
  const [money, setMoney] = useState("");
  const invert = (event) => {
    setMoney(event.target.value);
  };
  const Submit = (event) => {
    event.preventDefault();
    <h4>you can buy {money / gopage}</h4>;
  };
  const Change = (event) => {
    setGOpage(event.target.value);
  };
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers").then((response) =>
      response.json().then((json) => {
        setCoin(json);
        setLoading(false);
      })
    );
  }, []);
  return (
    //gopage는 현재 페이지를 읽을 수 있다.
    <div>
      <h2>BTC info</h2>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <select value={gopage} onChange={Change}>
          {coin.map(function (item, index) {
            return (
              <option key={index} value={item.quotes.USD.price}>
                {item.name}
              </option>
            ); //index에따른 item.namm를 렌더링!
          })}
        </select>
      )}
      <form onSubmit={Submit}>
        <input
          onChange={invert}
          type="number"
          style={{ margin: "12px 0 0 0 " }}
          placeholder="Money To Change($)"
          value={money}
        />
        <button style={{ border: 0, borderRadius: 10, margin: "0 0 0 10px" }}>
          Submit
        </button>
      </form>

      <h4>Price: {gopage} $</h4>
      <h5>You Can buy {money / gopage} 개</h5>
    </div>
  );
}

export default CoinTracker2;
