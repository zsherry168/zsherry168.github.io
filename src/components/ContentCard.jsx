import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";

export default function ContentCard({ title, desc, img, link, buttonText}) {
  return (
    <Card className="h-100 shadow-sm">
      <a href={link || "#"} aria-label={`Open ${title}`}>
        <Card.Img variant="top" src={img} alt={`${title} cover`} />
      </a>
      <Card.Body className="d-flex flex-column">
        <a href={link} style={{ textDecoration: "none", color: "black" }}>
          <Card.Title className="mb-2">{title}</Card.Title>
        </a>
        {desc && (
          <Card.Text className="text-secondary mb-3">
            {desc}
          </Card.Text>
        )}
        <Button variant="outline-dark" href={link} className="mt-auto align-self-start">
          {buttonText}
        </Button>
      </Card.Body>
    </Card>
  );
}

ContentCard.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string,
  img: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
	buttonTextL: PropTypes.string.isRequired
};
