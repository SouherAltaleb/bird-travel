import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import DestinationDetails from "./pages/DestinationDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";

// function Home() {
//   return <h1> Startseite</h1>;
// }
// function About() {
//   return <h1> Über uns</h1>;
// }
// function Contact() {
//   return <h1> Kontakt</h1>;
// }

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="destinations" element={<Destinations />} />
        <Route path="destinations/:slug" element={<DestinationDetails />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        {/* 404 */}
        <Route
          path="*"
          element={<div className="p-8">Seite nicht gefunden</div>}
        />
      </Route>
    </Routes>
  );
}
