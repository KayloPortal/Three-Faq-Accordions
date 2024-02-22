import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-container | container">
        <img className="header__logo" src="/logo.svg" alt="Brix templates" />
        <button className="header__button | clr-neutral-100 fs-other-500 fw-bold">Clone now</button>
      </div>
    </header>
  );
}

export default Header;
