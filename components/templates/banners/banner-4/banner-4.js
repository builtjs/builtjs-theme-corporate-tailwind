import { ButtonLink } from "@/elements";

export default function Banner4({ content }) {
  let { data, variants } = content;
  const backgroundColor = variants && variants.backgroundColor ? `bg-${variants.backgroundColor}` : "";
  return (
    <section id="banner-4" className={`template ${backgroundColor}`}>
      <div className="mx-auto max-w-screen-lg">
        <div className="px-4 py-20 text-center bg-gray-100 rounded-lg dark:bg-gray-700">
          <h2>{data.heading}</h2>
          <p className="max-w-xl mx-auto mb-12 text-lg">{data.blurb}</p>
          {data.buttonLinks &&
            data.buttonLinks.map((button) => {
              return <ButtonLink key={button.type} attribute={button}></ButtonLink>;
            })}
        </div>
      </div>
    </section>
  );
}
