import React from "react";
import Image from "next/image";
import getConfig from "next/config";
import { ButtonLink, Preheading } from "@/elements";

export default function Cover4({ content }) {
  let { attributes } = content;
  const { publicRuntimeConfig } = getConfig();
  return (
    <section id="cover-4" className="min-h-screen template">
      <div className="px-4 py-16 lg:py-24">
        <div className="flex flex-col items-center lg:flex-row">
          <div className="relative flex-1 w-full mb-12 lg:order-1 lg:mb-0 md:w-3/4 md:mx-auto lg:w-full">
            <Image
              className="object-cover bg-gray-200 rounded-full"
              src={`${publicRuntimeConfig.API_URL || ""}${attributes.image.url}`}
              width={attributes.image.width}
              height={attributes.image.height}
              layout="responsive"
              alt=""
            />
          </div>
          <div className="flex-1 mb-10 lg:pr-10 xl:px-20 md:w-3/4 md:mx-auto lg:w-full">
            <Preheading attribute={attributes.preheading}></Preheading>
            <h1>{attributes.heading}</h1>
            <p className="mb-10 text-lg xl:pr-20 lg:mb-16">{attributes.blurb}</p>
            {attributes.buttonLinks && (
              <div className="flex flex-col items-center sm:flex-row">
                {attributes.buttonLinks.map((button) => {
                  return <ButtonLink key={button.label} attribute={button}></ButtonLink>;
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
