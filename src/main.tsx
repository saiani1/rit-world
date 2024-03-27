/* eslint-disable react-refresh/only-export-components */
import { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, Router, RouterProvider } from "react-router-dom";

import "./index.css";
import App from "@/App";
import { Toaster } from "react-hot-toast";

const BlogListScreen = lazy(() => import("./routes/home/components/BlogList"));
const CreateBlogScreen = lazy(() => import("./routes/home/components/CreateBlog"));
const SignInScreen = lazy(() => import("./routes/signin/SignInScreen"));
const SignUpScreen = lazy(() => import("./routes/signup/SignUpScreen"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // loader: titleLoader,
    children: [
      {
        element: <Outlet />,
        children: [
          {
            path: "/list",
            element:
              <Suspense>
                <BlogListScreen />
              </Suspense>
          },
          {
            path: "/create",
            element:
              <Suspense>
                <CreateBlogScreen />
              </Suspense>
          },
        ]
        // loader: mainLoader,
        // errorElement: <CrashErrorScreen />,
      },
    ],
  },
  {
    path: "/signin",
    element: (
      <Suspense>
        <SignInScreen />
      </Suspense>
    ),
    // loader: mainLoader,
    // errorElement: <CrashErrorScreen />,
  },
  {
    path: "/signup",
    element: (
      <Suspense>
        <SignUpScreen />
      </Suspense>
    ),
    // loader: mainLoader,
    // errorElement: <CrashErrorScreen />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <RouterProvider router={router} />
    <Toaster
    containerStyle={{
      top: 20,
    }}
    toastOptions={{
      duration: 2000,
    }}
  />
  </>
);
