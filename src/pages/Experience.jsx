import { Container, Accordion } from "react-bootstrap";

/** ---------- Data ---------- */
// Put logos in public/images or import them; use null for a text badge.
const professional = [
  {
    title: "Software Engineer",
    org: "Prudential Financial",
    location: "Newark, NJ",
    dates: "Jul 2025 – Present",
    logoText: "PF",
    bullets: [
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Ex sapien vitae pellentesque sem placerat in id.",
      "Pretium tellus duis convallis tempus leo eu aenean. Uma tempor pulvinar vivamus fringilla lacus nec metus.",
    ],
  },
  {
    title: "Software Engineer Intern",
    org: "Prudential Financial",
    location: "Newark, NJ",
    dates: "Jun 2024 – Aug 2024",
    logoText: "PF",
    bullets: [
      "Semper vel class aptent taciti sociosqu ad litora.",
      "Conubia nostra inceptos himenaeos orci varius natoque penatibus.",
    ],
  },
];

const academic = [
  {
    title: "Research Assistant",
    org: "Penn State College of Engineering",
    location: "University Park, PA",
    dates: "Oct 2024 – May 2025",
    logoText: "PSU",
    bullets: [
      "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
      "Quisque faucibus ex sapien vitae pellentesque sem placerat.",
    ],
  },
  {
    title: "Teaching Assistant",
    org: "Penn State College of Engineering",
    location: "University Park, PA",
    dates: "Jan 2023 – May 2025",
    logoText: "PSU",
    bullets: [
      "In id cursus mi pretium tellus duis convallis.",
      "Tempus leo eu aenean sed diam urna tempor.",
    ],
  },
];

const leadership = [
  {
    title: "Mentee",
    org: "AWS She Builds Mentorship Program",
    location: "Virtual",
    dates: "Sep 2025 – Present",
    // logoSrc: "/images/aws.png",
    logoText: "AWS",
    bullets: ["Pulvinar vivamus fringilla lacus nec metus bibendum egestas."],
  },
  {
    title: "Mentor",
    org: "Penn State Women in Engineering Program",
    location: "University Park, PA",
    dates: "Mar 2023 – May 2024",
    logoText: "PSU",
    bullets: ["Iaculis massa nisl malesuada lacinia integer nunc posuere."],
  },
  {
    title: "Study Group Facilitator",
    org: "Penn State Women in Engineering Program",
    location: "University Park, PA",
    dates: "Aug 2023 – Dec 2023",
    logoText: "PSU",
    bullets: ["Ut hendrerit semper vel class aptent taciti sociosqu."],
  },
];

const volunteering = [
  {
    title: "Peer Tutor",
    org: "IEEE-Eta Kappa Nu",
    location: "University Park, PA",
    dates: "Sep 2023 – May 2024",
    logoText: "HKN",
    bullets: ["Ad litora torquent per conubia nostra inceptos himenaeos."],
  },
  {
    title: "Instructor",
    org: "Girls Who Code",
    location: "University Park, PA",
    dates: "Jan 2024 – May 2024",
    logoText: "GWC",
    bullets: ["Lorem ipsum dolor sit amet consectetur adipiscing elit."],
  },
];

/** ---------- Page ---------- */
export default function Experience() {
  return (
    <>
      <Container style={{ backgroundColor: "#fff", marginTop: "90px" }}>
        <h1 className="fw-bold display-5 mb-2">Experience</h1>

        <Section title="Professional Experience" items={professional} defaultOpen="0" />
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
      <Accordion defaultActiveKey={defaultOpen} alwaysOpen={false}>
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
  logoText = "",
}) {
  return (
    <Accordion.Item eventKey={eventKey} className="mb-2 rounded-2 shadow-sm border-0 xp-item">
      <Accordion.Header>
        <div className="d-flex align-items-start gap-3 w-100">
          {logoSrc ? (
            <img src={logoSrc} alt={`${org} logo`} className="xp-logo-img" />
          ) : (
            <div className="xp-logo rounded-circle d-inline-flex align-items-center justify-content-center">
              {logoText}
            </div>
          )}
          <div className="flex-grow-1">
            <div className="fw-semibold">{title}</div>
            <div className="text-secondary small">
              {org} | {location}
            </div>
            <div className="text-secondary small">{dates}</div>
          </div>
        </div>
      </Accordion.Header>

      <Accordion.Body>
        {bullets?.length > 0 && (
          <ul className="mb-0">
            {bullets.map((b, i) => (
              <li key={i}>&#8226; {b}</li>
            ))}
          </ul>
        )}
      </Accordion.Body>
    </Accordion.Item>
  );
}