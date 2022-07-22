export default function Button({ attributes }) {
  if (!attributes) return <></>;
  return (
    <div id="form-button" className={`btn btn-${attributes.type} w-full`}>
      {attributes.label}
    </div>
  );
}
