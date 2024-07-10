import { InputProps } from "./types";

export default function Input({
  onClick,
  placeholder,
  className,
  name,
  defaultValue,
}: InputProps) {
  return (
    <input
      className={className}
      placeholder={placeholder}
      type="text"
      name={name}
      defaultValue={defaultValue}
      onClick={onClick}
    />
  );
}
