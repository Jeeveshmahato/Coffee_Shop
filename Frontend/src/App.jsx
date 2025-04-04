import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Create from "./Components/Create";
import Read from "./Components/Read";
import Update from "./Components/Update";
import MainApp from "./Components/MainApp";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainApp />}>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/read/:id" element={<Read />} />
            <Route path="edit/:id" element={<Update />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
