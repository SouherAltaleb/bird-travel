import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    // Gesamtes Layout über die ganze Bildschirmhöhe
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Dynamischer Seiteninhalt */}
      <main className="grow container mx-auto p-4">
        <Outlet /> {/* Hier werden Home, Destinations, Contact...  geladen */}
      </main>

      <Footer />
    </div>
  );
}
