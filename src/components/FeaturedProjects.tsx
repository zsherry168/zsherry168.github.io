import { Row, Col } from "react-bootstrap";
import ContentCard from "./ContentCard";

export type Project = {
  id: number | string;
  title: string;
  date: string;
  desc: string;
  img: string;
  link: string;
  featured?: boolean;
};

export type FeaturedProjectsProps = {
  projects: Project[];
};

export default function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  const featured = (projects ?? []).filter((p) => p.featured);
  return (
    <section>
      <h2 className="fw-bold mb-3">Featured Projects</h2>
      <Row className="g-4">
        {featured.map((p) => (
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
    </section>
  );
}