export default function Preheading({ attribute }) {
  return (
    <span id="preheading" className={`preheading ${attribute.type}`}>
      {attribute.text}
    </span>
  );
}
