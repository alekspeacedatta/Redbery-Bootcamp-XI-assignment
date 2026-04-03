import Input from "@/shared/ui/input/Input";
import { useAuthStore } from "@/store/useAuthStore";

const HomePage = () => {
  const isAuth = useAuthStore((state) => state.isAuth);
  return (
    <div className="flex flex-col items-start gap-16 py-16">
      {isAuth ? (
        <>
          <div className="h-10 w-full bg-indigo-500 text-white flex justify-center items-center">
            Continue Learinign Here
          </div>
          <div className="h-10 w-full bg-yellow-500 text-white flex justify-center items-center">
            Start Learnin Today Here
          </div>
          <Input type="password" />
        </>
      ) : (
        <>
          <div className="h-10 w-full bg-yellow-500 text-white flex justify-center items-center">
            Start Learnin Today Here
          </div>
          <div className="h-10 w-full bg-indigo-500 text-white flex justify-center items-center">
            Continue Learinign Here
          </div>
        </>
      )}
    </div>
  );
};

export default HomePage;
