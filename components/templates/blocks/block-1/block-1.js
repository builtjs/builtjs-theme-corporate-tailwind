import Image from "next/image";
import { ButtonLink, Preheading } from "@/elements";
import getConfig from "next/config";

export default function Block1({ content }) {
  let { attributes } = content;
  const { publicRuntimeConfig } = getConfig();
  return (
    <section id="block-1" className="template">
      <div className="max-w-screen-xl px-4 py-24 mx-auto overflow-hidden lg:px-0 lg:py-32">
        <Preheading attribute={attributes.preheading}></Preheading>
        <h2 className="mb-12 text-4xl font-bold leading-none text-gray-900 md:text-5xl">{attributes.heading}</h2>
        <div className="flex flex-col mb-8 md:flex-row">
          <div className="flex-1 mb-6 md:px-4 md:mb-0">
            <p>{attributes.blurb}</p>
          </div>
          <div className="flex-1 md:px-4">
            <p>{attributes.blurb2}</p>
          </div>
        </div>
        {attributes.buttonLinks && (
          <div className="flex flex-col items-center sm:flex-row">
            {attributes.buttonLinks.map((button) => {
              return <ButtonLink key={button.label} attribute={button}></ButtonLink>;
            })}
          </div>
        )}
      </div>
    </section>
  );
}
