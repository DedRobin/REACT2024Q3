import { InputProps } from "./types";

export default function Input({
  onClick,
  placeholder,
  className,
  defaultValue,
}: InputProps) {
  return (
    <input
      className={className}
      placeholder={placeholder}
      type="text"
      name="search-input"
      defaultValue={defaultValue}
      onClick={onClick}
    />
  );
}
