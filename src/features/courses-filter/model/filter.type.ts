export interface Category {
  id: number;
  name: string;
  icon: string;
}
export interface Topic {
  id: number;
  name: string;
  categoryId: number;
}
export interface Instructor {
  id: number;
  name: string;
  avatar: string;
}
