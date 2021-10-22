const Layout = (props) => {
  const { children, fullPage } = props;
  return (
    <>
      {fullPage.layout && <fullPage.layout._0.template content={fullPage.layout._0.content} app={fullPage.app} />}
      <main id="main">{children}</main>
      {fullPage.layout && <fullPage.layout._1.template content={fullPage.layout._1.content} app={fullPage.app} />}
    </>
  );
};

export default Layout;
