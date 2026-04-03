import { Outlet } from "react-router-dom";
import Footer from "@/shared/layout/Footer";
import Header from "@/shared/layout/Header";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
