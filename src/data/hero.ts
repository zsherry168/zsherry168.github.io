import heroPortrait from "../assets/sherry_hero.png";

export interface HeroData {
  image: string;
  name: string;
  title: string;
  location: string;
  blurb: string;
}

const heroData: HeroData = {
  image: heroPortrait,
  name: "Sherry Zhang",
  title: "Software Engineer",
  location: "New York Metropolitan Area",
  blurb: `In Prudential Financial's Global Technology Rotational Program, 
  I build solutions that bring technology, finance, and business together. 
  I'm driven by impact and committed to STEM education and mentorship.`,
};

export default heroData;