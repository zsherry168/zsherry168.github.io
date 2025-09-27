import { Container, Row, Col, Accordion, Badge } from "react-bootstrap";
import EducationSection from "../components/EducationSection";
import SkillsSection from "../components/SkillSection";
import aboutHero from "../assets/sherry_eecs.jpg";

export default function About() {
  return (
    <>
      <Container
        className="py-4"
        style={{ marginTop: "80px", marginBottom: "20px" }}
      >
        {/* HERO */}
        <Row className="align-items-start gy-4">
          <Col xs={12} md={5} lg={4}>
            <img
              src={aboutHero}
              alt="Sherry Zhang graduation"
              className="img-fluid rounded-1 shadow-sm"
            />
          </Col>

          <Col xs={12} md={7} lg={8}>
            <h1 className="fw-bold display-5 mb-2">About</h1>
            <p className="text-secondary mb-4" style={{ maxWidth: 700 }}>
              Body text for your whole article or post. We’ll put in some lorem
              ipsum to show how a filled-out page might look: Excepteur
              efficient emerging, minim veniam anim aute carefully curated.
              Punctual adipisicing, essential lovely queen tempor eiusmod irure.
              Impeccable aute quality of life soft power partiatur. Zürich
              sleepy perfect consectetur.
            </p>
            <p className="text-secondary mb-4" style={{ maxWidth: 700 }}>
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
              faucibus ex sapien vitae pellentesque sem placerat. In id cursus
              mi pretium tellus duis convallis. Tempus leo eu aenean sed diam
              urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum
              egestas. Iaculis massa nisl malesuada lacinia integer nunc
              posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad
              litora torquent per conubia nostra inceptos himenaeos.
            </p>

            <h5 className="fw-semibold mb-2">Fun Facts</h5>
            <ul className="mb-0">
              <li>
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
                faucibus ex sapien vitae pellentesque sem placerat. In id cursus
                mi pretium tellus duis convallis
              </li>
              <li>
                Tempus leo eu aenean sed diam urna tempor. Ut hendrerit semper
                vel class aptent taciti sociosqu
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
                faucibus ex sapien vitae pellentesque sem placerat
              </li>
            </ul>
          </Col>
        </Row>

        <hr style={{ marginTop: "45px", marginBottom: "35px" }} />

        {/* EDUCATION */}
        <EducationSection />

        {/* SKILLS */}
        <SkillsSection/>
      </Container>
    </>
  );
}
