import { ButtonLink, Preheading } from "@/elements";

export default function Cards2({ content }) {
  let { collections } = content;
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
    <section id="cards-2" className="template">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 gap-x-6 gap-y-16 lg:grid-cols-3">
          {items &&
            items.map((item, i) => (
              <div key={i} className="p-8 text-center border border-gray-200 rounded-lg dark:border-gray-700">
                <Preheading attributes={item.attributes.preheading}></Preheading>
                <h3 className="mb-4">{item.attributes.heading}</h3>
                <p className="mb-10">{item.attributes.blurb}</p>
                {item.attributes.buttonLinks &&
                  item.attributes.buttonLinks.map((button) => {
                    return <ButtonLink key={button.type} attributes={button}></ButtonLink>;
                  })}
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
