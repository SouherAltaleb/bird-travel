import React, { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    // Keine Sende-Logik: nur Bestätigung anzeigen
    alert("Danke! (dieses Demo-Formular sendet nichts)");
  }

  return (
    <div className="max-w-lg  ">
      <h1 className="text-2xl font-bold mb-4">Kontakt</h1>
      <form onSubmit={onSubmit} className="space-y-4">
        <input
          className="input input-bordered w-full"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          className="input input-bordered w-full"
          placeholder="E-Mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          className="textarea textarea-bordered w-full"
          placeholder="Nachricht"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="btn btn-primary w-full " type="submit">
          Absenden
        </button>
      </form>
    </div>
  );
}
