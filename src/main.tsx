import { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import App from "@/App";
import HomeScreen from "@/routes/home/HomeScreen";
import SignInScreen from "@/routes/signin/SignInScreen";
import SignUpScreen from "@/routes/signup/SignUpScreen";

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
