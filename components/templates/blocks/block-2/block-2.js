import { ButtonLink, Preheading } from "@/elements";

export default function Block2({ content }) {
  let { attributes } = content;
  return (
    <section id="block-2" className="template">
      <div className="flex flex-col max-w-screen-xl px-4 py-20 mx-auto md:flex-row">
        <div className="flex-1 md:px-4">
          <Preheading attribute={attributes.preheading}></Preheading>
          <h2 className="mb-12 text-5xl font-bold leading-none text-darkest lg:mb-16">{attributes.heading}</h2>
        </div>
        <div className="flex-1 md:px-4">
          <p className="mb-6 font-light leading-loose text-gray-700">{attributes.blurb}</p>
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
    </section>
  );
}
