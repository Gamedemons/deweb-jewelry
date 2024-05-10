import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";

// import { Outlet } from "react-router-dom"

type Props = {
  children?: React.ReactNode;
};
// {children}
const MainLayout: React.FC<Props> = ({children}) => {
  return (
    <>
      <Header />
      {/* <Outlet/> */}
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;