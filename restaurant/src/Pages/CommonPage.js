import Navbar from "../Components/header";
import Footer from "../Components/footer";
import { Outlet } from "react-router-dom";

const SharedPage = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default SharedPage;
