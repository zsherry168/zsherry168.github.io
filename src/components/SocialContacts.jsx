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
          src={icons.linkedin}
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
          src={icons.github}
          alt="GitHub"
          width={size}
          height={size}
          style={{ display: "block" }}
        />
      </a>

      <a href={contacts.email} aria-label="Email">
        <img
          src={icons.email}
          alt="Email"
          width={size}
          height={size}
          style={{ display: "block" }}
        />
      </a>
    </>
  );
}
