import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { destinations } from "../data/destinations";

export default function DestinationDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const item = destinations.find((d) => d.slug === slug);

  if (!item) {
    return (
      <div>
        <h2 className="text-xl font-semibold">Nicht gefunden</h2>
        <p>
          Kein Reiseziel gefunden für: <strong>{slug}</strong>
        </p>
        <button onClick={() => navigate(-1)} className="btn btn-link">
          Zurück
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-6">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-64 object-cover rounded"
        />
      </div>
      <h1 className="text-3xl font-bold">{item.name}</h1>
      <p className="text-muted">{item.country}</p>
      <p className="mt-4">
        {item.excerpt} Mehr Details können hier stehen: Attraktionen, Hotels,
        Tipps.
      </p>

      <div className="mt-6">
        <button onClick={() => navigate(-1)} className="btn btn-outline">
          ← Zurück
        </button>
      </div>
    </div>
  );
}
