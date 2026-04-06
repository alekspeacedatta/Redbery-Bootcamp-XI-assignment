import { HomePage } from "@/pages/home";
import { MainLayout } from "../layouts";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <div>Something went wrong</div>,
    children: [{ index: true, element: <HomePage /> }],
  },
]);
