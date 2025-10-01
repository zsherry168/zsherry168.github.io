import { Row, Col } from "react-bootstrap";

export default function Hero({
  imageSrc,
  imageAlt,
  name,
  title,
  blurb,
  children,
}) {
  return (
    <Row className="align-items-start gy-4">
      <Col xs={12} md={5} lg={4}>
        <img
          src={imageSrc}
          alt={imageAlt}
          width={800}
          height={800}
          className="img-fluid rounded-1 shadow-sm"
        />
      </Col>
      <Col xs={12} md={7} lg={8}>
        <h1 className="fw-bold display-5 mb-2">{name}</h1>
        <div className="fs-5 text-body-emphasis mb-3">{title}</div>
        <p className="text-secondary mb-4" style={{ maxWidth: 680 }}>
          {blurb}
        </p>

        <div className="d-flex align-items-center gap-3">{children}</div>
      </Col>
    </Row>
  );
}