// src/layouts/SiteLayout.jsx
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

export default function SiteLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-ink">
      <Navbar />

      {/* IMPORTANT: main should not be positioned or layered */}
      <main className="flex-1 w-full">
        <Outlet />
      </main>

      {/* Footer must be outside main and not affected by main styling */}
      <Footer />
    </div>
  );
}
