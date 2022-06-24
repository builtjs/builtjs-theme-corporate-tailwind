import React from "react";
import { useState, useEffect } from "react";

export default function TemplateMenuBtn({ router }) {
  const { slug } = router.query;
  const [on, setOnState] = useState(router.route.startsWith("/templates"));
  const toggle = () => setOnState((on) => !on);
  const [pageData, setPageData] = useState(null);

  async function fetchData(path) {
    return new Promise(async (resolve) => {
      let data = null;
      try {
        data = require(`../../public${path}`);
      } catch (err) {
        console.error(err);
      }
      resolve(data);
    });
  }

  useEffect(async () => {
    let pageData = await fetchData("/data/pages.json");
    setPageData(pageData);
  }, []);

  return (
    <div id="template-menu">
      <div
        id="templates"
        className={
          "shadow-lg bg-white w-40 rounded-lg absolute right-16 bottom-1 flex flex-col transition-all duration-200 " +
          (!on ? "is-closed opacity-0 -bottom-20 invisible" : "")
        }
      >
        {pageData &&
          pageData.pages &&
          pageData.pages.map((template, i) => {
            return template.type === 'templates' ?
             <React.Fragment key={i}>
                <input
                  className="hidden"
                  type="radio"
                  id={`radio-${template.slug}`}
                  name="tabs"
                  checked={slug === template.slug}
                  readOnly
                />
                <label
                  className="px-4 py-2 cursor-pointer tab hover:text-gray-500"
                  htmlFor={`radio-${template.slug}`}
                  onClick={() => router.push(`/templates/${template.slug}`)}
                >
                  {template.displayName}
                </label>
              </React.Fragment> 
              : null;
          })}
        <span
          id="glider"
          className="absolute left-0 top-0 w-0.5 h-8 bg-black rounded-full my-1 transition-transform duration-300"
        ></span>
      </div>

      <div
        id="template-menu-btn"
        className={
          "p-4 bg-black text-white rounded-full cursor-pointer hover:bg-gray-800 transition duration-200 transform-gpu hover:rotate-45 dark:bg-white dark:hover:bg-gray-200 " +
          (on ? "is-active" : "")
        }
        onClick={toggle}
      >
        <svg
          className="text-white stroke-current transition duration-200 dark:text-black"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          height="20"
          viewBox="0 0 26 26"
          width="20"
        >
          <g strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
            <path d="M10.3328 1H1V10.3328H10.3328V1Z" />
            <path d="M25.0008 1H15.668V10.3328H25.0008V1Z" />
            <path d="M25.0008 15.6658H15.668V24.9986H25.0008V15.6658Z" />
            <path d="M10.3328 15.6658H1V24.9986H10.3328V15.6658Z" />
          </g>
        </svg>
      </div>

      <style jsx>
        {`
          #template-menu {
            position: fixed;
            z-index: 50;
            bottom: 25px;
            right: 25px;
          }
          input[type="radio"]:checked + label {
            color: #71717a;
          }

          #glider {
            display: none;
          }

          input[type="radio"]:checked ~ #glider {
            display: block;
          }

          input[id="radio-blocks"]:checked ~ #glider {
            transform: translateY(calc(100% + 0.5rem));
          }

          input[id="radio-cards"]:checked ~ #glider {
            transform: translateY(calc(200% + 1rem));
          }

          input[id="radio-covers"]:checked ~ #glider {
            transform: translateY(calc(300% + 1.5rem));
          }

          input[id="radio-footers"]:checked ~ #glider {
            transform: translateY(calc(400% + 2rem));
          }

          input[id="radio-forms"]:checked ~ #glider {
            transform: translateY(calc(500% + 2.5rem));
          }

          input[id="radio-headers"]:checked ~ #glider {
            transform: translateY(calc(600% + 3rem));
          }

          input[id="radio-lists"]:checked ~ #glider {
            transform: translateY(calc(700% + 3.5rem));
          }
        `}
      </style>
    </div>
  );
}
