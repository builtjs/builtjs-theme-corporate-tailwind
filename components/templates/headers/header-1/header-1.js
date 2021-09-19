import React from "react";
import Image from "next/image";
import Link from "next/link";
import getConfig from "next/config";
import { useRouter } from "next/router";
import { ButtonLink } from "@/elements";

export default function Header1({ content }) {
  let { attributes, collections, global } = { ...content };
  const { publicRuntimeConfig } = getConfig();
  const collectionNames = {
    PRIMARY_MENU_ITEM: "primary-menu-items",
  };
  let menuItems;
  if (collections && collections[collectionNames.PRIMARY_MENU_ITEM]) {
    menuItems = collections[collectionNames.PRIMARY_MENU_ITEM].items;
  }
  const router = useRouter();
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <header id="header-1" className="template">
      <section className="bg-white shadow-sm">
        <nav className="flex flex-wrap items-center justify-between p-4 shadow-lg md:shadow-none">
          <div className="flex items-center cursor-pointer xl:mr-12">
            <Link href="/">
              <a>
<<<<<<< HEAD
                <div className="relative">
                  <Image
                    src={`${publicRuntimeConfig.API_URL || ""}${global?.logo?.url}`}
                    width={global?.logo?.width}
                    height={global?.logo?.height}
                    alt="Logo"
                  />
                </div>
=======
                <img
                  className="mr-3"
                  src={global?.logo?.url}
                  width={global?.logo?.width}
                  height={global?.logo?.height}
                  alt="Logo"
                />
>>>>>>> main
              </a>
            </Link>
            <Link href="/">
              <a className="ml-3 text-xl font-bold uppercase text-darkest dark:text-lightest">{global.name}</a>
            </Link>
          </div>
          <ul
            className={
              "flex flex-col md:flex-row md:items-center space-y-1 md:space-y-0 md:space-x-2 order-1 md:order-none w-full md:w-auto md:flex" +
              (navbarOpen ? " nav-items-open" : " nav-items-closed")
            }
          >
            {menuItems &&
              menuItems.map((menuItem) => {
                return (
                  <li key={menuItem.label} className={router.pathname == menuItem.url ? "active" : ""}>
                    <Link href={menuItem.url}>
                      <a className="flex justify-center w-full p-3 text-gray-600 transition duration-200 ease-in-out rounded-md dark:text-lightest hover:text-gray-900 hover:bg-gray-100 dark:hover:text-gray-900 md:w-auto">
                        {menuItem.label}
                      </a>
                    </Link>
                  </li>
                );
              })}
          </ul>

          <button className="button md:hidden hover:cursor-pointer" onClick={() => setNavbarOpen(!navbarOpen)}>
            <div className="relative w-12 h-12 transition-colors duration-200 ease-in-out rounded-md bg-secondary-light hover:bg-secondary">
              <svg
                className={"p-3 w-12 absolute top-0 left-0 transition-opacity duration-200 ease-in-out" + (navbarOpen ? " opacity-0" : " opacity-100")}
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                height="100%"
                width="100%"
                viewBox="0 0 24 16"
              >
                <g stroke="#fff" strokeLinecap="round" strokeWidth="2">
                  <path d="m1 1h22" />
                  <path d="m1 7.67017h22" />
                  <path d="m1 14.3402h22" />
                </g>
              </svg>
              <svg
                className={
                  "py-3 pl-4 pr-2 w-12 absolute top-0 left-0 transition-opacity duration-200 ease-in-out" + (navbarOpen ? " opacity-100" : " opacity-0")
                }
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                height="100%"
                width="100%"
                viewBox="0 0 24 16"
              >
                <path d="M14.34 1L1 14.34m13.34 0L1 1l13.34 13.34z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </button>

          {attributes && attributes.buttonLinks && (
            <div className="hidden md:block xl:ml-auto">
              {attributes.buttonLinks.map((buttonLink, i) => {
                return <ButtonLink key={i} attribute={buttonLink}></ButtonLink>;
              })}
            </div>
          )}
        </nav>
      </section>
      <style jsx>{`
        .active a {
          color: #1a202c;
          background-color: rgba(237, 242, 247, 0.75);
        }

        @media (max-width: 767px) {
          .nav-items-closed {
            opacity: 0.001;
            max-height: 0px;
            overflow: hidden;
            transition: max-height 1s, opacity 0.5s;
          }

          .nav-items-open {
            opacity: 1;
            max-height: 999px;
            transition: max-height 1s, opacity 0.75s 0.25s;
          }
        }
      `}</style>
    </header>
  );
}
