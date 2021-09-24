import { ButtonLink, Preheading } from "@/elements";

export default function Block5({ content }) {
  let { attributes } = content;
  return (
    <section id="block-5" className="template">
      <div className="max-w-5xl px-4 py-20 mx-auto">
        <div className="flex justify-center">
          <Preheading attribute={attributes.preheading}></Preheading>
        </div>
        <h2 className="mb-8 font-bold leading-none text-center text-gray-900 text-7xl lg:text-8xl">{attributes.heading}</h2>
        <div className="max-w-3xl px-8 mx-auto text-center sm:px-16">
          <p className="mb-6 text-center">{attributes.blurb}</p>
          <p className="mb-16 text-center">{attributes.blurb2}</p>
          {attributes.buttonLinks && (
            <div className="flex flex-col items-center justify-center sm:flex-row">
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
