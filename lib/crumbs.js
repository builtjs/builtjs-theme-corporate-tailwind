export const setupCrumbs = async (router) => {
  window.addEventListener("load", function () {
    showCrumbs();
  });
  router.events.on("routeChangeComplete", (url) => {
    showCrumbs();
  });
};

/**
 * Display crumb (label with template name) when template is hovered over.
 */
function showCrumbs() {
  let css = getCrumbCSS(),
    head = document.head,
    style = document.createElement("style");

  head.appendChild(style);

  style.type = "text/css";
  style.appendChild(document.createTextNode(css));

  setTimeout(() => {
    let sections = document.querySelectorAll(".template");
    for (let i = 0; i < sections.length; i++) {
      const section = sections[i];
      let id = section.id;
      var crumb = document.createElement("div");
      crumb.classList.add("crumb");
      crumb.innerHTML = id;
      section.prepend(crumb);
    }
  }, 500);
}

/**
 * Get CSS for crumb.
 * @returns CSString
 */
function getCrumbCSS(){
  return `
  .template {
    position: relative;
    border: 1px solid transparent;
  }

  .template:hover{
    border-color: rgba(96, 165, 250, .5);
  }

  .template:hover > .crumb{
    display: block;
  }
  
  .crumb {
    position: absolute;
    z-index: 100;
    top: 0;
    left: 20px;
    padding: 4px 8px;
    font-size: 12px;
    color: #60a5fa;
    background-color: #eaf3ff;
    border-bottom: 1px solid rgba(96, 165, 250, .5);
    border-left: 1px solid rgba(96, 165, 250, .5);
    border-right: 1px solid rgba(96, 165, 250, .5);
    border-radius: 0 0 3px 3px;
    opacity: .8;
    display: none;
  }`;
}

/**
 * Get CSS for template menu.
 * @returns CSString
 */
function getTemplateMenuCSS(){
  return `
  .container {
    position: relative;
    left: 0;
    top: 100px;
    right: 0;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .tabs {
    display: flex;
    right: 20px;
    position: absolute;
    z-index: 5;
    transition: right .5s ease-in;
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
    background-color: var(--clr-secondary);
    z-index: 1;
    border-radius: 99px; // just a high number to create pill effect
    transition: 0.25s ease-out;
  }

  @media (max-width: 700px) {
    .tabs {
      transform: scale(0.6);
    }
  }

  // menu icon

  .menu-toggle {
    position: relative;
    display: block;
    width: 14px;
    height: 12px;
    background: var(--clr-secondary);;
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
    color: white;
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

  body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #1488cc;
    background: linear-gradient(
      to right,
      rgba(43, 50, 178, 0.75),
      rgba(20, 136, 204, 0.75)
    );
  }

  button {
    position: absolute;
    right: 0;
    z-index: 10;;
    border: none;
    cursor: pointer;
    outline: none;
    background: var(--clr-secondary);
    color: white;
    padding: 11px;
    border-radius: 50%;
    margin-left:20px;
  }
  `;
}

