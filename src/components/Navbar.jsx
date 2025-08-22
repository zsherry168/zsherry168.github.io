import { NavLink } from "react-router-dom";

const link = ({ isActive }) =>
  "px-3 py-2 rounded hover:bg-gray-100" +
  (isActive ? "font-semibold underline" : "text-gray-600");

export default function Navbar() {
  return (
    <header className="border-b border-gray-200/60">
      <div className="container mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        <a href="/" className="text-xl font-bold">SZ</a>
        <nav className="flex items-center gap-2">
          <NavLink to="/" className={link} end>Home</NavLink>
          <NavLink to="/about" className={link}>About</NavLink>
          <NavLink to="/experience" className={link}>Experience</NavLink>
					<NavLink to="/projects" className={link}>Projects</NavLink>
          <NavLink to="/blog" className={link}>Blog</NavLink>
          <NavLink to="/contact" className={link}>Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}