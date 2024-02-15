import "./App.css";
import Article from "./components/Article/Article";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="reading-area">
        <Navigation />
        <Article />
      </main>
    </div>
  );
}

export default App;
