import { StrictMode, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import App from "./App";
// import LoginScreen from "./routes/login/LoginScreen";
import HomeScreen from "./routes/home/HomeScreen";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // loader: titleLoader,
    children: [
      // {
      //   path: "/login",
      //   element: (
      //     <Suspense>
      //       <LoginScreen />
      //     </Suspense>
      //   ),
      //   // loader: mainLoader,
      //   // errorElement: <CrashErrorScreen />,
      // },
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
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
