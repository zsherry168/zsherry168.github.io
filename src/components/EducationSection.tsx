import EducationCard, { type EducationCardProps } from "./EducationCard";
import education from "../data/education";

type EducationItem = { id: string } & EducationCardProps;

export default function EducationSection() {
  const items = education as EducationItem[];
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
