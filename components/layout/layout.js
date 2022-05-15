const Layout = (props) => {
  const { children, page } = props;
  return (
    <>
      {page.layout && (
        <page.layout._0.component
          content={page.layout._0.content}
          app={page.app}
        />
      )}
      <main>{children}</main>
      {page.layout && (
        <page.layout._1.component
          content={page.layout._1.content}
          app={page.app}
        />
      )}
    </>
  );
};

export default Layout;
