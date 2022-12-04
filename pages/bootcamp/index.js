import LandingPage from "../component/layout/LandingPage";
import Search from "./Search";
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

        {/* fitur search*/}
        <Search />
        {/* end fitur search*/}

        {/* main items */}
        <MainItems />
        {/* end main items */}
        <div className="mt-[30px] mb-[10px] font-serif font-bold  ml-[5%]">
          <h1>Testimonial</h1>
        </div>
        {/* sliebawah */}
        <SlideBot />
        {/* end slide bawah */}
      </LandingPage>
    </div>
  );
}
