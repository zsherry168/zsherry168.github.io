import { Container, Row, Col } from "react-bootstrap";
import ContentCard from "../components/ContentCard";
import projects from "../data/projects";

export default function Projects() {
  return (
    <Container className="py-4" style={{ marginTop: "80px", marginBottom: "20px" }}>
      <h1 className="fw-bold display-5 mb-4">Projects</h1>
      <Row className="g-4">
        {projects.map((p) => (
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
    </Container>
  );
}