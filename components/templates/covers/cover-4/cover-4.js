import Image from "next/image";
import getConfig from "next/config";
import { ButtonLink, Preheading } from "@/elements";

export default function Cover4({ content }) {
  let { attributes } = content;
  const { publicRuntimeConfig } = getConfig();

  return (
    <section id="cover-4" className="p-0 template">
      <div className="lg:flex lg:items-center lg:min-h-screen">
        <div className="w-full max-w-screen-xl px-4 py-20 mx-auto ">
          <div className="pb-24 text-center">
            <Preheading attribute={attributes.preheading}></Preheading>
            <h1 className="max-w-5xl mx-auto">{attributes.heading}</h1>
            <p className="max-w-xl mx-auto mb-12 text-lg">{attributes.blurb}</p>
            {attributes.buttonLinks &&
              attributes.buttonLinks.map((button) => {
                return <ButtonLink key={button.type} attribute={button}></ButtonLink>;
              })}
          </div>
          <div className="relative">
            <Image
              src={`${publicRuntimeConfig.API_URL || ""}${attributes.image.url}`}
              width={attributes.image.width}
              height={attributes.image.height}
              layout="responsive"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
