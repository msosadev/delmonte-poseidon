import Logo from "../Logo/Logo";
import switcherLang from "../../img/switcher-lang.svg";
import "./Header.css";

export default function Header(props) {
  return (
    <header className="main-header">
      <div className="top-header">
        <Logo className="grid-logo" />

        <div className="switcher-cta">
          <img src={switcherLang} alt="Language switcher" />
          <button className="button-primary button-font">
            Custom Call to Action
          </button>
        </div>

        <nav className="main-navigation">
          <button className="header-button header-button-selected button-font">
            Landing
          </button>
          <button className="header-button button-font">Theme</button>
          <button className="header-button button-font">Pages</button>
          <button className="header-button button-font">Blog</button>
          <button className="header-button button-font">Risorse</button>
          <button className="header-button button-font">Email</button>
        </nav>
      </div>

      <div className="title-container">
        <div className="minute-counter">
          <span class="circle">
            <span className="minute-counter-font">34</span>
          </span>
          <span className="body-2">Minuti di lettura</span>
        </div>

        <div className="page-title">
          <h1 className="headings-display-bold">Pillar Page Title</h1>
          <p className="body-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </header>
  );
}
