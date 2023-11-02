import logo from "./images/logo.png";

let Topbar = () => {
  return (
    <div className="top">
      <div className="logo">
        <img src={logo} />
      </div>
      <div className="search">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input type="text" placeholder="search here..." />
        <i className="fa-solid fa-bars-staggered"></i>
        <p>Filters</p>
      </div>
      <div className="seller">Become a Seller</div>
    </div>
  );
};
export default Topbar;
