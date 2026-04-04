import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <div className="bg-[#F5F5F5]">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};