import Footer from "./Pages/Shared/Footer/Footer";
import Navbar from "./Pages/Shared/Navber/Navber";
import { Outlet } from 'react-router-dom'
import Social from "./Pages/Shared/Social/Social";
const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="mx-auto min-h-[calc(100vh-100px)] ">
        <Outlet />
      </div>
      <Social></Social>
      <Footer></Footer>
    </div>
  );
};

export default App;