import { Container, Nav } from "react-bootstrap";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-white border-top py-3 mt-auto">
      <Container className="footer mt-[10px] mb-[10px]">
        {/* Row 1: links (stack on small, inline on md+) */}
        <Nav className="gap-3 flex-column flex-md-row align-items-start mb-2">
          <Nav.Link href="/" className="p-0">Home</Nav.Link>
          <Nav.Link href="/about" className="p-0">About</Nav.Link>
          <Nav.Link href="/experience" className="p-0">Experience</Nav.Link>
          <Nav.Link href="/projects" className="p-0">Projects</Nav.Link>
          <Nav.Link href="/blog" className="p-0">Blog</Nav.Link>
        </Nav>

        {/* Row 2: copyright + icons */}
        <div className="d-flex justify-content-between align-items-center">
          <div className="text-muted small">© 2025 Sherry Zhang</div>
          <div className="d-flex align-items-center gap-3">
            <a
              href="https://www.linkedin.com/in/zsherry168/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href="https://github.com/zsherry168"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark"
            >
              <FaGithub size={18} />
            </a>
            <a href="sherrybzhang@gmail.com" aria-label="Email" className="icon-circle text-dark">
              <MdEmail size={16} />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
