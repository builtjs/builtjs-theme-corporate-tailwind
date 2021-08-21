import { ButtonLink } from "@/elements";

export default function Block2({ content }) {
  let { attributes } = content;
  return (
    <section id="block-2" className="template">
      <div className="max-w-screen-xl px-4 py-20 mx-auto flex flex-col md:flex-row">
        <div className="flex-1 md:px-4">
          {attributes.preheading && (
            <p className="preheading-secondary">{attributes.preheading.text}</p>
          )}
          <h1 className="mb-12 text-5xl font-bold leading-none text-darkest lg:mb-16">
            {attributes.heading}
          </h1>
        </div>
        <div className="flex-1 md:px-4">
          <p>{attributes.text1}</p>
          <p className="mb-12">{attributes.text2}</p>
          {attributes.buttonLinks && (
            <div className="flex flex-col items-center sm:flex-row">
              {attributes.buttonLinks.map((button) => {
                return (
                  <ButtonLink
                    key={button.label}
                    attribute={button}
                  ></ButtonLink>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
