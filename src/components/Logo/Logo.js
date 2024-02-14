import logo from "../../img/logo.svg";
import "./Logo.css"

export default function Header() {
  return (
    <div className="logo">
      <img src={logo} alt="Logo" />
      <span className="logo-subtitle">Delmonte Odyssey theme</span>
    </div>
  );
}
