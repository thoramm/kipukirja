import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";

function MainLayout({ children }) {
  return (
    <>
      <Header />
      <Menu />
      <main>{children}</main>
    </>
  );
}

export default MainLayout;