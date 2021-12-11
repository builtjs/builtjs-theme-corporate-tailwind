import { ButtonLink, Preheading } from "@/elements";

export default function Block4({ content }) {
  let { data } = content;
  return (
    <section id="block-4" className="template">
      <div className="mx-auto text-center max-w-screen-xl">
        <Preheading attribute={data.preheading}></Preheading>
        <h2 className="max-w-5xl mx-auto">{data.heading}</h2>
        <div className="mb-4 grid grid-cols-1 gap-x-6 md:grid-cols-2">
          <div>
            <p className="md:text-left">{data.blurb1}</p>
          </div>
          <div>
            <p className="md:text-left">{data.blurb2}</p>
          </div>
        </div>
        {data.buttonLinks &&
          data.buttonLinks.map((button) => {
            return <ButtonLink key={button.type} attribute={button}></ButtonLink>;
          })}
      </div>
    </section>
  );
}
