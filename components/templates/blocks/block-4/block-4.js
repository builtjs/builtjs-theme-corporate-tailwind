import { ButtonLink, Preheading } from "@/elements";

export default function Block4({ content }) {
  let { attributes } = content;
  return (
    <section id="block-4" className="template">
      <div className="max-w-2xl px-4 py-20 mx-auto">
        <Preheading attribute={attributes.preheading}></Preheading>
        <h2 className="mb-12 font-bold leading-none text-gray-900 text-7xl lg:text-8xl">{attributes.heading}</h2>
        <div className="px-8 sm:px-16">
          <p className="mb-6">{attributes.blurb}</p>
          <p className="mb-16">{attributes.blurb2}</p>
          {attributes.buttonLinks && (
            <div className="flex flex-col items-center sm:flex-row">
              {attributes.buttonLinks.map((button) => {
                return <ButtonLink key={button.label} attribute={button}></ButtonLink>;
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
