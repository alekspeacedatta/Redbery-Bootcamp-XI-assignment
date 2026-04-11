import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";

export const PageLoader = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-white">
      <div className="animate-bounce [animation-duration:2s]">
        <div className="flex h-25 w-25 items-center justify-center rounded-[14px] bg-[#4F46E5]">
          <FontAwesomeIcon icon={faRocket} className="text-5xl text-white" />
        </div>
      </div>

      <p className="mt-4 animate-pulse font-medium tracking-wide text-[#4F46E5]">
        Launching...
      </p>
    </div>
  );
};
