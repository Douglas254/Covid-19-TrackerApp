import React from "react";
import FetchData from "./components/FetchData";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Header />
      <FetchData />
      <Footer />
    </React.Fragment>
  );
}

export default App;
