export default function Block3({ content }) {
  let { attributes } = content;
  return (
    <section id="block-3" className="template">
      <div className="px-4 py-20 mx-auto max-w-screen-xl">
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1 lg:px-4">
            <h1 className="mb-12 text-5xl font-bold leading-none text-gray-900 lg:mb-0">
              {attributes.heading}
            </h1>
          </div>
          <div className="flex-1 lg:px-4">
            <p className="lg:mb-0">{attributes.text1}</p>
          </div>
          <div className="flex-1 lg:px-4">
            <p className="font-light leading-loose text-gray-700">
              {attributes.text2}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
