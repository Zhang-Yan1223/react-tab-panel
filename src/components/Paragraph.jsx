// Keeps paragraph styling reusable and separate from the tab selection logic.
export function Paragraph({ children, className = '' }) {
  return <p className={`content-paragraph ${className}`.trim()}>{children}</p>;
}
