import Image from "next/image";
import Link from "next/link";
import getConfig from "next/config";

// TODO: Exclude current blog from related list
export default function Cards4({ content }) {
  let { collections } = { ...content };
  let attributes = null;
  const { publicRuntimeConfig } = getConfig();
  const DEFAULT_COLS = 3;
  const cols = (attributes && attributes.columns) || DEFAULT_COLS;
  if (!collections) {
    throw new Error("No template collections");
  }
  let collectionName = Object.keys(collections)[0];
  let collection = collections[collectionName];
  let items;
  let limit;
  if (collection) {
    items = collection.items;
    limit = collection.limit || items.length;
  }

  return (
    <section id="cards-5" className="template">
      <div className="max-w-screen-xl mx-auto">
        <div className={`grid grid-cols-1 gap-x-6 gap-y-16 lg:grid-cols-${cols}`}>
          {items &&
            items.slice(0, limit).map((item, i) => (
              <div key={i}>
                <Link href={`/${collectionName}/${item.slug}`}>
                  <a>
                    <div className="relative w-full h-56 mb-6 transition-opacity hover:opacity-80">
                      <Image
                        src={`${publicRuntimeConfig.API_URL || ""}${item.image.url}`}
                        width={item.image.width}
                        height={item.image.height}
                        layout="fill"
                        objectFit="cover"
                        alt=""
                      />
                    </div>
                  </a>
                </Link>
                <Link href={`/${collectionName}/${item.slug}`}>
                  <a className="no-underline">
                    <h3 className="mb-4 hover:text-gray-700 dark:hover:text-gray-200">{item.title}</h3>
                  </a>
                </Link>
                <p>{item.excerpt}</p>
                <Link href={`/${collectionName}/${item.slug}`}>
                  <a>Read Article</a>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

// TODO: Remove unused code
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
