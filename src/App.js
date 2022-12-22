import React from "react";
import { BrowserRouter as BRouter, Route, Routes } from "react-router-dom";
import Home from "./Page/Home";
function App() {
  return (
    <BRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
       
      </Routes>
    </BRouter>
  );
}

export default App;
