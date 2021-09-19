import Image from "next/image";
import getConfig from "next/config";
import { ButtonLink, Preheading } from "@/elements";

export default function List2({ content }) {
  let { attributes, collections } = content;
  const { publicRuntimeConfig } = getConfig();
  if (!collections) {
    throw new Error(`No collections attribute provided in sections.json for template`);
  }
  let collectionName = Object.keys(collections)[0];
  let collection = collections[collectionName];
  let items;
  if (collection) {
    items = collection.items;
  }
  return (
    <section id="list-2" className="template">
      <div className="max-w-screen-xl px-4 py-32 mx-auto">
        {attributes && attributes.heading && (
          <h1 className="max-w-4xl mx-auto mb-20 font-bold leading-none text-center text-gray-900 lg:mb-28 text-7xl">{attributes.heading}</h1>
        )}
        <div className="flex flex-col">
          {items &&
            items.map((item, i) => (
              <div key={i} className="flex flex-col mb-20 lg:items-center lg:flex-row">
                <div className="flex-1 lg:mr-8">
                  <div className="relative mb-8 lg:mb-0">
                    <Image
                      className="object-cover bg-gray-100 rounded-lg"
                      src={`${publicRuntimeConfig.API_URL || ""}${item.image.url}`}
                      width={item.image.width}
                      height={item.image.height}
                      layout="responsive"
                      alt=""
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <Preheading attribute={item.preheading}></Preheading>
                  <h2 className="mb-8 text-2xl font-bold leading-none text-gray-900 md:text-5xl">{item.heading}</h2>
                  <p className="mb-12">{item.blurb}</p>
                  {item.buttonLinks && (
                    <div className="flex flex-col items-center sm:flex-row">
                      {item.buttonLinks.map((button) => {
                        return <ButtonLink key={button.label} attribute={button}></ButtonLink>;
                      })}
                    </div>
                  )}
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
