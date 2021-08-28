import "./App.css";
import FormSearch from "./components/FormSearch/FormSearch";
import Header from "./components/Header/Header";
import React from "react";
import Item from "./components/Item/Item";

function App() {
  return (
    <div className="App">
      <Header />
      <FormSearch />
      <Item />
    </div>
  );
}

export default App;
