import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../App.css";

export default function NavBar() {
  return (
    <Navbar fixed="top" expand="lg" className="bg-body-tertiary bg-white py-3">
      <Container fluid>
        <Navbar.Brand href="/" className="ms-4">SZ</Navbar.Brand>
        <Navbar.Toggle aria-controls="primary-nav" />
        <Navbar.Collapse id="primary-nav">
          <Nav className="ms-auto align-items-center gap-4 me-4">
            <Nav.Link href="/" className="text-black">Home</Nav.Link>
            <Nav.Link href="/about" className="text-black">About</Nav.Link>
            <Nav.Link href="/experience" className="text-black">Experience</Nav.Link>
            <Nav.Link href="/projects" className="text-black">Projects</Nav.Link>
            <Nav.Link href="/blog" className="text-black">Blog</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
