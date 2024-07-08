import { InputProps } from "./types";

export default function Input({
  onClick,
  placeholder,
  defaultValue,
}: InputProps) {
  return (
    <input
      className="search-input"
      placeholder={placeholder}
      type="text"
      name="search-input"
      defaultValue={defaultValue}
      onClick={onClick}
    />
  );
}
