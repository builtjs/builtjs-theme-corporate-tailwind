export default function Button({ data }) {
  return (
    <div id="form-button" className={`btn btn-${data.type} w-full`}>
      {data.label}
    </div>
  );
}
