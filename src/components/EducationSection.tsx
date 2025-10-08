import EducationCard, { type EducationCardProps } from "./EducationCard";
import education from "../data/education"; // now .ts

type EducationItem = { id: string } & EducationCardProps;

export default function EducationSection() {
  const items = education as EducationItem[]; // if education.ts exports the shape directly, remove this cast
  return (
    <section className="mb-4">
      <h2 className="fw-bold mb-3">Education</h2>
      {items.map(({ id, ...props }) => (
        <div key={id} className="mb-3">
          <EducationCard {...props} />
        </div>
      ))}
    </section>
  );
}
