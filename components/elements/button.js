export default function Button({ attributes }) {
  return (
    <div id="form-button" className={`btn btn-${attributes.type} w-full`}>
      {attributes.label}
    </div>
  );
}
