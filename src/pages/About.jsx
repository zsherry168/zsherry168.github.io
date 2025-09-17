import { Container, Row, Col, Accordion, Badge } from "react-bootstrap";
import { SiFigma, SiAdobephotoshop, SiAdobelightroom } from "react-icons/si";
import aboutHero from "../assets/sherry_eecs.jpg";

export default function About() {
  return (
    <>
      <Container style={{ backgroundColor: "#fff", marginTop: "90px" }}>
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
              Body text for your whole article or post. We’ll put in some lorem ipsum to
              show how a filled-out page might look: Excepteur efficient emerging, minim
              veniam anim aute carefully curated. Punctual adipisicing, essential lovely
              queen tempor eiusmod irure. Impeccable aute quality of life soft power
              partiatur. Zürich sleepy perfect consectetur.
            </p>
            <p className="text-secondary mb-4" style={{ maxWidth: 700 }}>
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex 
              sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis 
              convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla 
              lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer 
              nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora 
              torquent per conubia nostra inceptos himenaeos.
            </p>

            <h5 className="fw-semibold mb-2">Fun Facts</h5>
            <ul className="mb-0">
              <li>
                &#8226; Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque 
                faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium 
                tellus duis convallis
              </li>
              <li>
                &#8226; Tempus leo eu aenean sed diam urna tempor. Ut hendrerit semper vel 
                class aptent taciti sociosqu
              </li>
              <li>
                &#8226; Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus 
                ex sapien vitae pellentesque sem placerat
              </li>
            </ul>
          </Col>
        </Row>

        <hr className="my-5" />

        {/* EDUCATION */}
        <section className="mb-5">
          <h2 className="fw-bold mb-3">Education</h2>
          <Accordion defaultActiveKey="0" alwaysOpen={false}>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <div className="d-flex align-items-center gap-3">
                  {/* simple “seal” circle; replace with your image/logo if you prefer */}
                  <div className="edu-seal rounded-circle d-inline-flex align-items-center justify-content-center">
                    PSU
                  </div>
                  <div>
                    <div className="fw-semibold">
                      The Pennsylvania State University
                    </div>
                    <div className="text-secondary small">
                      B.S. in Computer Science · Minor in Mathematics
                    </div>
                  </div>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <div className="row g-3">
                  <div className="col-12 col-md-6">
                    <div className="text-secondary small mb-1">Highlights</div>
                    <ul className="mb-0">
                      <li>GPA: 3.82/4.00</li>
                      <li>Teaching Assistant</li>
                      <li>Undergraduate Research Assistant</li>
                    </ul>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="text-secondary small mb-1">
                      Relevant Coursework
                    </div>
                    <ul className="mb-0">
                      <li>Machine Learning · Artificial Intelligence</li>
                      <li>Database Management Systems</li>
                      <li>Mathematics of Finance · Personal Finance</li>
                      <li>Basic Patent Process</li>
                    </ul>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </section>

        {/* SKILLS */}
        <section className="mb-4">
          <h2 className="fw-bold mb-3">Skills</h2>

          <Accordion defaultActiveKey={null} alwaysOpen={false}>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Languages</Accordion.Header>
              <Accordion.Body>
                <SkillRow items={["Python", "C", "Java", "SQL", "JavaScript", "HTML", "CSS"]} />
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>Frameworks &amp; Libraries</Accordion.Header>
              <Accordion.Body>
                <SkillRow items={["React", "Bootstrap", "TailwindCSS", "NumPy", "Pandas", "Matplotlib", "Scikit-learn"]} />
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>Tools &amp; Platforms</Accordion.Header>
              <Accordion.Body>
                <SkillRow items={["Git", "GitHub", "Vite", "VS Code", "PyCharm"]} />
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
              <Accordion.Header>Cloud &amp; Infrastructure</Accordion.Header>
              <Accordion.Body>
                <SkillRow items={["Genesys Cloud CX", "Salesforce Service Cloud", "OmniStudio (Salesforce)"]} />
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="4">
              <Accordion.Header>Design &amp; Collaboration</Accordion.Header>
              <Accordion.Body>
                {/* icons + labels as chips */}
                <div className="d-flex flex-wrap gap-3">
                  <SkillChip icon={<SiFigma />} label="Figma" />
                  <SkillChip icon={<SiAdobephotoshop />} label="Adobe Photoshop" />
                  <SkillChip icon={<SiAdobelightroom />} label="Adobe Lightroom" />
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </section>
      </Container>
    </>
  );
}

/* ---------- small helper components ---------- */

function SkillRow({ items = [] }) {
  return (
    <div className="d-flex flex-wrap gap-2">
      {items.map((t) => (
        <Badge key={t} bg="light" text="dark" className="border">
          {t}
        </Badge>
      ))}
    </div>
  );
}

function SkillChip({ icon, label }) {
  return (
    <div className="skill-chip d-inline-flex align-items-center gap-2 px-3 py-2 rounded-2 border bg-light">
      <span className="fs-5 d-inline-flex align-items-center">{icon}</span>
      <span className="fw-medium">{label}</span>
    </div>
  );
}
