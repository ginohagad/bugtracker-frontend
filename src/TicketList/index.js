import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
 
const Ticket = (props) => (
 <tr>
   <td>{props.ticket.title}</td>
   <td>{props.ticket.status}</td>
   <td>{props.ticket.description}</td>
   <td>{props.ticket.priority}</td>
   <td>{props.ticket.assigned_to}</td>
   <td>
     <Link to={`/edit/${props.ticket._id}`}>Edit</Link> |
     <button className="btn-link"
       onClick={() => {
         props.deleteTicket(props.ticket._id);
       }}
     >
       Delete
     </button>
   </td>
 </tr>
);
 
export default function TicketList() {
 const [tickets, setTickets] = useState([]);
 
 useEffect(() => {
   async function getTickets() {
     const response = await fetch(`http://localhost:5000/ticket/`);
 
     if (!response.ok) {
       const message = `An error occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const tickets = await response.json();
     setTickets(tickets);
   }
 
   getTickets();
 
   return;
 }, [tickets.length]);
 
 async function deleteTicket(id) {
   await fetch(`http://localhost:5000/${id}`, {
     method: "DELETE"
   });
 
   const newTickets = tickets.filter((el) => el._id !== id);
   setTickets(newTickets);
 }
 
 function ticketList() {
   return tickets.map((ticket) => {
     return (
       <Ticket
         ticket={ticket}
         deleteTicket={() => deleteTicket(ticket._id)}
         key={ticket._id}
       />
     );
   });
 }
 
 return (
   <div>
     <h3>Ticket List</h3>
     <table className="table table-striped" style={{ marginTop: 20 }}>
       <thead>
         <tr>
           <th>Title</th>
           <th>Status</th>
           <th>Description</th>
           <th>Priority</th>
           <th>Assigned To</th>
         </tr>
       </thead>
       <tbody>{ticketList()}</tbody>
     </table>
   </div>
 );
}
