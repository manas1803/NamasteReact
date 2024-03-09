import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import ContactUs from "./components/Contact Us/ContactUs";
import GenAi from "./components/GenAi/GenAi";
import { lazy, Suspense } from "react";

function App() {
  return (
    <div className="App">
      <RouterProvider router={appRouter} />
    </div>
  );
}

const AboutLazy = lazy(() => import("../src/components/About/About"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: (
      <Suspense fallback={<>Loading...</>}>
        <AboutLazy />
      </Suspense>
    ),
  },
  {
    path: "/contact",
    element: <ContactUs />,
  },
  {
    path: "/genai",
    element: <GenAi />,
  },
]);

export default App;
