import "./Card.css";
import iconArrowRight from "../../img/icon-arrow-right.svg";

export default function VisualLink(props) {
  return (
    <div className="card">
      <img className="card-img" src={props.src} alt={props.alt}></img>
      <div className="card-text">
        <h3 className="headings-h-3-bold">{props.title}</h3>
        <p className="body-2">{props.description}</p>
      </div>
      <hr></hr>
      <div>
        <div className="card-link">
          <a
            className="link"
            target="_blank"
            rel="noreferrer"
            href={props.href}
          >
            Discover More
          </a>
          <img src={iconArrowRight} alt="Arrow icon"></img>
        </div>
      </div>
    </div>
  );
}
