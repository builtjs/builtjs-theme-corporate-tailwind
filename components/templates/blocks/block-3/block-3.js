import { ButtonLink, Preheading } from "@/elements";

export default function Block3({ content }) {
  let { data } = content;
  return (
    <section id="block-3" className="template">
      <div className="mx-auto max-w-screen-xl">
        <Preheading data={data.preheading}></Preheading>
        <h2 className="max-w-5xl">{data.heading}</h2>
        <div className="mb-4 grid grid-cols-1 gap-x-6 md:grid-cols-2">
          <div>
            <p>{data.blurb1}</p>
          </div>
          <div>
            <p>{data.blurb2}</p>
          </div>
        </div>
        {data.buttonLinks &&
          data.buttonLinks.map((button) => {
            return <ButtonLink key={button.type} data={button}></ButtonLink>;
          })}
      </div>
    </section>
  );
}
