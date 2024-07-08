import { InputProps } from "./types";

export default function Input({ onClick, placeholder, children }: InputProps) {
  return (
    <input
      className="search-input"
      placeholder={placeholder}
      type="text"
      name="search-input"
      onClick={onClick}
    >
      {children}
    </input>
  );
}
