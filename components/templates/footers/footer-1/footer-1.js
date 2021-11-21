import { SocialLink } from "@/elements";

export default function Footer1({ content, app }) {
  let { collections } = { ...content };
  let primaryMenuItems = [];
  if (collections && collections["primary-menu-items"]) {
    primaryMenuItems = collections["primary-menu-items"].items;
  }
  let socialLinks = [];
  if (collections && collections["social-links"]) {
    socialLinks = collections["social-links"].items;
  }

  return (
    <footer id="footer-1" className="template">
      <div className="px-4 pt-10 pb-4 border-t border-gray-200 dark:border-gray-700">
        <ul className="flex flex-wrap items-center justify-center mb-12">
          {primaryMenuItems.map(({ label, url }, i) => (
            <li key={i}>
              <a
                href={url}
                className="flex px-3 py-2 text-gray-600 transition duration-200 ease-in-out dark:hover:text-white dark:text-gray-300 hover:text-gray-900"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="items-center justify-center mb-12 grid grid-flow-col auto-cols-max gap-x-6">
          {socialLinks.map((socialLink, i) => {
            return <SocialLink key={i} attribute={socialLink}></SocialLink>;
          })}
        </div>

        <div className="text-center">
          <a className="text-sm text-black dark:text-white hover:underline" href="https://builtjs.com" target="_blank" rel="noreferrer noopener">
            Built with Built.JS
          </a>
        </div>
      </div>
    </footer>
  );
}

// TODO: Remove unused code
// import Link from "next/link";

// import { SocialLink } from "../../elements";

// export default function Footer1({ content, app }) {
//   let { collections } = content;
//   if (!collections) {
//     throw new Error(
//       `No collections attribute provided in sections.json for template`
//     );
//   }
//   let primaryMenuItems = [];
//   if (collections["primary-menu-items"]) {
//     primaryMenuItems = collections["primary-menu-items"].items;
//   }
//   let socialLinks = [];
//   if (collections["social-links"]) {
//     socialLinks = collections["social-links"].items;
//   }
//   return (
//     <footer id="footer-1" className="px-5 pt-12 pb-8 template bg-darkest">
//       <ul className="flex flex-wrap items-center justify-center mb-10">
//         {primaryMenuItems.map(({ label, url }, i) => (
//           <li key={i}>
//             <a
//               href={url}
//               className="flex px-3 py-2 text-gray-400 transition duration-200 ease-in-out dark:text-lightest hover:text-lightest"
//             >
//               {label}
//             </a>
//           </li>
//         ))}
//       </ul>

//       <div className="flex justify-center mb-12">
//         {socialLinks.map((socialLink, i) => (
//           <SocialLink key={i} attribute={socialLink}></SocialLink>
//         ))}
//       </div>

//       <div className="flex justify-center">
//         <p className="text-xs tracking-wide text-center text-lightest">
//           {/* © 2020 {app.displayName} | &nbsp; */}
//           <Link
//             href="https://builtjs.com"
//             target="_blank"
//             rel="noreferrer noopener"
//           >
//             <a className="hover:underline">Built with Built.JS</a>
//           </Link>
//         </p>
//       </div>
//     </footer>
//   );
// }
