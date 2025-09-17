import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import projects from "../data/projects.js";
import PrimaryButton from "../components/PrimaryButton.jsx";
import heroPortrait from "../assets/sherry_hero.png";
import linkedinLogo from "../assets/linkedin_logo.png";
import githubLogo from "../assets/github_logo.png";
import emailLogo from "../assets/email_logo.png";

export default function Home() {
  return (
    <>
      <Container className="py-4" style={{ marginTop: "50px"}}>
        {/* HERO */}
        <Row className="align-items-start gy-4">
          <Col xs={12} md={5} lg={4}>
            <img
              src={heroPortrait}
              alt="Sherry Zhang"
              className="img-fluid rounded-1 shadow-sm"
            />
          </Col>

          <Col xs={12} md={7} lg={8}>
            <h1 className="fw-bold display-5 mb-2">Sherry Zhang</h1>
            <div className="fs-5 text-body-emphasis mb-3">Software Engineer</div>

            <p className="text-secondary mb-4" style={{ maxWidth: 680 }}>
              I’m a Software Engineer in Prudential Financial’s Global Technology
              Rotational Program, working at the intersection of technology, finance, and
              business. I’m passionate about building impactful solutions and
              advocating for STEM education and mentorship.
            </p>

            <div className="d-flex align-items-center gap-3">
              <PrimaryButton href="/about">About Me</PrimaryButton>

              <a
                href="https://www.linkedin.com/in/zsherry168/"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark"
              >
                <img
                  src={linkedinLogo}
                  alt="LinkedIn"
                  width={29}
                  height={29}
                  style={{ display: "block" }}
                />
              </a>

              <a
                href="https://github.com/zsherry168"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark"
              >
                <img
                  src={githubLogo}
                  alt="GitHub"
                  width={30}
                  height={30}
                  style={{ display: "block" }}
                />
              </a>

              <a href="mailto:sherrybzhang@gmail.com" aria-label="Email" className="icon-circle text-dark">
                <img
                  src={emailLogo}
                  alt="Email"
                  width={30}
                  height={30}
                  style={{ display: "block" }}
                />
              </a>
            </div>
          </Col>
        </Row>

        {/* Divider */}
        <hr className="my-5" />

        {/* FEATURED PROJECTS */}
        <section>
          <h2 className="fw-bold mb-3">Featured Projects</h2>

          <Row className="g-4">
            {projects.map((p) => (
              <Col key={p.id} xs={12} md={6} lg={4}>
                <Card className="h-100 shadow-sm">
                  <Card.Img variant="top" src={p.img} alt={`${p.title} cover`} />
                  <Card.Body>
                    <Card.Title href={p.link}>{p.title}</Card.Title>
                    <Card.Text className="text-secondary">{p.desc}</Card.Text>
                    <Button variant="outline-dark" href={p.link}>
                      View Project
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </section>
      </Container>
    </>
  );
}
