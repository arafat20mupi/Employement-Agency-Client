import Footer from "./Pages/Shared/Footer/Footer";
import Navbar from "./Pages/Shared/Navber/Navber";
import { Outlet } from 'react-router-dom'
const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className=" min-h-[calc(100vh-100px)] ">
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default App;