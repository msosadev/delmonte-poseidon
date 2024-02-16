import "./VisualLink.css";
import iconArrowRight from "../../img/icon-arrow-right.svg";

export default function VisualLink(props) {
  return (
    <div className="visual-link">
      <img className="link-img" src={props.src} alt={props.alt}></img>
      <h3 className="headings-h-3-regular">{props.title}</h3>
      <p className="body-2">{props.description}</p>
      <div className="flex-link">
        <a className="link" target="_blank" rel="noreferrer" href={props.href}>
          Leggi l’articolo
        </a>
        <img src={iconArrowRight} alt="Arrow icon"></img>
      </div>
    </div>
  );
}
