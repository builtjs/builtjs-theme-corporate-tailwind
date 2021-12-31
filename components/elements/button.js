export default function Button({ data }) {
  return (
    <a id="form-button" className={`btn btn-${data.type} w-full`} href="">
      {data.label}
    </a>
  );
}
