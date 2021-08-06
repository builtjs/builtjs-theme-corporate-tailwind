export default function Button({ attribute }) {
  return (
    <div className="form-button text-center">
      <button className="w-full flex items-center justify-center rounded-md p-0 text-center text-lightest bg-secondary hover:bg-secondary-dark transition duration-200 ease-in-out">
        <span className="d-block w-full text-center p-3">
          {attribute.text}
        </span>
      </button>
    </div>
  );
}
