export function Paragraph({ children, className = '' }) {
  return <p className={`content-paragraph ${className}`.trim()}>{children}</p>;
}
