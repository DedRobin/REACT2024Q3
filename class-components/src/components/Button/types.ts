export type ButtonProps = {
  className: string;
  type: "button" | "submit";
  onClick?: () => void;
  children?: React.ReactNode;
};
