import { Container } from "react-bootstrap";
import ExperienceSection from "../components/ExperienceSection";
import "./Experience.css";
import { professional, academic, leadership, volunteering } from "../data/experience";

export default function Experience() {
  return (
    <Container className="py-4" style={{ marginTop: "80px", marginBottom: "20px" }}>
      <h1 className="fw-bold display-5 mb-4">Experience</h1>
      <ExperienceSection title="Professional Experience" items={professional} />
      <ExperienceSection title="Academic Experience" items={academic} className="mt-5" />
      <ExperienceSection title="Leadership & Involvement" items={leadership} className="mt-5" />
      <ExperienceSection title="Volunteering" items={volunteering} className="mt-5 mb-4" />
    </Container>
  );
}