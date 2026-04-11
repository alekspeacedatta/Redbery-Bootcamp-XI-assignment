export type Course = {
  id: number;
  title: string;
  description: string;
  image: string;
  basePrice: string;
  durationWeeks: number;
  isFeatured: boolean;
  avgRating: number;
  reviewCount: number;
  category: { id: number; name: string; icon: string };
  topic: { id: number; name: string; categoryId: number };
  instructor: { id: number; name: string; avatar: string };
};
