import linkedinLogo from "../assets/linkedin_logo.png";
import githubLogo from "../assets/github_logo.png";
import emailLogo from "../assets/email_logo.png";

export interface Contacts {
  linkedin: string;
  github: string;
  email: string;
}

export const contacts: Contacts = {
  linkedin: "https://www.linkedin.com/in/zsherry168/",
  github: "https://github.com/zsherry168",
  email: "mailto:sherrybzhang@gmail.com",
};

export interface IconMap {
  linkedin: string;
  github: string;
  email: string;
}

export const icons: IconMap = {
  linkedin: linkedinLogo,
  github: githubLogo,
  email: emailLogo,
};

export default { contacts, icons };