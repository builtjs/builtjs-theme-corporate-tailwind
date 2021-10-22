import React from "react";
import Image from "next/image";
import Link from "next/link";
import getConfig from "next/config";
import { useRouter } from "next/router";
import { ButtonLink } from "@/elements";
import ModeToggleBtn from "../../../elements/mode-toggle-btn";

export default function Header2({ content }) {
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
    <header id="header-2" className="template">
      <section className="p-4 border-b border-gray-200 dark:border-gray-700">
        <div className="mx-auto max-w-screen-xl">
          <nav className="flex flex-wrap items-center">
            <Link href="/">
              <a className="flex items-center pr-10 mr-4">
                <span className="relative w-10">
                  <Image
                    className="text-gray-400 bg-white fill-current dark:bg-gray-800"
                    src={`${publicRuntimeConfig.API_URL || ""}${global?.logo?.url}`}
                    width={global?.logo?.width}
                    height={global?.logo?.height}
                    layout="responsive"
                    alt=""
                  />
                </span>
                <span className="ml-3 text-xl font-bold text-black uppercase dark:text-white">{global.name}</span>
              </a>
            </Link>
            <ul
              className={
                "flex flex-col md:flex-row md:items-center space-y-1 md:space-y-0 md:space-x-2 order-1 md:order-none w-full md:w-auto md:flex mr-4" +
                (navbarOpen ? " nav-items-open" : " nav-items-closed")
              }
            >
              {menuItems &&
                menuItems.map((menuItem) => {
                  return (
                    <li key={menuItem.label} className={router.pathname == menuItem.url ? "active" : ""}>
                      <Link href={menuItem.url}>
                        <a className="flex justify-center w-full p-3 text-gray-600 transition duration-200 ease-in-out rounded-md dark:text-gray-300 hover:text-gray-900 hover:bg-gray-100 dark:hover:text-gray-800 md:w-auto">
                          {menuItem.label}
                        </a>
                      </Link>
                    </li>
                  );
                })}
            </ul>

            <div className="ml-auto">
              <ModeToggleBtn />
            </div>

            <button className="ml-4 button md:hidden hover:cursor-pointer" onClick={() => setNavbarOpen(!navbarOpen)}>
              <div className="relative w-12 h-12 bg-black transition-colors duration-200 ease-in-out rounded-md hover:bg-gray-800">
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
          </nav>
        </div>
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
