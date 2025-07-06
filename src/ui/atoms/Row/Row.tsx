import { rowStyles } from "./styles";
import { RowProps } from "./types";

const Row: React.FC<RowProps> = ({ children, className }) => (
  <div className={rowStyles({ className })}>{children}</div>
);

export default Row;
