export default function Button({ attribute }) {
  return (
    <a id="form-button" className={`btn btn-${attribute.type} w-full`} href="">
      {attribute.label}
    </a>
  );
}
