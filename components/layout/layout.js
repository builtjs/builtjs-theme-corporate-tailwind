const Layout = (props) => {
  const { children, page } = props;
  return (
    <>
      {page.layout && (
        <page.layout._0.template
          content={page.layout._0.content}
          app={page.app}
        />
      )}
      <main>{children}</main>
      {page.layout && (
        <page.layout._1.template
          content={page.layout._1.content}
          app={page.app}
        />
      )}
    </>
  );
};

export default Layout;
