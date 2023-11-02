let Nav = () => {
    return (
      <nav>
        <div className="nav-elements">
          <div>
            <i className="fa-solid fa-house"></i>
            <p>Home</p>
          </div>
          <div>
            <i className="fa-solid fa-bell"></i>
            <p>Notifications</p>
          </div>
          <div>
            <i className="fa-regular fa-heart"></i>
            <p>Shop</p>
          </div>
          <div>
            <i className="fa-regular fa-envelope"></i>
            <p>Conversations</p>
          </div>
          <div>
            <i className="fa-solid fa-wallet"></i>
            <p>Wallet</p>
          </div>
          <div>
            <i className="fa-regular fa-star"></i>
            <p>Subscription</p>
          </div>
          <div>
            <i className="fa-regular fa-user"></i>
            <p>My Profile</p>
          </div>
          <div>
            <i className="fa-solid fa-gear"></i>
            <p>Setings</p>
          </div>
        </div>
        <div className='logout'>
          <i className="fa-solid fa-right-from-bracket fa-flip-horizontal"></i>
          <p>Logout</p>
        </div>
      </nav>
    );
  };
  export default Nav;
  