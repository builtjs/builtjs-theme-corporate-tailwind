export default function Field({ data }) {
  return (
    <div key={data.name} className="mb-6">
      <label className="block text-sm text-gray-700 dark:text-gray-400">{data.label}</label>
      {data.type === "text" && <input name={data.name} className="w-full px-5 py-3 mt-2 border rounded-lg" />}
      {data.type === "longtext" && <textarea name={data.name} rows="5" className="w-full p-5 mt-2 border rounded-lg"></textarea>}
    </div>
  );
}
