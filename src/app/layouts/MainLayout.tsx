import { AuthModal } from "@/widgets/auth-modal";
import { EnrolledSidebar } from "@/widgets/enrolled-courses-sidebar";
import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";
import { ProfileModal } from "@/widgets/profile-modal";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <div className="min-h-screen bg-[#F5F5F5] flex flex-col">
      <EnrolledSidebar />
      <AuthModal />
      <ProfileModal />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
