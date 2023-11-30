// index.ts

import type { ButtonProps } from "./button.props";
import button from "./button.cva";

const Button: React.FC<ButtonProps> = ({
  className,
  theme,
  size,
  text,
  ...props
}) => (
  <button className={button({ theme, size, className })} {...props}>
    {text}
  </button>
);

export default Button;
