import { ButtonLink, Preheading } from "@/elements";

export default function Block5({ content }) {
  let { data } = content;
  return (
    <section id="block-5" className="template">
      <div className="mx-auto max-w-screen-xl">
        <div className="grid grid-cols-1 gap-x-6 md:grid-cols-2">
          <div>
            <Preheading attribute={data.preheading}></Preheading>
            <h2>{data.heading}</h2>
          </div>
          <div>
            <p>{data.text1}</p>
            <p className="mb-8">{data.text2}</p>
            {data.buttonLinks &&
              data.buttonLinks.map((button) => {
                return <ButtonLink key={button.type} attribute={button}></ButtonLink>;
              })}
          </div>
        </div>
      </div>
    </section>
  );
}
