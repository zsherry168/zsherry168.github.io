import { Container, Row, Col, Card, Button } from "react-bootstrap";
import blogCover from "../images/blog_placeholder.png";

const blogs = [
  {
    id: 6,
    title: "Blog 6",
    desc: "Description of blog",
    img: blogCover,
    link: "/blogs/blog-6",
  },
  {
    id: 5,
    title: "Blog 5",
    desc: "Description of blog",
    img: blogCover,
    link: "/blogs/blog-5",
  },
  {
    id: 4,
    title: "Blog 4",
    desc: "Description of blog",
    img: blogCover,
    link: "/blogs/blog-4",
  },
  {
    id: 3,
    title: "Blog 3",
    desc: "Description of blog",
    img: blogCover,
    link: "/blogs/blog-3",
  },
  {
    id: 2,
    title: "Blog 2",
    desc: "Description of blog",
    img: blogCover,
    link: "/blogs/blog-2",
  },
  {
    id: 1,
    title: "Blog 1",
    desc: "Description of blog",
    img: blogCover,
    link: "/blogs/blog-1",
  },
];

export default function Blogs() {
  return (
    <>
      <Container className="py-4" style={{ marginTop: "90px" }}>
        <h1 className="fw-bold display-5 mb-2">Blogs</h1>

        <Row className="g-4">
          {blogs.map((p) => (
            <Col key={p.id} xs={12} md={6} lg={4}>
              <Card className="h-100 shadow-sm">
                <Card.Img variant="top" src={p.img} alt={`${p.title} cover`} />
                <Card.Body>
                  <Card.Title>{p.title}</Card.Title>
                  <Card.Text className="text-secondary">{p.desc}</Card.Text>
                  <Button variant="outline-dark" href={p.link}>
                    View Blog
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
