import { Accordion } from "react-bootstrap";
import ExperienceCard from "./ExperienceCard";

export default function ExperienceSection({
  title,
  items,
  className = "",
  defaultOpen = null,
  alwaysOpen = true,
}) {
  return (
    <section className={className}>
      <h2 className="fw-bold mb-3">{title}</h2>
      <Accordion
        className="xp-accordion"
        alwaysOpen={alwaysOpen}
        defaultActiveKey={defaultOpen ?? undefined}
      >
        {items.map((item, idx) => (
          <ExperienceCard
            key={`${title}-${idx}`}
            eventKey={String(idx)}
            {...item}
          />
        ))}
      </Accordion>
    </section>
  );
}
