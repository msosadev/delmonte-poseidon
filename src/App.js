import React, { useEffect, useState } from "react";
import "./App.css";
import Article from "./components/Article/Article";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  // Progress bar
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollPercentage(progress);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${scrollPercentage}%` }}></div>
      </div>
      <Header />
      <Article />
      <Footer />
    </div>
  );
}

export default App;
