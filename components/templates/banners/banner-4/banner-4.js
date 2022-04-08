import { ButtonLink } from "@/elements";

export default function Banner4({ content }) {
  let { attributes, variants } = content;
  const backgroundColor = variants && variants.backgroundColor ? `bg-${variants.backgroundColor}` : "";
  return (
    <section id="banner-4" className={`template ${backgroundColor}`}>
      <div className="mx-auto max-w-screen-lg">
        <div className="px-4 py-20 text-center bg-gray-100 rounded-lg dark:bg-gray-700">
          <h2>{attributes.title}</h2>
          <p className="max-w-xl mx-auto mb-12 text-lg">{attributes.blurb}</p>
          {attributes.buttonLinks &&
            attributes.buttonLinks.map((button) => {
              return <ButtonLink key={button.type} attributes={button}></ButtonLink>;
            })}
        </div>
      </div>
    </section>
  );
}
