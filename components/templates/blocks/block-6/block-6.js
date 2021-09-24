import { ButtonLink, Preheading } from "@/elements";

export default function Block1({ content }) {
  let { attributes } = content;
  return (
    <section id="block-6" className="template">
      <div className="max-w-screen-xl px-4 py-20 mx-auto">
        <div className="flex justify-center">
          <Preheading attribute={attributes.preheading}></Preheading>
        </div>
        <h2 className="max-w-3xl mx-auto mb-12 text-5xl font-bold leading-none text-gray-900 md:text-center lg:mb-16">{attributes.heading}</h2>
        <div className="flex flex-col md:flex-row">
          <div className="flex-1 mb-6 md:px-4 md:mb-0">
            <p>{attributes.blurb}</p>
          </div>
          <div className="flex-1 md:px-4">
            <p className="mb-16">{attributes.blurb2}</p>
          </div>
        </div>
        {attributes.buttonLinks && (
          <div className="flex flex-col items-center justify-center sm:flex-row">
            {attributes.buttonLinks.map((button) => {
              return <ButtonLink key={button.label} attribute={button}></ButtonLink>;
            })}
          </div>
        )}
      </div>
    </section>
  );
}
