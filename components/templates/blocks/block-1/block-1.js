import { ButtonLink, Preheading } from "@/elements";

export default function Block1({ content }) {
  let { data } = content;
  return (
    <section id="block-1" className="template">
      <div className="mx-auto max-w-screen-xl">
        <Preheading attribute={data.preheading}></Preheading>
        <h2 className="max-w-5xl">{data.heading}</h2>
        <p className="max-w-3xl">{data.blurb1}</p>
        <p className="max-w-3xl mb-8">{data.blurb2}</p>
        {data.buttonLinks &&
          data.buttonLinks.map((button) => {
            return <ButtonLink key={button.type} attribute={button}></ButtonLink>;
          })}
      </div>
    </section>
  );
}
