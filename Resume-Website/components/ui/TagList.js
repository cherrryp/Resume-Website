export default function TagList({ items }) {
  return (
    <ul className="tags">
      {items.map((t) => <li key={t}>{t}</li>)}
    </ul>
  );
}
