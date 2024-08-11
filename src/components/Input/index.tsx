type InputProps = {
  className: string;
  name: string;
  onClick?: () => void;
  placeholder?: string;
  defaultValue?: string;
  hidden?: boolean;
};

export default function Input({
  onClick,
  placeholder,
  className,
  name,
  defaultValue,
  hidden,
}: InputProps) {
  return (
    <input
      className={className}
      placeholder={placeholder}
      type="text"
      name={name}
      defaultValue={defaultValue}
      onClick={onClick}
      hidden={hidden}
    />
  );
}
