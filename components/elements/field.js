export default function Field({ attribute }) {
  return (
    <div key={attribute.name} className="mb-6">
      <label className="block text-sm leading-5 text-gray-700 dark:text-gray-400">
        {attribute.label}
      </label>
      {attribute.type === "text" && (
        <input
          name={attribute.name}
          className="mt-2 w-full border rounded-md py-3 px-5"
        />
      )}
      {attribute.type === "longtext" && (
        <textarea
          name={attribute.name}
          rows="5"
          className="mt-2 w-full border rounded-md p-5"
        ></textarea>
      )}
    </div>
  );
}
