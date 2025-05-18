import React from 'react';
import ReactDOM from 'react-dom/client';

import { useState } from "react";

function App() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [submittedName, setSubmittedName] = useState("");

  const firstNameChange = (e) => {
    setFirstname(e.target.value);
  };

  const lastNameChange = (e) => {
    setLastname(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedName(`${firstname} ${lastname}`);
  };

  return (
    <div>
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstname">First Name:</label>
        <input
          type="text"
          id="firstname"
          onChange={firstNameChange}
          value={firstname}
        />
        <br />
        <label htmlFor="lastname">Last Name:</label>
        <input
          type="text"
          id="lastname"
          onChange={lastNameChange}
          value={lastname}
        />
        <br />
        <button type="submit">Submit</button>
      </form>

      {submittedName && (
        <h4 style={{ marginTop: "20px" }}>Full Name: {submittedName}</h4>
      )}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

