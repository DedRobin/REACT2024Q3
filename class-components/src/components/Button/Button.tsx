import { ButtonProps } from "./types";

export default function Button({
  className,
  type = "submit",
  onClick,
  children,
}: ButtonProps) {
  return (
    <button className={className} type={type} onClick={onClick}>
      {children}
    </button>
  );
}
