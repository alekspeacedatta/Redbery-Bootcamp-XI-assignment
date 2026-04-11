import { Button, MaxWidth } from "@/shared/ui";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faRocket, faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { ProfileIcon, useAuthStore, useUserStore } from "@/entities/session";
import { useLogout } from "@/features/logout";

export const Header = () => {
  // Extracting auth state and the setter from the store
  const setEnrolledSidebar = useUserStore((state) => state.setEnrolledSidebar);
  const isAuth = useAuthStore((state) => state.isAuth);
  const setAuthMode = useAuthStore((state) => state.setAuthMode);
  const openModal = useAuthStore((state) => state.openModal);
  const setIsProfileOpen = useUserStore((state) => state.setIsProfileOpen);

  const { mutate } = useLogout();

  return (
    <header
      className="
        bg-[#F5F5F5] py-6 border-b border-b-[#D1D1D1] 
        shadow-[0px_0px_11.7px_0px_rgba(0,0,0,0.04)]
      "
    >
      <MaxWidth className="flex justify-between items-center">
        {/* LOGO SECTION: Temporarily acts as an Auth Toggle for testing */}
        <div
          onClick={() => mutate()}
          className="w-15 h-15 bg-[#4F46E5] rounded-[14px] flex justify-center items-center cursor-pointer transition-transform hover:scale-105 active:scale-95"
        >
          <FontAwesomeIcon icon={faRocket} className="text-white text-2xl" />
        </div>

        {/* Nav, isAuth=true means logined, isAuth=false means not logined */}
        {isAuth ? (
          /* AUTHENTICATED STATE */
          <div className="flex items-center gap-9">
            <nav className="flex items-center gap-2">
              <Link
                to="/browse-courses"
                className="hover:text-[#4F46E5] flex items-center gap-2 p-3.75 text-[#525252] font-medium text-xl leading-none transition-colors"
              >
                <FontAwesomeIcon icon={faStar} />
                Browse Courses
              </Link>
              <Button 
                 variant="link"
                 className="
                  hover:text-[#4F46E5] flex items-center gap-2
                  p-3.75 text-[#525252]  text-xl
                  "
                  onClick={setEnrolledSidebar}
                >
                <FontAwesomeIcon icon={faBook} />
                  Enrolled Courses
              </Button>
            </nav>

            {/* User Profile Avatar / Icon */}
            <ProfileIcon
              method={setIsProfileOpen}
              className="
              transition-transform duration-200 hover:scale-110 
              cursor-pointer
            "
            />
          </div>
        ) : (
          /* GUEST STATE (unAuthenticated) */
          <div className="flex items-center gap-9">
            <Link
              to="/browse-courses"
              className="flex items-center gap-2 hover:text-[#4F46E5] cursor-pointer p-3.75 text-[#525252] font-medium text-xl leading-none transition-colors"
            >
              <FontAwesomeIcon icon={faStar} />
              browse courses
            </Link>

            <div className="flex items-center gap-3.75">
              <Button
                onClick={() => {
                  setAuthMode("login");
                  openModal();
                }}
                variant="outline"
                className="py-4.5 px-6.25 text-[#4F46E5] text-xl font-medium"
              >
                Log in
              </Button>
              <Button
                onClick={() => {
                  setAuthMode("register");
                  openModal();
                }}
                className="py-4.5 px-6.25 text-[#F5F5F5] text-xl font-medium"
              >
                Sign Up
              </Button>
            </div>
          </div>
        )}
      </MaxWidth>
    </header>
  );
};
