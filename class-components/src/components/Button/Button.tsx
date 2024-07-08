import { ButtonProps } from "./types";

export default function Button({
  type = "submit",
  onClick,
  children,
}: ButtonProps) {
  return (
    <button className="search-button" type={type} onClick={onClick}>
      {children}
    </button>
  );
}
