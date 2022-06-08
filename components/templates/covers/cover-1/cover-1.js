import Image from "next/image";
import getConfig from "next/config";
import { ButtonLink, Preheading } from "@/elements";

export default function Cover1({ content }) {
  let { attributes } = content;
  const { publicRuntimeConfig } = getConfig();

  return (
    <section id="cover-1" className="p-0 template">
      <div className="mx-auto lg:flex lg:items-center lg:min-h-screen max-w-screen-2xl">
        <div className="items-center grid grid-cols-1 gap-x-28 lg:grid-cols-2">
          <div className="px-0 lg:pr-4 lg:order-last">
            <Image
              src={`${publicRuntimeConfig.BACKEND_URL || ""}${
                attributes?.image?.data.attributes.url
              }`}
              priority="true"
              width={attributes?.image?.data.attributes.width}
              height={attributes?.image?.data.attributes.height}
              layout="responsive"
              alt={attributes.title}
            />
          </div>
          <div className="px-4 pt-10 pb-20 lg:py-40">
            <Preheading attributes={attributes.preheading}></Preheading>
            <h1>{attributes.title}</h1>
            <p className="mb-12 text-lg">{attributes.blurb}</p>
            {attributes.buttonLinks &&
              attributes.buttonLinks.map((button) => {
                return (
                  <ButtonLink
                    key={button.type}
                    attributes={button}
                  ></ButtonLink>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
}
