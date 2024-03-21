/* eslint-disable react-refresh/only-export-components */
import { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import App from "@/App";

const HomeScreen = lazy(() => import("./routes/home/HomeScreen"));
const BlogList = lazy(() => import("./routes/home/components/BlogList"));
const SignInScreen = lazy(() => import("./routes/signin/SignInScreen"));
const SignUpScreen = lazy(() => import("./routes/signup/SignUpScreen"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // loader: titleLoader,
    children: [
      {
        path: "/home",
        element: (
          <Suspense>
            <HomeScreen />
          </Suspense>
        ),
        children: [
          {
            path: "",
            element:
              <Suspense>
                <BlogList />
              </Suspense>
          }
        ]
        // loader: mainLoader,
        // errorElement: <CrashErrorScreen />,
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
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
