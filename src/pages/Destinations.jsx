import React from "react";
import { Link, useLocation } from "react-router-dom";
import { destinations } from "../data/destinations";

// Hilfsfunktion zum Auslesen der URL-Parameter (?from=...&to=...)
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function Destinations() {
  const q = useQuery(); // Zugriff auf URL-Parameter
  const from = q.get("from"); // Abreise aus der URL
  const to = q.get("to"); // Ziel aus der URL
  const date = q.get("date"); // Datum aus der URL

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Reiseziele</h1>

      {/*Zeigt die Suchfilter nur an, wenn mindestens ein Wert existiert */}
      {(from || to || date) && (
        <div className="mb-4 p-3 bg-base-200 rounded">
          <strong>Filter:</strong> {from && `Ab: ${from} `}
          {to && `Ziel: ${to} `}
          {date && `Datum: ${date}`}
        </div>
      )}
      {/* Grid für alle Reiseziele */}
      <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
        {destinations.map((d) => (
          <div key={d.slug} className="card card-compact bg-base-100 shadow">
            <figure>
              <img
                src={d.image}
                alt={d.name}
                className="h-48 w-full object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{d.name}</h2>
              <p className="text-sm">{d.excerpt}</p>
              <div className="card-actions justify-end">
                <Link
                  to={`/destinations/${d.slug}`}
                  className="btn btn-primary btn-sm text-white"
                >
                  Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
