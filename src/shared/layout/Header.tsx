import MaxWidth from "@/shared/layout/MaxWidth";
import Button from "@/shared/ui/button/Button";
import { useAuthStore } from "@/store/useAuthStore";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faRocket, faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Header = () => {
  const isAuth = useAuthStore((state) => state.isAuth);
  const setIsAuth = useAuthStore((state) => state.setIsAuth);

  return (
    <header
      className="
        bg-[#F5F5F5] py-6 border-b border-b-[#D1D1D1] shadow-[0px 0px 11.7px 0px #0000000A;]
        
        "
    >
      <MaxWidth className="flex justify-between items-center">
        <div
          className="w-15 h-15 bg-[#4F46E5] rounded-[14px] flex justify-center items-center"
          onClick={setIsAuth}
        >
          <FontAwesomeIcon icon={faRocket} className="text-white text-2xl" />
        </div>
        {isAuth ? (
          <div className="flex items-center gap-9">
            <div className="flex items-center gap-2">
              <Link
                to="/browse-courses"
                className=" hover:text-[#4F46E5] flex items-center gap-2 p-3.75 text-[#525252] font-medium text-xl leading-none"
              >
                <FontAwesomeIcon icon={faStar} />
                Browse Courses
              </Link>
              <button className=" hover:text-[#4F46E5] flex items-center gap-2 cursor-pointer p-3.75 text-[#525252] font-medium text-xl leading-none">
                <FontAwesomeIcon icon={faBook} />
                Enrolled Courses
              </button>
            </div>
            <div className="w-14 h-14 rounded-full bg-[#EEEDFC] flex items-center justify-center">
              <FontAwesomeIcon
                icon={faRocket}
                className="text-2xl text-[#736BEA]"
              />
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-9">
            <Link
              to="/browse-courses"
              className=" flex items-center gap-2 hover:text-[#4F46E5]  cursor-pointer p-3.75 text-[#525252] font-medium text-xl leading-none"
            >
              <FontAwesomeIcon icon={faStar} />
              browse courses
            </Link>
            <div className="flex items-center gap-3.75">
              <Button variant="outline" size="lg">
                Log in
              </Button>
              <Button size="lg">Sign Up</Button>
            </div>
          </div>
        )}
      </MaxWidth>
    </header>
  );
};

export default Header;
