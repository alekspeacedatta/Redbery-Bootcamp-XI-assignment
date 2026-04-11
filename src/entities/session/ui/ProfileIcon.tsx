import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useUserStore } from "../model/useUserStore";
import { faUser } from "@fortawesome/free-regular-svg-icons";

interface ProfileIconType {
  method?: (value: boolean) => void;
  className?: string;
}

export const ProfileIcon = ({ method, className }: ProfileIconType) => {
  const user = useUserStore((state) => state.user);

  return (
    <div
      className={`relative transition-transform ${className}
            ${user?.avatar ? "" : "bg-[#EEEDFC] rounded-full w-14 h-14 flex items-center justify-center"}
        `}
      onClick={() => {
        if (method) {
          method(true);
        }
      }}
    >
      {user?.avatar ? (
        <img
          className=" transition-all duration-200 object-cover rounded-full h-14 w-14"
          src={user?.avatar ?? ""}
          alt="user avatar"
        />
      ) : (
        <FontAwesomeIcon className="text-3xl text-indigo-600" icon={faUser} />
      )}
      <div
        className={`
                transition-colors duration-200
                w-4 h-4 rounded-full border-3 border-white absolute z-15 right-0 bottom-0 
                ${user?.profileComplete ? "bg-[#1DC31D]" : "bg-red-500"}
                `}
      ></div>
    </div>
  );
};
