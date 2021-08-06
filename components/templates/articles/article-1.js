// import { format } from 'date-fns';
import getConfig from 'next/config';
import Link from "next/link";

const getHTML = (content) => {
  return {
    __html: content,
  };
};
export default function Article1({ content }) {
  console.log('article content:', content)
  let { item } = {...content};
  console.log('...item:', item)
  const { publicRuntimeConfig } = getConfig();
  return (
      <article id="article-1" className={`template px-4 pt-32 pb-24`}>
        {item && <div className="max-w-5xl mx-auto">
        <header>
          <div className="flex mb-4">
            <span>
              date goes here
              {/* {format(new Date(item.createdAt), "d LLLL yyyy")} */}
            </span>
            <span className="mx-3">|</span>
            <Link href="/">
              <a className="text-secondary hover:underline hover:text-secondary-dark">
                {item.category}
              </a>
            </Link>
          </div>
          <h1 className="text-6xl mb-10 font-bold leading-none">
            {item.title}
          </h1>
          <div className="flex items-center">
            {/* <img
              src={
                item.author.profileImageUrl ||
                "https://source.unsplash.com/pRkGQjzANXU/150x150"
              }
              className="w-12 h-12 mr-4 rounded-full"
            /> */}
            <div className="flex flex-col">
              <p className="mb-0">{item.author.fullName}</p>
              <p className="mb-0 text-sm">
                {item.author.position || "Writer"}
              </p>
            </div>
          </div>
        </header>
        <img
          className="my-16 bg-gray-100 rounded-lg shadow-2xl"
          src={`${publicRuntimeConfig.API_URL || ''}${item.image.url}`}
        />
        <div
          className="max-w-2xl mx-auto"
          dangerouslySetInnerHTML={getHTML(item.content)}
        ></div>
        </div>}
      </article>
  );
}


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
//           <h1 className="text-6xl mb-10 font-bold leading-none">
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
