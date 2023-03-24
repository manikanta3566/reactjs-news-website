import React from "react";
import Header from "./components/Header";
import Pagination from "./components/Pagination";
import Stories from "./components/Stories";
import "./App.css";

const App = () => {
  return (
    <>
      <Header />
      <Pagination />
      <Stories />
    </>
  );
};

export default App;
