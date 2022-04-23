import React, { useState } from 'react';
import { useNavigate } from 'react-router';

export default function Create() {

  const [form, setForm] = useState({
    title: "",
    status: "",
    description: "",
    priority: "",
    assigned_to: "",

  });

  const navigate = useNavigate();

  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  async function onSubmit(e) {
    e.preventDefault();

    const newTicket = { ...form };

    await fetch("http://localhost:5000/tickets/add", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTicket),
    })
    .catch(error => {
      window.alert(error);
      return;
    });

    setForm({ title: "", status: "", description: "", priority: "", assigned_to: "" });
    navigate("/");
  }
  
  return (
    <div>
      <h3>Create New Ticket</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input 
            type="text" 
            className="form-control" 
            id="title" 
            value={form.title} 
            onChange={(e) => updateForm({ title: e.target.value }) }
          />
        </div>
        <div classname="form-group">
          <label htmlfor="status">status</label>
          <input 
            type="text" 
            classname="form-control" 
            id="status" 
            value={form.status} 
            onchange={(e) => updateform({ status: e.target.value }) }
          />
        </div>
        <div classname="form-group">
          <label htmlfor="description">Description</label>
          <input 
            type="text" 
            classname="form-control" 
            id="description" 
            value={form.description} 
            onchange={(e) => updateform({ description: e.target.value }) }
          />
        </div>
        <div classname="form-group">
          <label htmlfor="priority">Priority</label>
          <input 
            type="text" 
            classname="form-control" 
            id="priority" 
            value={form.priority} 
            onchange={(e) => updateform({ priority: e.target.value }) }
          />
        </div>
        <div classname="form-group">
          <label htmlfor="assigned_to">Assigned To</label>
          <input 
            type="text" 
            classname="form-control" 
            id="assigned_to" 
            value={form.assigned_to} 
            onchange={(e) => updateform({ assigned_to: e.target.value }) }
          />
        </div>
        <div className="form-group">
          <input 
            type="submit"
            value="Create ticket"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}
