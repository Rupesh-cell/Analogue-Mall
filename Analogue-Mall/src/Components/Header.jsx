export default function Header() {
  return (
    <div className="top-header">
      <div className="container">
        <div className="logo">Analogue<span>Mall</span></div>

        <div className="search">
          <select>
            <option>Select Category</option>
          </select>
          <input placeholder="I am looking for" />
          <button>Search</button>
        </div>

        <div className="actions">
          <span>Compare</span>
          <span>Wishlist</span>
          <span>Cart</span>
        </div>
      </div>
    </div>
  );
}
