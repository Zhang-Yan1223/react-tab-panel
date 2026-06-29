// A small reusable heading component. The level prop lets the same component
// render h2, h3, etc. without changing the caller's content.
export function Heading({ children, level = 2, className = '' }) {
  const Tag = `h${level}`;

  return <Tag className={`content-heading ${className}`.trim()}>{children}</Tag>;
}
