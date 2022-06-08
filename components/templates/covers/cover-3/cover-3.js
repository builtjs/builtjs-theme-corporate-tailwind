import Image from "next/image";
import getConfig from "next/config";
import { ButtonLink, Preheading } from "@/elements";

export default function Cover3({ content }) {
  let { attributes } = content;
  const { publicRuntimeConfig } = getConfig();

  return (
    <section id="cover-3" className="p-0 template">
      <div className="grid grid-cols-1 lg:items-center lg:min-h-screen lg:grid-cols-2">
        <div className="relative py-64 lg:h-full lg:order-last">
          <Image 
          className="rounded-none" 
          src={`${publicRuntimeConfig.BACKEND_URL || ""}${attributes?.image?.data.attributes.url}`} 
          priority="true"
          layout="fill" 
          objectFit="cover" 
          alt={attributes.title} />
        </div>
        <div>
          <div className="px-4 pt-10 pb-20 lg:px-8 lg:mx-auto lg:max-w-xl lg:py-40">
            <Preheading attributes={attributes.preheading}></Preheading>
            <h1>{attributes.title}</h1>
            <p className="mb-12 text-lg">{attributes.blurb}</p>
            {attributes.buttonLinks &&
              attributes.buttonLinks.map((button) => {
                return <ButtonLink key={button.type} attributes={button}></ButtonLink>;
              })}
          </div>
        </div>
      </div>
    </section>
  );
}
