import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
 
export default function Edit() {
 const [form, setForm] = useState({
   title: "",
   status: "",
   description: "",
   priority: "",
   assigned_to: "",
 });
 const params = useParams();
 const navigate = useNavigate();
 
 useEffect(() => {
   async function fetchData() {
     const id = params.id.toString();
     const response = await fetch(`http://localhost:5000/tickets/${params.id.toString()}`);
 
     if (!response.ok) {
       const message = `An error has occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const record = await response.json();
     if (!record) {
       window.alert(`Record with id ${id} not found`);
       navigate("/");
       return;
     }
 
     setForm(record);
   }
 
   fetchData();
 
   return;
 }, [params.id, navigate]);
 
 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 async function onSubmit(e) {
   e.preventDefault();
   const editedTicket = {
     title: form.title,
     status: form.status,
     description: form.description,
     priority: form.priority,
     assigned_to: form.assigned_to,
   };
 
   // This will send a post request to update the data in the database.
   await fetch(`http://localhost:5000/update/${params.id}`, {
     method: "POST",
     body: JSON.stringify(editedTicket),
     headers: {
       'Content-Type': 'application/json'
     },
   });
 
   navigate("/");
 }
 
 // This following section will display the form that takes input from the user to update the data.
 return (
   <div>
     <h3>Update Ticket</h3>
     <form onSubmit={onSubmit}>
       <div className="form-group">
         <label htmlFor="title">Title: </label>
         <input
           type="text"
           className="form-control"
           id="title"
           value={form.title}
           onChange={(e) => updateForm({ title: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="status">Status: </label>
         <input
           type="text"
           className="form-control"
           id="status"
           value={form.status}
           onChange={(e) => updateForm({ status: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="description">Description: </label>
         <input
           type="text"
           className="form-control"
           id="description"
           value={form.description}
           onChange={(e) => updateForm({ description: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="priority">Priority: </label>
         <input
           type="text"
           className="form-control"
           id="priority"
           value={form.priority}
           onChange={(e) => updateForm({ priority: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="assigned_to">Assigned To: </label>
         <input
           type="text"
           className="form-control"
           id="assigned_to"
           value={form.assigned_to}
           onChange={(e) => updateForm({ assigned_to: e.target.value })}
         />
       </div>
       <br />
 
       <div className="form-group">
         <input
           type="submit"
           value="Update Ticket"
           className="btn btn-primary"
         />
       </div>
     </form>
   </div>
 );
}