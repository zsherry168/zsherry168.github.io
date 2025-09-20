import { Container, Accordion } from "react-bootstrap";
import "./Experience.css";
import { professional, academic, leadership, volunteering } from "../data/experience.js";

/** ---------- Page ---------- */
export default function Experience() {
  return (
    <>
      <Container className="py-4" style={{ marginTop: "80px", marginBottom: "20px" }}>
        <h1 className="fw-bold display-5 mb-4">Experience</h1>
        <Section title="Professional Experience" items={professional} />
        <Section title="Academic Experience" items={academic} className="mt-5" />
        <Section title="Leadership & Involvement" items={leadership} className="mt-5" />
        <Section title="Volunteering" items={volunteering} className="mt-5 mb-4" />
      </Container>
    </>
  );
}

/** ---------- Section & Item Components ---------- */

function Section({ title, items, className = "", defaultOpen = null }) {
  return (
    <section className={className}>
      <h2 className="h4 fw-bold mb-3">{title}</h2>
      <Accordion defaultActiveKey={defaultOpen ?? undefined} alwaysOpen={true} className="xp-accordion">
        {items.map((item, idx) => (
          <ExperienceItem key={`${title}-${idx}`} eventKey={String(idx)} {...item} />
        ))}
      </Accordion>
    </section>
  );
}

function ExperienceItem({
  eventKey,
  title,
  org,
  location,
  dates,
  bullets = [],
  logoSrc,
}) {
  return (
    <Accordion.Item eventKey={eventKey} className="mb-2 rounded-2 shadow-sm border-0 xp-item">
      <Accordion.Header>
        <div className="d-flex align-items-start gap-3 w-100">
          {/* Fixed logo box so text always starts at the same x-position */}
          <div
            style={{
              width: 56,          // pick your size (48/56/64)
              height: 56,
              flex: "0 0 56px",   // <- lock the column width
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",    // optional if you want circular crops
              background: "transparent"
            }}
          >
            <img
              src={logoSrc}
              alt={`${org} logo`}
              width={48} height={48}         // reserves space; prevents layout shift
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain",       // scales any aspect ratio nicely
                display: "block"
              }}
            />
          </div>

          {/* Text column stays perfectly aligned across cards */}
          <div className="flex-grow-1">
            <div className="fw-semibold" style={{ marginBottom: 3 }}>{title}</div>
            <div className="text-secondary small" style={{ marginBottom: 3 }}>
              {org} | {location}
            </div>
            <div className="text-secondary small"><em>{dates}</em></div>
          </div>
        </div>
      </Accordion.Header>


      <Accordion.Body>
        {bullets?.length > 0 && (
          <ul className="mb-0">
            {bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        )}
      </Accordion.Body>
    </Accordion.Item>
  );
}