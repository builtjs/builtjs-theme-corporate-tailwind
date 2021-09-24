import { ButtonLink } from "@/elements";

export default function Banner1({ content }) {
  let { attributes, variants } = content;
  const backgroundColor = variants && variants.backgroundColor ? `bg-${variants.backgroundColor}` : "";
  return (
    <section id="banner-1" className={`template ${backgroundColor}`}>
      <div className="max-w-5xl py-32 mx-auto">
        <div className="px-10 py-20 mx-4 text-center bg-gray-100 rounded-lg dark:bg-gray-700">
          <h2 className="mb-6 text-5xl font-bold leading-snug">{attributes.heading}</h2>
          <p className="max-w-2xl mx-auto mb-12 font-light leading-loose">{attributes.blurb}</p>
          <div className="flex justify-center">
            {attributes.buttonLinks && attributes.buttonLinks.map((button) => <ButtonLink key={button.label} attribute={button}></ButtonLink>)}
          </div>
        </div>
      </div>
    </section>
  );
}
