// import { format } from 'date-fns';
import Image from "next/image";
import getConfig from "next/config";
import Link from "next/link";
import { Tag } from "@/elements";

const getHTML = (content) => {
  return {
    __html: content,
  };
};

export default function Article1({ content }) {
  console.log("article content:", content);
  let { item } = { ...content };
  console.log("...item:", item);
  const { publicRuntimeConfig } = getConfig();

  return (
    <article id="article-1" className="template">
      {item && (
        <div className="max-w-screen-xl mx-auto">
          <header className="max-w-4xl mx-auto">
            <div className="flex items-center mb-4">
              <p className="mb-0 text-sm capitalize preheading">
                {/* TODO: Get article publish date */}
                {/* {format(new Date(item.createdAt), "dd LLLL yyyy")} */}
                01 January 2022
              </p>
              <span className="mx-3 text-gray-400">|</span>
              <Link href="/">
                <a className="no-underline hover:underline">
                  <p className="mb-0 text-sm">{item.category}</p>
                </a>
              </Link>
            </div>
            <h1 className="mb-10">{item.title}</h1>
            <div className="flex items-center">
              {/* TODO: Get author profile image */}
              <div className="relative w-12 h-12 mr-4">
                <Image
                  className="rounded-full"
                  src={`${publicRuntimeConfig.API_URL || ""}${item.author.profileImage.url}`}
                  width={item.author.profileImage.width}
                  height={item.author.profileImage.height}
                  layout="fill"
                  objectFit="cover"
                  alt=""
                />
              </div>
              <div>
                <p className="mb-0 font-bold text-black capitalize">{item.author.fullName}</p>
                <p className="mb-0 text-sm capitalize">{item.author.position || "Writer"}</p>
              </div>
            </div>
          </header>
          <div className="relative my-20">
            <Image
              src={`${publicRuntimeConfig.API_URL || ""}${item.image.url}`}
              width={item.image.width}
              height={item.image.height}
              layout="responsive"
              alt=""
            />
          </div>
          <div className="max-w-2xl mx-auto" dangerouslySetInnerHTML={getHTML(item.content)}></div>
          <div className="max-w-2xl mx-auto">
            {/* TODO: Implement Tag functionality */}
            {item.tags && (
              <div className="grid grid-flow-col gap-2 mb-4 auto-cols-max">
                {item.tags.map((tag) => {
                  return <Tag key={tag.tag} item={tag}></Tag>;
                })}
              </div>
            )}
          </div>
        </div>
      )}
    </article>
  );
}

// TODO: Remove unused code
// // import { format } from 'date-fns';
// import getConfig from 'next/config';
// import Link from "next/link";

// const getHTML = (content) => {
//   return {
//     __html: content,
//   };
// };
// export default function Article1({ content }) {
//   let { item } = content;
//   const { publicRuntimeConfig } = getConfig();
//   return (
//       <article id="article-1" className={`template px-4 pt-32 pb-24`}>
//         <div className="max-w-5xl mx-auto">
//         <header>
//           <div className="flex mb-4">
//             <span>
//               date goes here
//               {/* {format(new Date(item.createdAt), "d LLLL yyyy")} */}
//             </span>
//             <span className="mx-3">|</span>
//             <Link href="/">
//               <a className="text-secondary hover:underline hover:text-secondary-dark">
//                 {item.category}
//               </a>
//             </Link>
//           </div>
//           <h1 className="mb-10 text-6xl font-bold leading-none">
//             {item.title}
//           </h1>
//           <div className="flex items-center">
//             {/* <img
//               src={
//                 item.author.profileImageUrl ||
//                 "https://source.unsplash.com/pRkGQjzANXU/150x150"
//               }
//               className="w-12 h-12 mr-4 rounded-full"
//             /> */}
//             <div className="flex flex-col">
//               <p className="mb-0">{item.author.fullName}</p>
//               <p className="mb-0 text-sm">
//                 {item.author.position || "Writer"}
//               </p>
//             </div>
//           </div>
//         </header>
//         <img
//           className="my-16 bg-gray-100 rounded-lg shadow-2xl"
//           src={`${publicRuntimeConfig.API_URL || ''}${item.image.url}`}
//         />
//         <div
//           className="max-w-2xl mx-auto"
//           dangerouslySetInnerHTML={getHTML(item.content)}
//         ></div>
//         </div>
//       </article>
//   );
// }
