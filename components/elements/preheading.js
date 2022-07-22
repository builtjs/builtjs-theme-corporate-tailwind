export default function Preheading({ attributes }) {
  if (!attributes) return <></>;
  return (
    <span id="preheading" className={`preheading ${attributes.type} ${attributes.alignment}`}>
      {attributes.text}
    </span>
  );
}
