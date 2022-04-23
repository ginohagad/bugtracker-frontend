import * as React from "react";
import { Routes, Route } from "react-router-dom";

import Home from './Home';
import Tickets from './Tickets';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="tickets" element={<Tickets />} />
      </Routes>
    </div>
  );
}

export default App;
