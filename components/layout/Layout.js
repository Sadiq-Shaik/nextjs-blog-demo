import MainNav from "./main-nav";

function Layout(props) {
  return (
    <>
      <MainNav />
      <main>{props.children}</main>
    </>
  );
}

export default Layout;
