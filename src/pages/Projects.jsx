import { Container, Row, Col, Card, Button } from "react-bootstrap";
import projectCover from "../images/project_placeholder.jpg";

const projects = [
  {
    id: 6,
    title: "Project 6",
    desc: "Description of project",
    img: projectCover,
    link: "/projects/project-6",
  },
  {
    id: 5,
    title: "Project 5",
    desc: "Description of project",
    img: projectCover,
    link: "/projects/project-5",
  },
  {
    id: 4,
    title: "Project 4",
    desc: "Description of project",
    img: projectCover,
    link: "/projects/project-4",
  },
  {
    id: 3,
    title: "Project 3",
    desc: "Description of project",
    img: projectCover,
    link: "/projects/project-3",
  },
  {
    id: 2,
    title: "Project 2",
    desc: "Description of project",
    img: projectCover,
    link: "/projects/project-2",
  },
  {
    id: 1,
    title: "Project 1",
    desc: "Description of project",
    img: projectCover,
    link: "/projects/project-1",
  },
];

export default function Projects() {
  return (
    <>
      <Container className="py-4" style={{ marginTop: "90px" }}>
        <h1 className="fw-bold display-5 mb-2">Projects</h1>

        <Row className="g-4">
          {projects.map((p) => (
            <Col key={p.id} xs={12} md={6} lg={4}>
              <Card className="h-100 shadow-sm">
                <Card.Img variant="top" src={p.img} alt={`${p.title} cover`} />
                <Card.Body>
                  <Card.Title>{p.title}</Card.Title>
                  <Card.Text className="text-secondary">{p.desc}</Card.Text>
                  <Button variant="outline-dark" href={p.link}>
                    View Project
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}