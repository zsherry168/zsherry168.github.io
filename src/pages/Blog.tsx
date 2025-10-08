import { Container, Row, Col } from "react-bootstrap";
import ContentCard from "../components/ContentCard";
import articles from "../data/articles";

export default function Blog() {
  return (
    <Container className="py-4" style={{ marginTop: "80px", marginBottom: "20px" }}>
      <h1 className="fw-bold display-5 mb-4">Blogs</h1>
      <Row className="g-4">
        {articles.map((b) => (
          <Col key={b.id} xs={12} md={6} lg={4}>
            <ContentCard
              title={b.title}
              date={b.date}
              desc={b.desc}
              img={b.img}
              link={b.link}
              buttonText="View Article"
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
