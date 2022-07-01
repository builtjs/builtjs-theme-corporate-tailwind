import React from "react";
import Image from "next/image";
import getConfig from "next/config";
import { ButtonLink, Preheading } from "@/elements";

export default function Cover5({ content }) {
  let { attributes } = content;
  const { publicRuntimeConfig } = getConfig();

  return (
    <section id="cover-5" className="p-0 template">
      <div className="relative flex items-center min-h-screen">
        <div className="absolute top-0 left-0 w-full h-full">
          <Image 
          className="rounded-none" 
          src={`${publicRuntimeConfig.BACKEND_URL || ""}${attributes?.image?.data.attributes.url}`} 
          priority="true"
          layout="fill" 
          objectFit="cover" 
          alt={attributes.title} />
        </div>

        <div className="relative z-10 px-4 py-20 mx-auto text-center lg:py-40">
          <Preheading attributes={attributes.preheading}></Preheading>
          <h1 className="max-w-5xl mx-auto">{attributes.title}</h1>
          <p className="max-w-xl mx-auto mb-12 text-lg text-whit dark:text-white">{attributes.blurb}</p>
          {attributes.buttonLinks &&
            attributes.buttonLinks.map((button) => {
              return <ButtonLink key={button.type} attributes={button}></ButtonLink>;
            })}
        </div>
      </div>
    </section>
  );
}
