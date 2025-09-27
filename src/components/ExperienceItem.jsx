import { Accordion } from "react-bootstrap";

export default function ExperienceItem({
  eventKey,
  title,
  org,
  location,
  dates,
  bullets = [],
  logoSrc
}) {
  return (
    // One collapsible card inside the parent <Accordion>
    <Accordion.Item eventKey={eventKey} className="mb-2 rounded-2 shadow-sm border-0 xp-item">
      <Accordion.Header>
        {/* Flex row: fixed logo column + fluid text column */}
        <div className="d-flex align-items-start gap-3 w-100">
          {/* Fixed-size logo box that aligns text perfectly across cards */}
          <div
            style={{
              width: 56,
              height: 56,
              flex: "0 0 56px",           // lock column width so text are all aligned
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "transparent"
            }}
          >
            {/* Logo scales to fix the box */}
            <img
              src={logoSrc}
              alt={`${org} logo`}
              width={48}
              height={48}
              style={{ 
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain",      // preserve aspect ratio for logos
                display: "block"
              }}
            />
          </div>
          {/* Text block: title, org/location, dates */}
          <div className="flex-grow-1">
            <div className="fw-semibold" style={{ marginBottom: 3 }}>{title}</div>
            <div className="text-secondary small" style={{ marginBottom: 3 }}>
              { location ? `${org} | ${location}` : org }
            </div>
            <div className="text-secondary small"><em>{dates}</em></div>
          </div>
        </div>
      </Accordion.Header>
      
      {/* Collapsible body: render bullet points only if present */}
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
