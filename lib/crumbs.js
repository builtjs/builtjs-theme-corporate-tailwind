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
  let crumbClassName = 'crumb';
  let css = getCrumbCSS(),
    head = document.head,
    style = document.createElement("style");

  head.appendChild(style);

  style.type = "text/css";
  style.appendChild(document.createTextNode(css));

  //WORKAROUND: Timeout to wait for templates to load in DOM
  setTimeout(() => {
    let sections = document.querySelectorAll(".template");
    for (let i = 0; i < sections.length; i++) {
      const section = sections[i];
      if(section.classList.contains(crumbClassName)){
        continue;
      }
      let id = section.id;
      var crumb = document.createElement("div");
      crumb.classList.add(crumbClassName);
      crumb.innerHTML = id;
      section.prepend(crumb);
    }
  }, 500);
}

/**
 * Get CSS for crumb.
 * @returns CSString
 */
function getCrumbCSS() {
  return `
  .template {
    position: relative;
  }

  .template:hover {
    outline: 1px solid #60a5fa;
    outline-offset: -1px;
  }

  .template:hover > .crumb {
    display: block;
  }
  
  .crumb {
    position: absolute;
    top: 0;
    left: 1rem;
    z-index: 100;
    padding: 5px 10px;
    font-size: 12px;
    color: #60a5fa;
    background-color: #eaf3ff;
    border-bottom: 1px solid #60a5fa;
    border-left: 1px solid #60a5fa;
    border-right: 1px solid #60a5fa;
    border-radius: 0 0 5px 5px;
    display: none;
  }`;
}