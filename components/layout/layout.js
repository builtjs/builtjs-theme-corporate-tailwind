import { useState } from "react";

const Layout = (props) => {
  const [contentIndex] = useState(1);
  if (!props) return <></>;
  const { children, layoutComps, page } = props;

  return (
    <>
      {page &&
        layoutComps.length > 0 &&
        layoutComps.map((Section, i) => {
          return (
            <div key={i}>
              <Section content={page.layout.sections[i].content} />
              {i === contentIndex - 1 && <main id="main">{children}</main>}
            </div>
          );
        })}
    </>
  );
};

export default Layout;
