import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import PrimaryButton from "../components/PrimaryButton.jsx";
import heroPortrait from "../images/sherry_hero_portrait.png";
import projectCover from "../images/project_placeholder.jpg";

const projects = [
  {
    id: 1,
    title: "Project 1",
    desc: "Description of project",
    img: projectCover,
    link: "/projects/project-1"
  },
  {
    id: 2,
    title: "Project 2",
    desc: "Description of project",
    img: projectCover,
    link: "/projects/project-2"
  },
  {
    id: 3,
    title: "Project 3",
    desc: "Description of project",
    img: projectCover,
    link: "/projects/project-3"
  }
];

export default function Home() {
  return (
    <>
      <Container className="py-4" style={{ backgroundColor: "#fff", marginTop: "90px"}}>
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
                href="https://www.linkedin.com/in/your-handle"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark"
              >
                <FaLinkedin size={24} />
              </a>

              <a
                href="https://github.com/zsherry168"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark"
              >
                <FaGithub size={24} />
              </a>

              <a href="mailto:you@email.com" aria-label="Email" className="icon-circle text-dark">
                <MdEmail size={20} />
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
