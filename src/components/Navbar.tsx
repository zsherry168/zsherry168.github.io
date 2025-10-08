import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import BsNavbar from "react-bootstrap/Navbar";
import "../App.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <BsNavbar
      fixed="top"
      expand="lg"
      className={`py-3 ${scrolled ? "navbar-glass" : "navbar-solid"}`}
    >
      <Container fluid>
        <BsNavbar.Brand href="/" className="ms-4">
          SZ
        </BsNavbar.Brand>
        <BsNavbar.Toggle aria-controls="primary-nav" />
        <BsNavbar.Collapse id="primary-nav">
          <Nav className="ms-auto align-items-center gap-4 me-4">
            <Nav.Link href="/" className="text-black">
              Home
            </Nav.Link>
            <Nav.Link href="/about" className="text-black">
              About
            </Nav.Link>
            <Nav.Link href="/experience" className="text-black">
              Experience
            </Nav.Link>
            <Nav.Link href="/projects" className="text-black">
              Projects
            </Nav.Link>
            <Nav.Link href="/blog" className="text-black">
              Blog
            </Nav.Link>
          </Nav>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  );
}
