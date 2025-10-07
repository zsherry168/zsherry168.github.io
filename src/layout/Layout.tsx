import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Layout() {
  return (
    <div className="d-flex flex-column min-vh-100 bg-white">
      <Navbar />
      <main className="container flex-fill py-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}