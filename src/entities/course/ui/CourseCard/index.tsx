import type { Course } from "../../model/types";
import { CourseCardLg } from "../../ui/CourseCard/CourseCardLg";
import { CourseCardSm } from "../../ui/CourseCard/CourseCardSm";

interface Props {
  course: Course;
  variant: "sm" | "lg";
}

export const CourseCard = ({ course, variant }: Props) => {
  if (variant === "lg") return <CourseCardLg course={course} />;
  return <CourseCardSm course={course} />;
};
