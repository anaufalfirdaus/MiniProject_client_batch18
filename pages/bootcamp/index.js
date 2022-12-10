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
        <div className=" font-arial font-bold  ml-[5%]">
          <h1>Testimonial</h1>
        </div>
        {/* sliebawah */}
        <SlideBot />
        {/* end slide bawah */}
      </LandingPage>
    </div>
  );
}
