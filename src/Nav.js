function Nav() {
    return (
      <nav className="nav-bar">
        <input id="menu-toggle" type="checkbox" />
        <label className='menu-button-container' htmlFor="menu-toggle" tabIndex="0">
          <div className='menu-button' aria-label="Menu"></div>
        </label>
        <ul className="nav-list">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Menu</a>
          </li>
          <li>
            <a href="/">Reservations</a>
          </li>
          <li>
            <a href="/">Order Online</a>
          </li>
          <li>
            <a href="/">Login</a>
          </li>
        </ul>
      </nav>
    );
  }
   
  export default Nav;