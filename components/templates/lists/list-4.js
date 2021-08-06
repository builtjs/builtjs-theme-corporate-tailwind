import Link from "next/link";
import Image from 'next/image';
import getConfig from 'next/config';
// import { format } from "date-fns";

export default function List4({ content, router }) {
  const { collections } = content;
  const { publicRuntimeConfig } = getConfig();
  if (!collections) {
    throw new Error("No template collections");
  }
  let collectionName = Object.keys(collections)[0];
  let collection = collections[collectionName];
  let items;
  if (collection) {
    items = collection.items;
  }
  let tag = router && router.query ? router.query.tag : null;
  return (
    <section id="list-4" className="template">
      <div className="container mx-auto mb-20">
      {items && items.map((item) => {
        return (
          <div className="flex items-center m-2 p-2" key={item.slug}>
            <div className="mr-6">
              <Link
                className="w-24"
                href={`/${collectionName}/${item.slug}`}
              >
                <a>
                <Image src={`${publicRuntimeConfig.API_URL || ''}${item.image.url}`} width="354" height="272"/>
                </a>
              </Link>
            </div>

            <div>
              <Link href={`/${collectionName}/${item.slug}`}>
                <a>
                  <h2 className="text-2xl hover:underline mb-0">
                    {item.title}
                  </h2>
                </a>
              </Link>
              <p className="text-gray-600 mb-1 text-sm">
                date goes here
                {/* {format(new Date(item.createdAt), "d LLLL yyyy")} */}
              </p>
              {item.tags &&
                item.tags.map((tag) => {
                  return (
                    <Link href={`/${collectionName}-archive?tag=${tag}`}>
                      <a className="bg-secondary-light inline-flex items-center justify-center px-2 py-1 mr-2 mb-4 text-xs font-bold leading-none text-lightest rounded-full">
                        {tag}
                      </a>
                    </Link>
                  );
                })}
              <p className="text-lg">{item.excerpt}</p>
            </div>
          </div>
        );
      })}
      </div>
      
      {!items.length && (
        <div>
          <p>No posts</p>
        </div>
      )}
    </section>
  );
}
