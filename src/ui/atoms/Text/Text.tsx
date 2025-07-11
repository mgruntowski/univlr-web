import { cn, getMargins } from "@/lib/utils";

import { textVariants } from "./styles";
import { TextProps } from "./types";

const Text: React.FC<TextProps> = ({
  children,
  className,
  onClick,
  title,
  m,
  mt,
  mr,
  mb,
  ml,
  mx,
  my,
  ...props
}) => (
  <p
    className={cn(
      textVariants({ className, ...props }),
      getMargins({ m, mt, mr, mb, ml, mx, my })
    )}
    onClick={onClick}
    title={title}
  >
    {children}
  </p>
);

export default Text;
