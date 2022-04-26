const Coin = ({ coin }) => {
  return (
    <div className="coin-container">
      <img src={coin.image} alt={coin.id} />
      <h4>{coin.symbol}</h4>
      <h4>INR {coin.current_price}</h4>
      <h4
        className={`${coin.price_change_percentage_24h < 0 ? "red" : "green"}`}
      >
        {coin.price_change_percentage_24h}%
      </h4>
      <h4>MKT Cap: INR {coin.market_cap}</h4>
    </div>
  );
};
export default Coin;
