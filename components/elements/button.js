export default function Button({ attribute }) {
  return (
    <div className="text-center form-button">
      <button className="flex items-center justify-center w-full p-0 text-center rounded-md text-lightest bg-secondary hover:bg-secondary-dark transition duration-200 ease-in-out">
        <span className="w-full p-3 text-center d-block">
          {attribute.text}
        </span>
      </button>
    </div>
  );
}
