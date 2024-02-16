// Sidebar.js
import React, { useState, useEffect } from "react";
import "./Navigation.css";
import chevronRight from "../../img/chevron_right.svg";
import chevronDown from "../../img/chevron_down.svg";

const Navigation = ({ sections, activeSection, onSectionClick }) => {
  const [listVisibility, setListVisibility] = useState(true);

  const handleLiClick = (id) => {
    toggleListVisibility();
    onSectionClick(id)
    // window.scrollBy(0, +100);
  }

  const toggleListVisibility = () => {
    if (window.innerWidth < 924) {
    setListVisibility(!listVisibility);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      // Always make the element visible when window width is greater than or equal to 924px
      if (window.innerWidth >= 924 && !listVisibility) {
        setListVisibility(true);
      }
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [listVisibility]);

  return (
    <aside className="navigation-wrapper">
      <div className="navigation">
        <div onClick={toggleListVisibility} disabled={window.innerWidth >= 924} className="navigation-title">
          {listVisibility ? <img src={chevronDown} alt="arrow icon"></img> : <img src={chevronRight} alt="arrow icon"></img>}
          <h3 className="subtitle-1">Indice Contenuto</h3>
        </div>
        {listVisibility &&
        
        <ul>
          {sections.map((section) => (
            <li
              key={section.id}
              onClick={() => handleLiClick(section.id)}
              className={
                activeSection === section.id
                  ? `active ${
                      section.subSection
                        ? "sub-section navigation-regular"
                        : "section navigation-bold"
                    }`
                  : `${
                      section.subSection
                        ? "sub-section navigation-regular"
                        : "section navigation-bold"
                    }`
              }
            >
              {section.title}
            </li>
          ))}
        </ul>
        
        }
        
      </div>
    </aside>
  );
};

export default Navigation;
