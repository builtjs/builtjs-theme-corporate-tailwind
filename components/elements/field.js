export default function Field({ attributes }) {
  return (
    <div key={attributes.name} className="mb-6">
      <label className="block text-sm text-gray-700 dark:text-gray-400">{attributes.label}</label>
      {attributes.type === "text" && <input name={attributes.name} className="w-full px-5 py-3 mt-2 border rounded-lg" />}
      {attributes.type === "longtext" && <textarea name={attributes.name} rows="5" className="w-full p-5 mt-2 border rounded-lg"></textarea>}
    </div>
  );
}
