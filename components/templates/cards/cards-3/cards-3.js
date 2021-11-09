import { ButtonLink, Preheading } from "@/elements";

export default function Cards3({ content }) {
  let { data, collections } = content;
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
    <section id="cards-3" className="template">
      <div className="mx-auto max-w-screen-xl">
        <div className="grid grid-cols-1 gap-x-6 gap-y-16 lg:grid-cols-3">
          {items &&
            items.map((item, i) => (
              <div key={i} className="p-8 bg-gray-100 rounded-lg dark:bg-gray-700">
                <Preheading attribute={item.preheading}></Preheading>
                <h3 className="mb-4">{item.heading}</h3>
                <p className="mb-10">{item.blurb}</p>
                {item.buttonLinks &&
                  item.buttonLinks.map((button) => {
                    return <ButtonLink key={button.type} attribute={button}></ButtonLink>;
                  })}
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
