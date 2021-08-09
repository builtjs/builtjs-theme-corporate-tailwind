import { ButtonLink } from "../../../elements";

export default function Banner2({ content }) {
  let { attributes, variants } = content;
  const backgroundColor =
    variants && variants.backgroundColor
      ? `bg-${variants.backgroundColor}`
      : "";
  return (
    <section id="banner-2" className={`template ${backgroundColor}`}>
      <div className="relative px-10 py-24">
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <h1 className="mb-8 text-5xl font-bold leading-snug text-lightest">
            {attributes.heading}
          </h1>
          <p className="max-w-2xl mx-auto mb-12 font-light leading-loose text-gray-300">
            {attributes.blurb}
          </p>
          <div className="flex justify-center">
            {attributes.buttonLinks &&
              attributes.buttonLinks.map((button) => (
                <ButtonLink key={button.label} attribute={button}></ButtonLink>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
