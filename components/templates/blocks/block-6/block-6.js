export default function Block1({ content }) {
  let { attributes } = content;
  return (
    <section
      id="block-6"
      className="template"
    >
      <div className="max-w-screen-xl px-4 py-20 mx-auto">
        <h1 className="max-w-3xl mx-auto mb-12 text-5xl font-bold leading-none text-gray-900 md:text-center lg:mb-16">
          {attributes.heading}
        </h1>
        <div className="flex flex-col md:flex-row">
          <div className="flex-1 md:px-4 mb-6 md:mb-0">
            <p>{attributes.text1}</p>
          </div>
          <div className="flex-1 md:px-4">
            <p className="font-light leading-loose text-gray-700">
              {attributes.text2}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
