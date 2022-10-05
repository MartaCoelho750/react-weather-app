import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="San Francisco" />

        <footer>
          <a
            href="https://github.com/MartaCoelho750/react-weather-app"
            rel="noreferrer"
            target="_blank"
          >
            Coded By
          </a>{" "}
          Marta Coelho
        </footer>
      </div>
    </div>
  );
}
