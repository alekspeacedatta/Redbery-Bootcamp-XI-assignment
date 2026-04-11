import type { Course } from "@/entities/course/model/types";
import CourseCardLg from "@/entities/course/ui/CourseCard/CourseCardLg";
import CourseCardSm from "@/entities/course/ui/CourseCard/CourseCardSm";

interface Props {
  course: Course;
  variant: "sm" | "lg";
}

export const CourseCard = ({ course, variant }: Props) => {
  if (variant === "lg") return <CourseCardLg course={course} />;
  return <CourseCardSm course={course} />;
};
