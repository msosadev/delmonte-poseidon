// Sidebar.js
import React from "react";
import "./Navigation.css";

const Navigation = ({ sections, activeSection, onSectionClick }) => {
  return (
    <aside className="navigation-wrapper">
      <div className="navigation">
        <h3 className="subtitle-1">Indice Contenuto</h3>
        <ul>
          {sections.map((section) => (
            <li
              key={section.id}
              onClick={() => onSectionClick(section.id)}
              className={
                activeSection === section.id
                  ? `active ${section.subSection ? "sub-section navigation-regular":"section navigation-bold"}`
                  : `${section.subSection ? "sub-section navigation-regular":"section navigation-bold"}`
              }
            >
              {section.title}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Navigation;
