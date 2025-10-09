import { Container, Row, Col } from "react-bootstrap";
import ContentCard from "../components/ContentCard";
import articles from "../data/articles";

export default function Blog() {
  return (
    <Container className="py-4" style={{ marginTop: "80px", marginBottom: "20px" }}>
      <h1 className="fw-bold display-5 mb-4">Blogs</h1>
      <Row className="g-4">
        {articles.map((a) => (
          <Col key={a.id} xs={12} md={6} lg={4}>
            <ContentCard
              title={a.title}
              date={a.date}
              desc={a.desc}
              img={a.img}
              link={`/blog/${a.slug}`}
              buttonText="View Article"
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
