import { Container, Row, Col } from "react-bootstrap";
import PrimaryButton from "../components/PrimaryButton.jsx";
import ContentCard from "../components/ContentCard.jsx";
import projects from "../data/projects.js";
import hero from "../data/hero.js";
import heroPortrait from "../assets/sherry_hero.png";
import linkedinLogo from "../assets/linkedin_logo.png";
import githubLogo from "../assets/github_logo.png";
import emailLogo from "../assets/email_logo.png";

const contacts = {
  linkedin: "https://www.linkedin.com/in/zsherry168/",
  github: "https://github.com/zsherry168",
  email: "mailto:sherrybzhang@gmail.com",
};

export default function Home() {
  return (
    <>
      <Container
        className="py-4"
        style={{ marginTop: "80px", marginBottom: "20px" }}
      >
        {/* Hero */}
        <Row className="align-items-start gy-4">
          <Col xs={12} md={5} lg={4}>
            <img
              src={heroPortrait}
              alt="Sherry Zhang"
              className="img-fluid rounded-1 shadow-sm"
            />
          </Col>
          <Col xs={12} md={7} lg={8}>
            <h1 className="fw-bold display-5 mb-2">{hero.name}</h1>
            <div className="fs-5 text-body-emphasis mb-3">{hero.title}</div>
            <p className="text-secondary mb-4" style={{ maxWidth: 680 }}>
              {hero.blurb}
            </p>

            <div className="d-flex align-items-center gap-3">
              <PrimaryButton href="/about">About Me</PrimaryButton>
              <a
                href={contacts.linkedin}
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
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
                href={contacts.github}
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={githubLogo}
                  alt="GitHub"
                  width={30}
                  height={30}
                  style={{ display: "block" }}
                />
              </a>
              <a href={contacts.email} aria-label="Email">
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
        <hr style={{ marginTop: "45px", marginBottom: "35px" }} />

        {/* Featured Projects */}
        <section>
          <h2 className="fw-bold mb-3">Featured Projects</h2>
          <Row className="g-4">
            {projects
              .filter((p) => p.featured)
              .map((p) => (
              <Col key={p.id} xs={12} md={6} lg={4}>
                <ContentCard
                  title={p.title}
                  date={p.date}
                  desc={p.desc}
                  img={p.img}
                  link={p.link}
                  buttonText="View Project"
                />
              </Col>
            ))}
          </Row>
        </section>
      </Container>
    </>
  );
}
