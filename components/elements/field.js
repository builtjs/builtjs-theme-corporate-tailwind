export default function Field({ attribute }) {
  return (
    <div key={attribute.name} className="mb-6">
      <label className="block text-sm text-gray-700 leading-5 dark:text-gray-400">
        {attribute.label}
      </label>
      {attribute.type === "text" && (
        <input
          name={attribute.name}
          className="w-full px-5 py-3 mt-2 border rounded-md"
        />
      )}
      {attribute.type === "longtext" && (
        <textarea
          name={attribute.name}
          rows="5"
          className="w-full p-5 mt-2 border rounded-md"
        ></textarea>
      )}
    </div>
  );
}
