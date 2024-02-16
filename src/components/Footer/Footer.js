import "./Footer.css";
import facebookIcon from "../../img/facebook.svg";
import instagramIcon from "../../img/instagram.svg";
import linkedinIcon from "../../img/linkedin.svg";
import twitterIcon from "../../img/twitter.svg";

export default function Footer() {
  return (
    <footer className="footer-wrapper">
      <div className="main-footer">
        <ul className="body-1 landing-pages">
          <li className="body-1-bold">Landing Pages</li>
          <li>Lp Demo</li>
          <li>Event Page</li>
          <li>Lp Prodotto</li>
          <li>Gated Simple</li>
        </ul>
        <ul className="body-1 resources">
          <li className="body-1-bold">Resources</li>
          <li>Listing Risorse</li>
          <li>Ebook Digital</li>
          <li>Pillar Extended</li>
          <li>Webinar Page</li>
        </ul>
        <ul className="body-1 blog-email">
          <li className="body-1-bold">Blog / Email</li>
          <li>Blog Home</li>
          <li>Listing Tag</li>
          <li>Post single</li>
          <li>Email Global Modules</li>
        </ul>

        <div className="growth-solution">
          <h2 className="headings-h-2-normal">Growth solution</h2>
          <p className="body-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id
            tempor lacus, tincidunt tristique enim.
          </p>
          <button className="button-primary">Discover More Tools</button>
        </div>

        <div className="social-container">
          <h2 className="headings-h-2-bold">POSEIDON THEME<br></br>BY DELMONTE</h2>
          <div className="social-icons">
            <img src={linkedinIcon} alt="LinkedIn icon"></img>
            <img src={instagramIcon} alt="instagram icon"></img>
            <img src={facebookIcon} alt="facebook icon"></img>
            <img src={twitterIcon} alt="twitter icon"></img>
          </div>
        </div>

        <div className="newsletter-container">
          <p className="body-1-bold">Iscriviti alla nostra newsletter</p>
          <input
            type="email"
            placeholder="Email"
            className="button-font"
          ></input>
          <button className="button-text">Invia</button>
          <p className="body-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id
            tempor lacus, tincidunt tristique enim. Integer sit amet quam
            pretium, malesuada sem nec, ornare nisl
          </p>
        </div>

        
      </div>
      <div className="copyright body-3">
          <div className="divider"></div>
          <p className="license">
            © Miguel Sosa 2024 - All rights reserved
          </p>
          <p className="privacy-policy">Privacy Policy</p>
          <p className="cookie-policy">Cookie Policy</p>
        </div>
    </footer>
  );
}
