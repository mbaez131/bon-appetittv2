import logo from "./logo.svg";
import React from "react";
import "./App.css";
import Footer from "./Components/Footer/Footer"
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <Footer />
    </div>
  );
}

export default App;
