import React from "react";
import "./App.css";

import Main from "./LandingPage/MainBody";
import Header from "./LandingPage/Header";
import StandardFooter from "./StandardFooter";

// Define the App component that renders the Header, Main, and Footer components
const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Main />
      <StandardFooter />
    </div>
  );
};

export default App;
