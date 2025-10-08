import { Accordion } from "react-bootstrap";

export type ExperienceCardProps = {
  eventKey: string;
  title: string;
  org: string;
  location?: string;
  dates: string;
  bullets?: string[];
  logoSrc: string;
};

export default function ExperienceCard({
  eventKey,
  title,
  org,
  location,
  dates,
  bullets = [],
  logoSrc,
}: ExperienceCardProps) {
  return (
    <Accordion.Item eventKey={eventKey} className="mb-2 rounded-3 shadow-sm border-0 xp-item">
      <Accordion.Header>
        <div className="d-flex align-items-center gap-3 w-100">
          <div
            style={{
              width: 56,
              height: 56,
              flex: "0 0 56px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "transparent",
            }}
          >
            <img
              src={logoSrc}
              alt={`${org} logo`}
              width={50}
              height={50}
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain",
                display: "block",
              }}
            />
          </div>

          <div className="flex-grow-1">
            <div className="fw-semibold" style={{ marginBottom: 3 }}>
              {title}
            </div>
            <div className="text-secondary small" style={{ marginBottom: 3 }}>
              {location ? `${org} | ${location}` : org}
            </div>
            <div className="text-secondary small">
              <em>{dates}</em>
            </div>
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