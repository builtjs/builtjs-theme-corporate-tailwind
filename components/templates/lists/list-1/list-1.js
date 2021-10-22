import Image from "next/image";
import getConfig from "next/config";
import { ButtonLink, Preheading } from "@/elements";

export default function List1({ content }) {
  let { collections } = content;
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
    <section id="list-1" className="template">
      <div className="mx-auto max-w-screen-xl">
        <div className="grid grid-cols-1 gap-y-24">
          {items &&
            items.map((item, i) => (
              <div key={i} className="items-center grid grid-cols-1 gap-10 lg:grid-cols-2">
                <div className={`${i % 2 === 0 ? "" : "lg:order-last"}`}>
                  <div className="relative">
                    <Image
                      src={`${publicRuntimeConfig.API_URL || ""}${item.image.url}`}
                      width={item.image.width}
                      height={item.image.height}
                      layout="responsive"
                      alt=""
                    />
                  </div>
                </div>

                <div>
                  <Preheading attribute={item.preheading}></Preheading>
                  <h2>{item.heading}</h2>
                  <p className="mb-12">{item.blurb}</p>
                  {item.buttonLinks &&
                    item.buttonLinks.map((button) => {
                      return <ButtonLink key={button.type} attribute={button}></ButtonLink>;
                    })}
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
