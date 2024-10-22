import { createBrowserRouter } from "react-router-dom";
import App from '../App'
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";
import Service from "../Pages/Service/Service";
import Team from "../Pages/Team/Team";
import Jobs from "../Pages/Jobs/Jobs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      { path: "/", element: <Home /> },
      { path: '/contact', element: <Contact /> },
      { path: "/service", element: <Service /> },
      { path: "/team", element: <Team /> },
      { path: "/jobs", element: <Jobs /> },
    ]
  },
]);

export default router;