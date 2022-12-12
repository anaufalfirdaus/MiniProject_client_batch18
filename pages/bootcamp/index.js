import LandingPage from "../component/layout/LandingPage";
import SlideTop from "./SlideTop";
import SlideBot from "./SlideBot";
import MainItems from "./MainItems";
import Kartus from "./Kartus";
export default function bootcamp() {
  return (
    <div>
      <LandingPage>
        {/* fitur slide atas */}
        <SlideTop />
        {/* fitur slide atas end */}
        {/* main items */}
        <MainItems />
        {/* end main items */}

        {/* sliebawah */}
        {/* <Kartus /> */}
        <SlideBot />
        {/* end slide bawah */}
      </LandingPage>
    </div>
  );
}
