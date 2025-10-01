import linkedinLogo from "../assets/linkedin_logo.png";
import githubLogo from "../assets/github_logo.png";
import emailLogo from "../assets/email_logo.png";

export default function SocialContacts({ contacts, icons, size = 30 }) {
  return (
    <>
      <a
        href={contacts.linkedin}
        aria-label="LinkedIn"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={linkedinLogo}
          alt="LinkedIn"
          width={size - 1}
          height={size - 1}
          style={{ display: "block" }}
        />
      </a>

      <a
        href={contacts.github}
        aria-label="GitHub"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={githubLogo}
          alt="GitHub"
          width={size}
          height={size}
          style={{ display: "block" }}
        />
      </a>

      <a href={contacts.email} aria-label="Email">
        <img
          src={emailLogo}
          alt="Email"
          width={size}
          height={size}
          style={{ display: "block" }}
        />
      </a>
    </>
  );
}
