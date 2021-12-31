import { ButtonLink, Preheading } from "@/elements";

export default function Block2({ content }) {
  let { data } = content;
  return (
    <section id="block-2" className="template">
      <div className="mx-auto text-center max-w-screen-xl">
        <Preheading data={data.preheading}></Preheading>
        <h2 className="max-w-5xl mx-auto">{data.heading}</h2>
        <p className="max-w-3xl mx-auto">{data.blurb}</p>
        {data.buttonLinks &&
          data.buttonLinks.map((button) => {
            return <ButtonLink key={button.type} data={button}></ButtonLink>;
          })}
      </div>
    </section>
  );
}
