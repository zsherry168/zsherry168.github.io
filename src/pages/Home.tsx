import { Container } from "react-bootstrap";
import Hero from "../components/Hero";
import PrimaryButton from "../components/PrimaryButton";
import SocialContacts from "../components/SocialContacts";
import FeaturedProjects from "../components/FeaturedProjects";
import hero from "../data/hero";
import { contacts, icons } from "../data/contacts";
import projects from "../data/projects";

export default function Home() {
  return (
    <Container className="py-4" style={{ marginTop: "80px", marginBottom: "20px" }}>
      {/* Hero */}
      <Hero
        imageSrc={hero.image}
        imageAlt="Sherry Zhang"
        name={hero.name}
        title={hero.title}
        location={hero.location}
        blurb={hero.blurb}
      >
        <PrimaryButton href="/about">About Me</PrimaryButton>
        <SocialContacts contacts={contacts} icons={icons} />
      </Hero>

      {/* Divider */}
      <hr style={{ marginTop: "45px", marginBottom: "35px" }} />

      {/* Featured Projects */}
      <FeaturedProjects projects={projects} />
    </Container>
  );
}