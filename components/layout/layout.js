import { useState } from "react";

const Layout = (props) => {
  const { children, layoutComps, page } = props;
  const [contentIndex] = useState(1);
  return (
    <>
      {layoutComps.length > 0 &&
        layoutComps.map((Section, i) => {
          return (
            <>
              <Section key={i} content={page.layout.sections[i].content} />
              {i === contentIndex - 1 && <main id="main">{children}</main>}
            </>
          );
        })}
    </>
  );
};

export default Layout;

// const Layout = (props) => {
//   const { children, page } = props;
//   return (
//     <>
//       {page.layout && page.layout._0 && (
//         <page.layout._0.component
//           content={page.layout._0.content}
//           app={page.app}
//         />
//       )}
//       <main>{children}</main>
//       {page.layout && page.layout._1 && (
//         <page.layout._1.component
//           content={page.layout._1.content}
//           app={page.app}
//         />
//       )}
//     </>
//   );
// };

// export default Layout;
