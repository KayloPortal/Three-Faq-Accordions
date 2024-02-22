import "./Header.css";

function Header() {
  return (
    <div className="container">
      <header className="header">
        <img className="header__logo" src="/logo.svg" alt="brix templates" />
        <button className="header__button"></button>
      </header>
    </div>
  );
}

export default Header;
