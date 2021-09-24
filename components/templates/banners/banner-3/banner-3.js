import { ButtonLink } from "@/elements";

export default function Banner3({ content }) {
  let { attributes, variants } = content;
  const backgroundColor = variants && variants.backgroundColor ? `bg-${variants.backgroundColor}` : "";
  return (
    <section id="banner-3" className={`template ${backgroundColor}`}>
      <div className="max-w-5xl py-32 mx-auto">
        <div className="px-10 py-20 mx-4 bg-gray-100 rounded-lg dark:bg-gray-700">
          <div className="md:flex md:items-center md:justify-between md:flex-row">
            <div className="max-w-4xl md:mr-12">
              <h2 className="mb-6 text-5xl font-bold leading-snug">{attributes.heading}</h2>
              <p className="max-w-3xl mb-12 font-light leading-loose md:mb-0">{attributes.blurb}</p>
            </div>
            {attributes.buttonLinks && attributes.buttonLinks.map((button) => <ButtonLink key={button.label} attribute={button}></ButtonLink>)}
          </div>
        </div>
      </div>
    </section>
  );
}
