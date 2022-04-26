import "./App.css";
import { useState, useEffect } from "react";
import Searchbox from "./components/searchbox.component";
import Coin from "./components/coins.component";
function App() {
  const [coins, setCoins] = useState([]);
  const [searchField, setSearchField] = useState("");
  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    )
      .then((res) => res.json())
      .then((data) => setCoins(data));
  }, []);

  function handleChange(event) {
    const value = event.target.value;
    setSearchField(value);
  }
  const filteredCoins = coins.filter((coin) => {
    return coin.name.toLowerCase().includes(searchField.toLowerCase());
  });
  const cryptoCoins = filteredCoins.map((coin) => (
    <Coin key={coin.id} coin={coin} />
  ));
  return (
    <>
      <Searchbox onChangeHandler={handleChange} />
      <div className="coins-container">{cryptoCoins}</div>
    </>
  );
}

export default App;
