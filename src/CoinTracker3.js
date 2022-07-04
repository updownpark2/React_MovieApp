import { useEffect, useState } from "react";

function CoinTracker3() {
  const [price, setPrice] = useState();
  const onChange = (event) => {
    setPrice(event.target.value);
  };
  const [loading, setLoading] = useState(true);
  const [coinInfo, setCoinInfo] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoinInfo(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>CoinTracker App!</h1>
      {loading ? <h2>Loading...</h2> : null}
      <select onChange={onChange}>
        {coinInfo.map(function (item, index) {
          return (
            <option value={item.quotes.USD.price} key={index}>
              {item.name}
            </option>
          );
        })}
      </select>
      <h4>{price}</h4>
    </div>
  );
}

export default CoinTracker3;
