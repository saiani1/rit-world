/* eslint-disable react-refresh/only-export-components */
import { lazy, Suspense } from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";

const HomeScreen = lazy(() => import("pages/Home/ui/HomeScreen").then(({ HomeScreen }) => ({ default: HomeScreen })));
const BlogListScreen = lazy(() => import("pages/BlogList/ui/BlogListScreen").then(({ BlogListScreen }) => ({ default: BlogListScreen })));
const CreateBlogScreen = lazy(() => import("pages/CreateBlog/ui/CreateBlogScreen").then(({ CreateBlogScreen }) => ({ default: CreateBlogScreen })));
const SignInScreen = lazy(() => import("pages/SignIn/ui/SignInScreen").then(({ SignInScreen }) => ({ default: SignInScreen })));
const SignUpScreen = lazy(() => import("pages/SignUp/ui/SignUpScreen").then(({ SignUpScreen }) => ({ default: SignUpScreen })));

export const router = createBrowserRouter([
  {
    element: <HomeScreen />,
    // loader: titleLoader,
    children: [
      {
        element: <Outlet />,
        children: [
          {
            path: "/",
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