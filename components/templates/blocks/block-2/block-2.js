import { ButtonLink, Preheading } from "@/elements";

export default function Block2({ content }) {
  let { attributes } = content;
  return (
    <section id="block-2" className="template">
      <div className="max-w-screen-xl mx-auto text-center">
        <Preheading attributes={attributes.preheading}></Preheading>
        <h2 className="max-w-5xl mx-auto">{attributes.title}</h2>
        <p className="max-w-3xl mx-auto">{attributes.blurb1}</p>
        <p className="max-w-3xl mx-auto mb-8">{attributes.blurb2}</p>
        {attributes.buttonLinks &&
          attributes.buttonLinks.map((button) => {
            return <ButtonLink key={button.type} attributes={button}></ButtonLink>;
          })}
      </div>
    </section>
  );
}
