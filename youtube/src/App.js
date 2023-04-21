import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Videos from "./pages/Videos";
import VideoDetail from "./pages/VideoDetail";
import Root from "./pages/Root";
import { DarkModeProvider } from "./context/DarkModeContext";
import Fetch from "./pages/Fetch";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    // errorElement:
    children: [
      { index: true, element: <Videos /> },
      { path: "videos", element: <Videos /> },
      { path: "videos/:keyword", element: <Videos /> },
      // { path: "videos/watch/:videoId", element: <VideoDetail /> },
      { path: "videos/watch/:videoId", element: <Fetch /> },
    ],
  },
]);

const queryClient = new QueryClient();

function App() {
  return (
    <DarkModeProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>
    </DarkModeProvider>
  );
}

export default App;
