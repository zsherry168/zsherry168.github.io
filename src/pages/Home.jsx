import { Container } from "react-bootstrap";
import Hero from "../components/Hero.jsx";
import PrimaryButton from "../components/PrimaryButton.jsx";
import SocialContacts from "../components/SocialContacts.jsx";
import FeaturedProjects from "../components/FeaturedProjects.jsx";
import hero from "../data/hero.js";
import { contacts, icons } from "../data/contacts.js";
import projects from "../data/projects.js";

export default function Home() {
  return (
    <>
      <Container
        className="py-4"
        style={{ marginTop: "80px", marginBottom: "20px" }}
      >
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
          <SocialContacts
            contacts={contacts}
            icons={icons}
          />
        </Hero>

        {/* Divider */}
        <hr style={{ marginTop: "45px", marginBottom: "35px" }} />

        {/* Featured Projects */}
        <FeaturedProjects projects={projects} />
      </Container>
    </>
  );
}