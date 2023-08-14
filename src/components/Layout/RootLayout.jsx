import { Outlet, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Loading from "../Loading/Loading";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import Animation from "../../css/Animation.module.css";

function RootLayout() {
  const { state } = useNavigation();
  return (
    <div className={Animation.fadeIn}>
      <Header />

      <main>
        <BreadCrumbs />

        {state === "idle" ? <Outlet /> : <Loading />}
      </main>

      <Footer />
    </div>
  );
}

export default RootLayout;
