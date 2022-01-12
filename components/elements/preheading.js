export default function Preheading({ attributes }) {
  return (
    <span id="preheading" className={`preheading ${attributes.type}`}>
      {attributes.text}
    </span>
  );
}
