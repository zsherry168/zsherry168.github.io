import { Container, Accordion } from "react-bootstrap";
import pruLogo from "../assets/prudential_logo.png";
import psuLogo from "../assets/psu_logo.png";
import awsLogo from "../assets/aws_logo.png";
import hknLogo from "../assets/hkn_logo.png";
import gwcLogo from "../assets/gwc_logo.png";
/** ---------- Data ---------- */
// Put logos in public/images or import them; use null for a text badge.
const professional = [
  {
    title: "Software Engineer",
    org: "Prudential Financial",
    location: "Newark, NJ",
    dates: "Jul 2025 – Present",
    logoSrc: pruLogo,
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
    logoSrc: pruLogo,
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
    logoSrc: psuLogo,
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
    logoSrc: psuLogo,
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
    logoSrc: awsLogo,
    bullets: ["Pulvinar vivamus fringilla lacus nec metus bibendum egestas."],
  },
  {
    title: "Mentor",
    org: "Penn State Women in Engineering Program",
    location: "University Park, PA",
    dates: "Mar 2023 – May 2024",
    logoSrc: psuLogo,
    bullets: ["Iaculis massa nisl malesuada lacinia integer nunc posuere."],
  },
  {
    title: "Study Group Facilitator",
    org: "Penn State Women in Engineering Program",
    location: "University Park, PA",
    dates: "Aug 2023 – Dec 2023",
    logoSrc: psuLogo,
    bullets: ["Ut hendrerit semper vel class aptent taciti sociosqu."],
  },
];

const volunteering = [
  {
    title: "Peer Tutor",
    org: "IEEE-Eta Kappa Nu Honor Society",
    location: "University Park, PA",
    dates: "Sep 2023 – May 2024",
    logoSrc: hknLogo,
    bullets: ["Ad litora torquent per conubia nostra inceptos himenaeos."],
  },
  {
    title: "Instructor",
    org: "Girls Who Code",
    location: "University Park, PA",
    dates: "Jan 2024 – May 2024",
    logoSrc: gwcLogo,
    bullets: ["Lorem ipsum dolor sit amet consectetur adipiscing elit."],
  },
];

/** ---------- Page ---------- */
export default function Experience() {
  return (
    <>
      <Container className="py-4" style={{ marginTop: "80px", marginBottom: "20px" }}>
        <h1 className="fw-bold display-5 mb-4">Experience</h1>
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
}) {
  return (
    <Accordion.Item eventKey={eventKey} className="mb-2 rounded-2 shadow-sm border-0 xp-item">
      <Accordion.Header>
        <div className="d-flex align-items-start gap-3 w-100">
          <img
            src={logoSrc}
            alt={`${org} logo`}
            style={{
              width: "45px",
              height: "45px",
              objectFit: "contain",// ensures aspect ratio preserved
              background: "transparent",
            }}
          />
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
              <li key={i}>{b}</li>
            ))}
          </ul>
        )}
      </Accordion.Body>
    </Accordion.Item>
  );
}