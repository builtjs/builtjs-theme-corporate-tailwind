import { ButtonLink } from "@/elements";

export default function Banner2({ content }) {
  let { attributes, variants } = content;
  const backgroundColor = variants && variants.backgroundColor ? `bg-${variants.backgroundColor}` : "";
  return (
    <section id="banner-2" className={`template p-0 ${backgroundColor}`}>
      <div className="px-4 py-20 bg-gray-100 dark:bg-gray-700">
        <div className="mx-auto max-w-screen-lg">
          <h2>{attributes.title}</h2>
          <p className="max-w-xl mb-12 text-lg">{attributes.blurb}</p>
          {attributes.buttonLinks &&
            attributes.buttonLinks.map((button) => {
              return <ButtonLink key={button.type} attributes={button}></ButtonLink>;
            })}
        </div>
      </div>
    </section>
  );
}
