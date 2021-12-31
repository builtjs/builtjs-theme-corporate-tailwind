import Image from "next/image";
import getConfig from "next/config";
import { ButtonLink, Preheading } from "@/elements";

export default function Cover4({ content }) {
  let { data } = content;
  const { publicRuntimeConfig } = getConfig();

  return (
    <section id="cover-4" className="p-0 template">
      <div className="lg:flex lg:items-center lg:min-h-screen">
        <div className="w-full max-w-screen-xl px-4 py-20 mx-auto ">
          <div className="pb-24 text-center">
            <Preheading data={data.preheading}></Preheading>
            <h1 className="max-w-5xl mx-auto">{data.heading}</h1>
            <p className="max-w-xl mx-auto mb-12 text-lg">{data.blurb}</p>
            {data.buttonLinks &&
              data.buttonLinks.map((button) => {
                return <ButtonLink key={button.type} data={button}></ButtonLink>;
              })}
          </div>
          <div className="relative">
            <Image
              src={`${publicRuntimeConfig.API_URL || ""}${data.image.url}`}
              width={data.image.width}
              height={data.image.height}
              layout="responsive"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
