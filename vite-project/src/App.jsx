import React from "react";
import Header from "../src/components/header/Header";
import Navbar from "./components/navbar/Navbar";
import RealEstateSection from "./components/realestatesection/RealEstateSection";
import CardComponent from "./components/cardcomponent/CardComponent";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <RealEstateSection />
      <CardComponent />
    </>
  );
}

export default App;
