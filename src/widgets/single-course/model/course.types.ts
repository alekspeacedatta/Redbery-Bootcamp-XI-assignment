export interface SingleCourse {
  id: number;
  title: string;
  description: string;
  image: string;
  basePrice: string;
  durationWeeks: number;
  hours: number;
  isFeatured: boolean;
  reviews: {
    userId: number;
    rating: number;
  }[];
  isRated: boolean;
  category: {
    id: number;
    name: string;
    icon: string;
  };
  topic: {
    id: number;
    name: string;
  };
  instructor: {
    id: number;
    name: string;
    avatar: string;
  };
  enrollment: null;
}