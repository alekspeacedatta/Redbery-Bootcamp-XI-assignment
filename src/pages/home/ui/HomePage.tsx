import { useAuthStore } from "@/entities/session";
import { CoursesInProgress } from "@/features/courses-in-progress";
import { FeaturedCourseList } from "@/features/featured-courses";
import { HeroSection } from "@/widgets/hero";

export const HomePage = () => {
  const isAuth = useAuthStore((state) => state.isAuth);
  return (
    <div className="flex flex-col items-start gap-16 py-16 ">
        <HeroSection/>
        {isAuth ? (
          <>
            <CoursesInProgress/>
            <FeaturedCourseList/>
          </>
        ) : (
          <>
            <FeaturedCourseList/>
            <CoursesInProgress/>
          </>
        )}
    </div>
  );
};