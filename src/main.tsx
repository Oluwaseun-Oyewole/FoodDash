import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import Loader from "./common/components/loader/index.tsx";
import { routes } from "./common/routes/index.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Toaster position="top-center" />
    <Suspense fallback={<Loader screen />}>
      <RouterProvider router={routes} fallbackElement={<Loader screen />} />
    </Suspense>
  </React.StrictMode>
);
