import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";

type Props = {
  children?: React.ReactNode;
};

const MainLayout: React.FC<Props> = ({children}) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;