import logo from "./Logo.svg"

function Header() {
  return (
    <header>
      <img src={logo} width="204px" height="55px" alt="Little Lemon restaurant"/>
    </header>
  );
}

export default Header;