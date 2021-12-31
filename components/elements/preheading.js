export default function Preheading({ data }) {
  return (
    <span id="preheading" className={`preheading ${data.type}`}>
      {data.text}
    </span>
  );
}
