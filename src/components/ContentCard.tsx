import { Button, Card } from "react-bootstrap";

export type ContentCardProps = {
  title: string;
  date?: string;
  desc?: string;
  img: string;
  link?: string;
  buttonText: string;
};

export default function ContentCard({
  title,
  date,
  desc,
  img,
  link,
  buttonText,
}: ContentCardProps) {
  const href = link ?? "#";
  return (
    <Card className="h-100 shadow-sm">
      <a href={href} aria-label={`Open ${title}`}>
        <Card.Img variant="top" src={img} alt={`${title} cover`} />
      </a>
      <Card.Body className="d-flex flex-column">
        <a href={href} style={{ textDecoration: "none", color: "black" }}>
          <Card.Title className="mb-2">{title}</Card.Title>
        </a>
        {date && <div className="text-secondary mb-2">{date}</div>}
        {desc && <Card.Text className="text-secondary mb-3">{desc}</Card.Text>}
        <Button variant="outline-dark" href={href} className="mt-auto align-self-start">
          {buttonText}
        </Button>
      </Card.Body>
    </Card>
  );
}