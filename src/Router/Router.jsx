import { createBrowserRouter } from "react-router-dom";
import App from '../App'
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";
import Service from "../Pages/Service/Service";
import Jobs from "../Pages/Jobs/Jobs";
import Clients from "../Pages/Service/Clients/Clients";
import Candidates from "../Pages/Service/Candidates/Candidates";
import About from "../Pages/About/About";
import Login from "../Pages/Registration/Login";
import Register from "../Pages/Registration/Register";

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
      { path: "/jobs", element: <Jobs /> },
      { path: "/about", element: <About /> },
      { path: '/login', element: <Login /> },
      { path: '/register', element: <Register/>}
    ]
  },
]);

export default router;