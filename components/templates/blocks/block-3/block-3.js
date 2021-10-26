import { ButtonLink, Preheading } from "@/elements";

export default function Block3({ content }) {
  let { attributes } = content;
  return (
    <section id="block-3" className="template">
      <div className="mx-auto max-w-screen-xl">
        <Preheading attribute={attributes.preheading}></Preheading>
        <h2 className="max-w-5xl">{attributes.heading}</h2>
        <div className="mb-4 grid grid-cols-1 gap-x-6 md:grid-cols-2">
          <div>
            <p>{attributes.blurb}</p>
          </div>
          <div>
            <p>{attributes.blurb2}</p>
          </div>
        </div>
        {attributes.buttonLinks &&
          attributes.buttonLinks.map((button) => {
            return <ButtonLink key={button.type} attribute={button}></ButtonLink>;
          })}
      </div>
    </section>
  );
}
