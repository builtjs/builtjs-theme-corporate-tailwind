import { ButtonLink } from "./../../elements";

export default function Banner1({ content }) {
  let { attributes, variants } = content;
  const backgroundColor =
    variants && variants.backgroundColor
      ? `bg-${variants.backgroundColor}`
      : "";
  return (
    <section id="banner-1" className={`template ${backgroundColor}`}>
      <div className="max-w-5xl px-4 mx-auto">
        <div className="px-10 py-20">
          <div className="max-w-2xl mx-auto text-center">
            <p className="preheading-secondary">
              {attributes.preheading.text}
            </p>
            <h1 className="mb-12 text-4xl font-bold leading-snug">
              {attributes.heading}
            </h1>
            {attributes.blurb && (
              <p className="max-w-2xl mx-auto mb-12 font-light leading-loose">
                {attributes.blurb}
              </p>
            )}
            <div className="flex justify-center">
              {attributes.buttonLinks &&
                attributes.buttonLinks.map((button) => (
                  <ButtonLink
                    key={button.label}
                    attribute={button}
                  ></ButtonLink>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
