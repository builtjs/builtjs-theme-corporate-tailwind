import { ButtonLink, Preheading } from "@/elements";

export default function Block4({ content }) {
  let { attributes } = content;
  return (
    <section id="block-4" className="template">
      <div className="mx-auto text-center max-w-screen-xl">
        <Preheading attributes={attributes.preheading}></Preheading>
        <h2 className="max-w-5xl mx-auto">{attributes.title}</h2>
        <div className="mb-4 grid grid-cols-1 gap-x-6 md:grid-cols-2">
          <div>
            <p className="md:text-left">{attributes.blurb1}</p>
          </div>
          <div>
            <p className="md:text-left">{attributes.blurb2}</p>
          </div>
        </div>
        {attributes.buttonLinks &&
          attributes.buttonLinks.map((button) => {
            return <ButtonLink key={button.type} attributes={button}></ButtonLink>;
          })}
      </div>
    </section>
  );
}
