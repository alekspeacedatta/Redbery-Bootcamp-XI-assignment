import { HomePage } from "@/pages/home";
import { MainLayout } from "../layouts";
import { createBrowserRouter } from "react-router";
import { CourseCatalogPage } from "@/pages/catalog";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <div>Something went wrong</div>,
    children: [
      { index: true, element: <HomePage /> },
      { path: "browse-courses", element: <CourseCatalogPage /> },
    ],
  },
]);
