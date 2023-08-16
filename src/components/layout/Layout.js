import Header from "./Header";

function Layout({ children }) {
  const style = { minHeight: "700px" };
  return (
    <>
      <Header />
      <div style={style}>{children}</div>
    </>
  );
}

export default Layout;
