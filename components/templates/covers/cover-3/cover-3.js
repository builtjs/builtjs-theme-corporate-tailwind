import getConfig from "next/config";
import { ButtonLink, Preheading } from "@/elements";
import Image from "next/image";

export default function Cover3({ content }) {
  let { attributes } = content;
  const { publicRuntimeConfig } = getConfig();
  return (
    <article id="cover-3" className="min-h-screen px-4 py-20 template lg:py-32">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center">
          <Preheading attribute={attributes.preheading}></Preheading>
        </div>
        <h1 className="mb-8 text-6xl font-bold leading-none text-gray-900 lg:text-8xl">{attributes.heading}</h1>
        <p className="max-w-xl mx-auto mb-16 text-lg font-light leading-8 text-gray-700">{attributes.blurb}</p>
        <div className="flex justify-center mb-16">
          {attributes.buttonLinks && (
            <div className="flex flex-col items-center sm:flex-row">
              {attributes.buttonLinks.map((button) => {
                return <ButtonLink key={button.label} attribute={button}></ButtonLink>;
              })}
            </div>
          )}
        </div>
      </div>
      <div className="relative mx-auto text-center max-w-7xl">
        <Image
          className="bg-gray-100 rounded-lg"
          src={`${publicRuntimeConfig.API_URL || ""}${attributes.image.url}`}
          width={attributes.image.width}
          height={attributes.image.height}
          layout="responsive"
          alt=""
        />
      </div>
    </article>
  );
}
