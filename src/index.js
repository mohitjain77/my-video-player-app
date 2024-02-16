import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import VideoPlayer from "./components/VideoPlayer";
import VideoGridView from "./components/VideoGridView";
import PlayListView from "./components/PlayListView";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <VideoGridView />,
      },
      {
        path: "/playlist",
        element: <PlayListView />,
        children: [
          {
            path: "/playlist/video/:videoSrc",
            element: <VideoPlayer />,
          },
        ],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
