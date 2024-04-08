/* eslint-disable react-refresh/only-export-components */
import { lazy, Suspense } from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";

const HomeScreen = lazy(() => import("../pages/HomeScreen"))
const BlogListScreen = lazy(() => import("../pages/BlogListScreen"));
const CreateBlogScreen = lazy(() => import("../pages/CreateBlogScreen"));
const SignInScreen = lazy(() => import("../pages/SignInScreen"));
const SignUpScreen = lazy(() => import("../pages/SignUpScreen"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen />,
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