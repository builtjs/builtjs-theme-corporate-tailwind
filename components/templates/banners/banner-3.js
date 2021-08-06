import { ButtonLink } from "./../../elements";

export default function Banner3({ content }) {
  let { attributes, variants } = content;
  const backgroundColor =
    variants && variants.backgroundColor
      ? `bg-${variants.backgroundColor}`
      : "";
  return (
    <section id="banner-3" className={`template ${backgroundColor}`}>
      <div className="max-w-6xl px-10 py-16 mx-auto">
        <div className="max-w-6xl mx-auto md:flex md:items-center md:justify-between md:flex-row">
          <p className="mb-6 mr-8 text-xl font-bold text-center md:text-left md:mb-0">
            {attributes.heading}
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
