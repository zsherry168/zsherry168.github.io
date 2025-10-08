import { Button } from "react-bootstrap";
import { type ReactNode, type MouseEventHandler } from "react";

export type PrimaryButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export default function PrimaryButton({ children, href, onClick }: PrimaryButtonProps) {
  return (
    <Button
      variant="dark"
      size="lg"
      className="px-4"
      style={{ fontSize: "17px", paddingTop: "10px", paddingBottom: "10px" }}
      href={href}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}
