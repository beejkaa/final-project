import logo from "./Logo.svg"
import Nav from './Nav.js'

function Header() {
  return (
    <header>
      <img src={logo} alt="Little Lemon restaurant"/>
      <Nav></Nav>
    </header>
  );
}

export default Header;