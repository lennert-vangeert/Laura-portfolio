import { Link } from "react-router-dom";
import { ReactNode } from "react";
import styles from "./pillButton.module.css";

type PillButtonProps = {
  /** Target URL (placeholder "#" for now). */
  to: string;
  children: ReactNode;
  /** Optional click handler (e.g. to close a drawer). */
  onClick?: () => void;
  /** Extra class names to merge with the pill styles. */
  className?: string;
};

/**
 * The recurring blue/cream pill button from the design (Contact, CV, ...).
 * Renders a React-Router Link so it works for both internal nav and placeholders.
 */
const PillButton = ({ to, children, onClick, className }: PillButtonProps) => (
  <Link
    to={to}
    onClick={onClick}
    className={className ? `${styles.pill} ${className}` : styles.pill}
  >
    {children}
  </Link>
);

export default PillButton;
