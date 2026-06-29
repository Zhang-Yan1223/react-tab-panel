export function Heading({ children, level = 2, className = '' }) {
  const Tag = `h${level}`;

  return <Tag className={`content-heading ${className}`.trim()}>{children}</Tag>;
}
