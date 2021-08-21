import { ButtonLink } from "@/elements";

export default function Block4({ content }) {
  let { attributes } = content;
  return (
    <section id="block-4" className="template">
      <div className="max-w-2xl px-4 py-20 mx-auto">
        <h1 className="mb-8 font-bold leading-none text-gray-900 text-7xl lg:text-8xl">
          {attributes.heading}
        </h1>
        <div className="px-8 sm:px-16">
          <p className="mb-16">{attributes.text1}</p>
          {attributes.buttonLinks &&
            attributes.buttonLinks.map((button) => {
              return (
                <ButtonLink key={button.label} attribute={button}></ButtonLink>
              );
            })}
        </div>
      </div>
    </section>
  );
}
