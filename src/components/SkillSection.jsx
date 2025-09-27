import { Accordion } from "react-bootstrap";
import SkillLogoGrid from "./SkillLogoGrid";
import {
  languages,
  frameworksLibraries,
  toolsPlatforms,
  cloudInfra,
  designCollab,
} from "../data/skills.js";
import "../styles/skills.css";

const CATEGORIES = [
  {
    key: "languages",
    title: "Languages",
    items: languages
  },
  {
    key: "frameworksLibraries",
    title: "Frameworks & Libraries",
    items: frameworksLibraries,
  },
  {
    key: "toolsPlatforms",
    title: "Tools & Platforms",
    items: toolsPlatforms
  },
  {
    key: "cloudInfra",
    title: "Cloud & Infrastructure",
    items: cloudInfra
  },
  {
    key: "designCollab",
    title: "Design & Collaboration",
    items: designCollab
  },
];

export default function SkillsSection() {
  return (
    <section className="mb-4">
      <h2 className="fw-bold mb-3">Skills</h2>

      <Accordion
        className="skills-accordion"
        defaultActiveKey={null}
        alwaysOpen={false}
      >
        {CATEGORIES.map(({ key, title, items }, idx) => (
          <Accordion.Item eventKey={String(idx)} key={key}>
            <Accordion.Header>{title}</Accordion.Header>
            <Accordion.Body>
              <SkillLogoGrid items={items} />
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </section>
  );
}