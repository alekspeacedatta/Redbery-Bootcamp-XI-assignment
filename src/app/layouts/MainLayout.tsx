import { AuthModal } from "@/widgets/auth-modal";
import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <div className="min-h-screen bg-[#F5F5F5] flex flex-col">
      <AuthModal />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};