import { ButtonLink, Preheading } from "@/elements";

export default function Block3({ content }) {
  let { attributes } = content;
  return (
    <section id="block-3" className="template">
      <div className="max-w-screen-xl px-4 py-20 mx-auto">
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1 lg:px-4">
            <Preheading attribute={attributes.preheading}></Preheading>
            <h2 className="mb-12 text-5xl font-bold leading-none text-gray-900 lg:mb-0">{attributes.heading}</h2>
          </div>
          <div className="flex-1 lg:px-4">
            <p className="mb-6 font-light leading-loose text-gray-700">{attributes.blurb}</p>
          </div>
          <div className="flex-1 lg:px-4">
            <p className="mb-12 font-light leading-loose text-gray-700">{attributes.blurb2}</p>
            {attributes.buttonLinks && (
              <div className="flex flex-col items-center sm:flex-row">
                {attributes.buttonLinks.map((button) => {
                  return <ButtonLink key={button.label} attribute={button}></ButtonLink>;
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
