import "./Navigation.css";

export default function Navigation() {
  return (
    <nav className="navigation">
      <h3 className="subtitle-1">Indice Contenuto</h3>
      <ul className="first-level">
        <li className="navigation-bold navigation-active">What is a social media calendar?</li>
        <li className="navigation-bold">
          How to Create a Social Media Calendar
          <ul className="second-level">
            <li className="navigation-regular">1. Conduct a social media audit.</li>
            <li className="navigation-regular">2. Choose your social media channels and the content you'll post.</li>
            <li className="navigation-regular">3. Decide what your calendar should include.</li>
            <li className="navigation-regular">4. Get feedback.</li>
          </ul>
        </li>
        <li className="navigation-bold">Social Media Content Calendar Tools to Plan Your Messaging</li>
        <li className="navigation-bold">Section #4</li>
        <li className="navigation-bold">Section #5</li>
      </ul>
    </nav>
  );
}
