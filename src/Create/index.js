import React, { useState } from 'react';
import { useNavigate } from 'react-router';

export default function Create() {

  const [form, setForm] = useState({
    title: "",
    stat: "",
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

    setForm({ title: "", stat: "", description: "", priority: "", assigned_to: "" });
    navigate("/");
  }
  
  return (
    <div>
      <h3>Create New Ticket</h3>
      <form onSubmit={onSubmit}>

        {/*
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
        */}
        <div className="form-group">
          <label htmlFor="stat">Status</label>
          <input 
            type="text" 
            className="form-control" 
            id="stat" 
            value={form.stat} 
            onChange={(e) => updateForm({ stat: e.target.value }) }
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input 
            type="text" 
            className="form-control" 
            id="description" 
            value={form.description} 
            onChange={(e) => updateForm({ description: e.target.value }) }
          />
        </div>
        <div className="form-group">
          <label htmlFor="priority">Priority</label>
          <input 
            type="text" 
            className="form-control" 
            id="priority" 
            value={form.priority} 
            onChange={(e) => updateForm({ priority: e.target.value }) }
          />
        </div>
        <div className="form-group">
          <label htmlFor="assigned_to">Assigned To</label>
          <input 
            type="text" 
            className="form-control" 
            id="assigned_to" 
            value={form.assigned_to} 
            onChange={(e) => updateForm({ assigned_to: e.target.value }) }
          />
        </div>
        <div className="form-group">
          <input 
            type="submit"
            value="Create ticket"
            className="btn-create"
          />
        </div>
      </form>
    </div>
  );
}
