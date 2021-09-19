import { ButtonLink } from "@/elements";

export default function Banner2({ content }) {
  let { attributes, variants } = content;
  const backgroundColor = variants && variants.backgroundColor ? `bg-${variants.backgroundColor}` : "";
  return (
    <section id="banner-2" className={`template ${backgroundColor}`}>
      <div className="max-w-5xl py-32 mx-auto">
        <div className="px-10 py-20 mx-4 bg-gray-100 rounded-lg dark:bg-gray-700">
          <h2 className="mb-4 text-5xl font-bold leading-snug">{attributes.heading}</h2>
          <p className="max-w-2xl mb-12 font-light leading-loose">{attributes.blurb}</p>
          <div className="flex">
            {attributes.buttonLinks && attributes.buttonLinks.map((button) => <ButtonLink key={button.label} attribute={button}></ButtonLink>)}
          </div>
        </div>
      </div>
    </section>
  );
}
