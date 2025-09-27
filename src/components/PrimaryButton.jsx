import { Button } from "react-bootstrap";

export default function PrimaryButton({ children, href, onClick }) {
  return (
    <Button
      variant="dark"
      size="lg"
      className="px-4"
      style={{
        fontSize: "17px",
        paddingTop: "10px",
        paddingBottom: "10px",
      }}
      href={href}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}
