import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const MainLayouts = () => {
  return (
    <div>
      {/* NavBar  */}
      <NavBar></NavBar>
      <div className="min-h-[calc(100vh-232px)]">{/* Dynamic Section  */}</div>
      {/* Footer  */}
      <Footer></Footer>
    </div>
  );
};

export default MainLayouts;
