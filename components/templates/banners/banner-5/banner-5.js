import { ButtonLink } from "@/elements";

export default function Banner5({ content }) {
  let { attributes, variants } = content;
  const backgroundColor = variants && variants.backgroundColor ? `bg-${variants.backgroundColor}` : "";
  return (
    <section id="banner-5" className={`template ${backgroundColor}`}>
      <div className="mx-auto max-w-screen-lg">
        <div className="px-10 py-20 bg-gray-100 rounded-lg dark:bg-gray-700">
          <div className="items-center grid grid-cols-1 gap-x-6 md:grid-cols-4">
            <div className="col-span-3">
              <h2>{attributes.title}</h2>
              <p className="max-w-xl mb-12 text-lg md:mb-0">{attributes.blurb}</p>
            </div>
            <div className="md:text-right">
              {attributes.buttonLinks &&
                attributes.buttonLinks.map((button) => {
                  return <ButtonLink key={button.type} attributes={button}></ButtonLink>;
                })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
