import { Outlet, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Loading from "../Loading/Loading";

function RootLayout() {
  const { state } = useNavigation();
  return (
    <>
      <Header />

      <main>
        {state === "idle" ? <Outlet /> : <Loading />}
      </main>

      <Footer />
    </>
  );
}

export default RootLayout;
