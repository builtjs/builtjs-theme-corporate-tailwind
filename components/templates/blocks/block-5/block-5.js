import { ButtonLink, Preheading } from "@/elements";

export default function Block5({ content }) {
  let { attributes } = content;
  return (
    <section id="block-5" className="template">
      <div className="mx-auto max-w-screen-xl">
        <div className="grid grid-cols-1 gap-x-6 md:grid-cols-2">
          <div>
            <Preheading attributes={attributes.preheading}></Preheading>
            <h2>{attributes.heading}</h2>
          </div>
          <div>
            <p>{attributes.blurb1}</p>
            <p className="mb-8">{attributes.blurb2}</p>
            {attributes.buttonLinks &&
              attributes.buttonLinks.map((button) => {
                return <ButtonLink key={button.type} attributes={button}></ButtonLink>;
              })}
          </div>
        </div>
      </div>
    </section>
  );
}
