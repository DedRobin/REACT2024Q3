export type ButtonProps = {
  type: "button" | "submit";
  onClick?: () => void;
  children?: React.ReactNode;
};
