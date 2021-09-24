import React from "react";
import { pages } from "../../content/data/pages.json";
import { useState } from "react";

export default function TemplateMenuBtn({ router }) {
  const { slug } = router.query;
  const [on, setOnState] = useState(router.route.startsWith("/templates"));
  const toggle = () => setOnState((on) => !on);

  return (
    <div className="template-menu">
      <div className={"tabs " + (!on ? "closed" : "")}>
        {pages &&
          pages.templates &&
          pages.templates.map((template, i) => {
            return (
              <React.Fragment key={i}>
                <input type="radio" id={`radio-${i}`} name="tabs" checked={slug === template.slug} readOnly />
                <label className="tab dark:text-lightest" htmlFor={`radio-${i}`} onClick={() => router.push(`/templates/${template.slug}`)}>
                  {template.displayName}
                </label>
              </React.Fragment>
            );
          })}

        <span className="glider bg-secondary"></span>
      </div>
      <div className="mask bg-secondary"></div>
      <button className="bg-secondary">
        <div className={"menu-toggle " + (on ? "is-active" : "")} onClick={toggle}></div>
      </button>
      <style jsx>
        {`
          .mask {
            position: absolute;
            z-index: 10;
            right: 0px;
            height: 34px;
            width: 40px;
          }
          .template-menu {
            position: relative;
            top: 10px;
            right: 0;
            z-index: 100;
          }
          .tabs {
            display: flex;
            right: 120px;
            position: absolute;
            z-index: 5;
            transition: right 0.5s ease-in;
          }

          .closed {
            right: -1000px;
          }

          .tabs * {
            z-index: 2;
          }

          input[type="radio"] {
            display: none;
          }

          .tab {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 34px;
            width: 160px;
            font-size: 1rem;
            border-radius: 99px;
            cursor: pointer;
            transition: color 0.15s ease-in;
          }

          input[type="radio"]:checked + label {
            color: #fff;
            z-index: 3;
          }

          input[id="radio-0"]:checked ~ .glider {
            transform: translateX(0);
          }

          input[id="radio-1"]:checked ~ .glider {
            transform: translateX(100%);
          }

          input[id="radio-2"]:checked ~ .glider {
            transform: translateX(200%);
          }

          input[id="radio-3"]:checked ~ .glider {
            transform: translateX(300%);
          }

          input[id="radio-4"]:checked ~ .glider {
            transform: translateX(400%);
          }

          input[id="radio-5"]:checked ~ .glider {
            transform: translateX(500%);
          }

          input:checked ~ .glider {
            display: block !important;
          }

          .glider {
            display: none !important;
            position: absolute;
            display: flex;
            height: 34px;
            width: 160px;
            // background-color: var(--clr-secondary);
            z-index: 1;
            border-radius: 99px;
            transition: 0.25s ease-out;
          }

          // menu icon

          .menu-toggle {
            position: relative;
            display: block;
            width: 14px;
            height: 12px;
            background: var(--clr-secondary);
            border-top: 2px solid;
            border-bottom: 2px solid;
            color: #fff;
            font-size: 0;
            transition: all 0.25s ease-in-out;
          }
          .menu-toggle:before,
          .menu-toggle:after {
            content: "";
            display: block;
            width: 100%;
            height: 2px;
            position: absolute;
            top: 50%;
            left: 50%;
            background: currentColor;
            transform: translate(-50%, -50%);
            transition: transform 0.25s ease-in-out;
          }

          button:hover {
            color: var;
          }

          button .is-active {
            border-color: transparent;
          }
          button .is-active:before {
            transform: translate(-50%, -50%) rotate(45deg);
          }
          button .is-active:after {
            transform: translate(-50%, -50%) rotate(-45deg);
          }

          button {
            position: absolute;
            right: 20px;
            z-index: 10;
            border: none;
            cursor: pointer;
            outline: none;
            // background: var(--clr-secondary);
            color: var(--lightest);
            padding: 11px;
            border-radius: 50%;
            margin-left: 20px;
          }
        `}
      </style>
    </div>
  );
}
