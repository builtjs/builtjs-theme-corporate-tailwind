import Image from "next/image";
import Link from "next/link";
import getConfig from "next/config";

export default function Cards4({ content }) {
  let { collections } = { ...content };
  let attributes = null;
  const { publicRuntimeConfig } = getConfig();
  const DEFAULT_COLS = 2;
  const cols = (attributes && attributes.columns) || DEFAULT_COLS;
  let items;
  let limit;
  if (collections) {
    const collectionName = Object.keys(collections)[0];
    let collection = collections[collectionName];
    if (collection) {
      items = collection.items;
      limit = collection.limit || items.length;
    }
  }

  return (
    <section id="cards-4" className="template">
      {attributes && (
        <div className="max-w-screen-xl px-4 py-16 mx-auto md:py-24 xl:py-32">
          {attributes && attributes.heading && (
            <h1 className="max-w-2xl mx-auto mb-12 text-4xl font-bold leading-none text-center text-gray-900 lg:mb-28">{attributes.heading}</h1>
          )}
          <div className={`grid md:grid-cols-${cols} gap-6`}>
            {items &&
              items.slice(0, limit).map((item, i) => (
                <div key={i}>
                  <div className="relative mb-8 h-96">
                    <Image
                      className="object-cover bg-gray-100 rounded-lg"
                      src={`${publicRuntimeConfig.API_URL || ""}${item.image.url}`}
                      alt=""
                      layout="fill"
                      width={650}
                      height={400}
                    />
                  </div>
                  <h2 className="mx-6 mb-4 text-2xl font-bold leading-none text-gray-900">{item.title}</h2>
                  <p className="mx-6 mb-1">{item.excerpt}</p>
                  <Link href="/">
                    <a className="mx-6 mt-auto mb-6 text-secondary hover:text-secondary-dark">Learn More</a>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      )}
    </section>
  );
}

// import Link from "next/link";
// import getConfig from 'next/config';

// export default function Cards4({ content }) {
//   let { attributes, collections } = content;
//   console.log({attributes});
//   const { publicRuntimeConfig } = getConfig();
//   const DEFAULT_COLS = 2;
//   const cols = attributes && attributes.columns || DEFAULT_COLS;
//   if (!collections) {
//     throw new Error(
//       `No collections attribute provided in sections.json for template`
//     );
//   }
//   const collectionName = Object.keys(collections)[0];
//   let collection = collections[collectionName];
//   let items;
//   if (collection) {
//     items = collection.items;
//   }
//   const limit = collection.limit || items.length;
//   return (
//     <section id="cards-4" className="template">
//       <div className="max-w-screen-xl px-4 py-16 mx-auto md:py-24 xl:py-32">
//       {attributes && attributes.heading && (
//           <h1 className="max-w-2xl mx-auto mb-12 text-4xl font-bold leading-none text-center text-gray-900 lg:mb-28">
//             {attributes.heading}
//           </h1>
//         )}
//         <div className={`grid md:grid-cols-${cols} gap-6`}>
//         {items &&
//             items.slice(0, limit).map((item, i) => (
//           <div key={i}>
//             <img
//               className="w-full mb-6 bg-gray-200"
//               src={`${publicRuntimeConfig.API_URL || ''}${item.image.url}`}
//             />
//             <h2 className="mx-6 mb-4 text-2xl font-bold leading-none text-gray-900">
//               {item.title}
//             </h2>
//             <p className="mx-6 mb-1">
//               {item.excerpt}
//             </p>
//             <Link href="/">
//               <a className="mx-6 mt-auto mb-6 text-secondary hover:text-secondary-dark">
//                 Learn More
//               </a>
//             </Link>
//           </div>
//             ))}
//         </div>
//       </div>
//     </section>
//   );
// }
