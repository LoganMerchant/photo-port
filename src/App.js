import React from "react";
import "./App.css";
import About from "./components/About/index";
import Nav from "./components/Nav/index";
import Gallery from "./components/Gallery/index";

function App() {
  return (
    <div>
      <Nav />
      <main>
        <Gallery />
        <About />
      </main>
    </div>
  );
}

export default App;
