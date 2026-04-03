import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppProvider from "@/app/providers/AppRrovider";
import { RouterProvider } from "react-router";
import "@/index.css";
import { router } from "@/app/router/router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  </StrictMode>,
);
