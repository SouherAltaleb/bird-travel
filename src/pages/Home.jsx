import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");

  //Suchfunktion
  function onSearch(e) {
    e.preventDefault();
    const params = new URLSearchParams(); // URL-Parameter erzeugen, Das erzeugt: ?from=Berlin&to=Paris&date=2025-01-10
    if (from) params.set("from", from);
    if (to) params.set("to", to);
    if (date) params.set("date", date);
    navigate(`/destinations?${params.toString()}`); //Weiterleitung zur Zielseite
  }

  return (
    // Layout
    <div className="p-6 max-w-2xl mx-auto ">
      <h1 className="text-3xl font-bold mb-6"> Finde deine nächste Reise</h1>

      <form
        onSubmit={onSearch}
        className="grid grid-cols-1 md:grid-cols-4 gap-3 rounded-4xl"
      >
        {/* Herkunft */}
        <input
          value={from} // zeigt den aktuellen Wert
          onChange={(e) => setFrom(e.target.value)} //speichert jede Eingabe
          placeholder="Abreise (Stadt)"
          className="input input-bordered w-full  my-4"
        />
        {/* to Land */}
        <input
          value={to}
          onChange={(e) => setTo(e.target.value)}
          placeholder="Ziel (Stadt / Land)"
          className="input input-bordered w-full  my-4"
        />
        {/* Datum */}
        <input
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="input input-bordered w-full  my-4"
          type="date"
        />
        <button type="submit" className="btn bg-primary w-full text-white my-4">
          Suchen
        </button>
      </form>
    </div>
  );
}
