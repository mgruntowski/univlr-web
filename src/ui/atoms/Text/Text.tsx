import { textVariants } from "./styles";
import { TextProps } from "./types";

const Text: React.FC<TextProps> = ({
  variant = "bodyMedium",
  children,
  bold = false,
  className,
  onClick,
  title,
}) => {
  return (
    <p
      className={textVariants({
        variant,
        weight: bold ? "bold" : "normal",
        className,
      })}
      onClick={onClick}
      title={title}
    >
      {children}
    </p>
  );
};

export default Text;
