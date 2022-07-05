import { useEffect, useState } from "react";
function Weather() {
  const [gps, setGps] = useState([]);

  const ok = (position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const API_KEY = "0df8b3dcb31ae79a932729e9ef135343";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=kr`;
    fetch(url).then((response) =>
      response.json().then((json) => setGps(json.name))
    );
  };
  console.log(gps);
  const fail = () => {
    alert("can't find you!");
  };
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(ok, fail);
  }, []);
  return (
    <div>
      <h1>Hello</h1>
      <h2>{gps}</h2>
    </div>
  );
}
export default Weather;
