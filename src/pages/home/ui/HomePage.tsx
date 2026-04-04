import { useAuthStore } from "@/entities/session";
import { FeaturedCourses } from "@/features/featured-courses";
import { HeroSection } from "@/widgets/hero";

export const HomePage = () => {
  const isAuth = useAuthStore((state) => state.isAuth);
  return (
    <div className="flex flex-col items-start gap-16 py-16 bg-[#F5F5F5]">
      <HeroSection/>
      <FeaturedCourses/>
      {isAuth ? (
        <>
        </>
      ) : (
        <>
        </>
      )}
    </div>
  );
};