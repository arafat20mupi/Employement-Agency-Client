import { createBrowserRouter } from "react-router-dom";
import App from '../App'
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";
import Service from "../Pages/Service/Service";
import Team from "../Pages/Team/Team";
import Jobs from "../Pages/Jobs/Jobs";
import Clients from "../Pages/Service/Clients/Clients";
import Candidates from "../Pages/Service/Candidates/Candidates";
import About from "../Pages/About/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      { path: "/", element: <Home /> },
      { path: '/contact', element: <Contact /> },
      { path: "/service", element: <Service /> },
      { path: "/candidate", element: <Candidates /> },
      { path: "/employer", element: <Clients /> },
      { path: "/team", element: <Team /> },
      { path: "/jobs", element: <Jobs /> },
      { path: "/about", element: <About /> },
    ]
  },
]);

export default router;