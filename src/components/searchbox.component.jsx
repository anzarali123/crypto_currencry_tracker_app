const Searchbox = ({ onChangeHandler }) => {
  return (
    <div className="searchbox-container">
      <input
        type="search"
        placeholder="Search coin..."
        onChange={onChangeHandler}
      />
    </div>
  );
};
export default Searchbox;
