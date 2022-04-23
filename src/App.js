import React from "react";
 
import { Route, Routes } from "react-router-dom";
 
import Navbar from "./Navbar";
import TicketList from "./TicketList";
import Edit from "./Edit";
import Create from "./Create";
 
const App = () => {
 return (
   <div>
     <Navbar />
     <Routes>
       <Route exact path="/" element={<TicketList />} />
       <Route path="/edit/:id" element={<Edit />} />
       <Route path="/create" element={<Create />} />
     </Routes>
   </div>
 );
};
 
export default App;
