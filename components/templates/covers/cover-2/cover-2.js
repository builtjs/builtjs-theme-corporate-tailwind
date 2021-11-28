import Image from "next/image";
import getConfig from "next/config";
import { ButtonLink, Preheading } from "@/elements";

export default function Cover2({ content }) {
  let { data } = content;
  const { publicRuntimeConfig } = getConfig();

  return (
    <section id="cover-2" className="p-0 template">
      <div className="mx-auto lg:flex lg:items-center lg:min-h-screen max-w-screen-2xl">
        <div className="items-center grid grid-cols-1 gap-x-28 lg:grid-cols-2">
          <div className="p-4 lg:order-last">
            <Image
              className="rounded-full"
              src={`${publicRuntimeConfig.API_URL || ""}${data.image.url}`}
              width={data.image.width}
              height={data.image.height}
              layout="responsive"
              objectFit="cover"
              alt=""
            />
          </div>
          <div className="px-4 pt-10 pb-20 lg:py-40">
            <Preheading attribute={data.preheading}></Preheading>
            <h1>{data.heading}</h1>
            <p className="mb-12 text-lg">{data.blurb}</p>
            {data.buttonLinks &&
              data.buttonLinks.map((button) => {
                return <ButtonLink key={button.type} attribute={button}></ButtonLink>;
              })}
          </div>
        </div>
      </div>

      {/* <div className="flex items-center min-h-screen mx-auto max-w-screen-2xl">
        <div className="items-center grid grid-cols-1 gap-x-28 gap-y-12 lg:grid-cols-2">
          <div className="relative w-full lg:order-last">
            <Image
              className="rounded-full"
              src={`${publicRuntimeConfig.API_URL || ""}${data.image.url}`}
              width={data.image.width}
              height={data.image.height}
              layout="responsive"
              objectFit="cover"
              alt=""
            />
          </div>
          <div>
            <Preheading attribute={data.preheading}></Preheading>
            <h1>{data.heading}</h1>
            <p className="mb-12 text-lg">{data.blurb}</p>
            {data.buttonLinks &&
              data.buttonLinks.map((button) => {
                return <ButtonLink key={button.type} attribute={button}></ButtonLink>;
              })}
          </div>
        </div>
      </div> */}
    </section>
  );
}
