import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main data-testid="main-content">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
