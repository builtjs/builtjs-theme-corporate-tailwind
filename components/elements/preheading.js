export default function Preheading({ attributes }) {
  return (
    <span id="preheading" className={`preheading ${attributes.type} ${attributes.alignment}`}>
      {attributes.text}
    </span>
  );
}
