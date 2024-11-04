import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Home from "../pages/Home";

const MainLayouts = () => {
  return (
    <div>
      {/* NavBar  */}
      <NavBar></NavBar>
      <div className="min-h-[calc(100vh-232px)] p-12 container mx-auto">
        {/* Dynamic Section  */}
        <Home></Home>
      </div>
      {/* Footer  */}
      <Footer></Footer>
    </div>
  );
};

export default MainLayouts;
