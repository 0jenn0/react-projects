import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Home from "./pages/Home";
import Videos from "./pages/Home";
import VideoDetail from "./pages/VideoDetail";
import Root from "./pages/Root";
import Why from "./pages/why";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    // errorElement:
    children: [
      { index: true, element: <Home /> },
      { path: "/videos/bts", element: <Videos /> },
      { path: "/videos/watch/:videoId", element: <VideoDetail /> },
    ],
  },
]);

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
}

export default App;
