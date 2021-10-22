import { ButtonLink, Preheading } from "@/elements";

export default function Block2({ content }) {
  let { attributes } = content;
  return (
    <section id="block-2" className="template">
      <div className="mx-auto text-center max-w-screen-xl">
        <Preheading attribute={attributes.preheading}></Preheading>
        <h2 className="max-w-5xl mx-auto">{attributes.heading}</h2>
        <p className="max-w-3xl mx-auto">{attributes.blurb}</p>
        <p className="max-w-3xl mx-auto mb-8">{attributes.blurb2}</p>
        {attributes.buttonLinks &&
          attributes.buttonLinks.map((button) => {
            return <ButtonLink key={button.type} attribute={button}></ButtonLink>;
          })}
      </div>
    </section>
  );
}
