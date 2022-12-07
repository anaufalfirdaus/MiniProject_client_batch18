import Conte from "./conte";
import Instructor from "./instructor";
import Sbar from "./sBar";
import Description from "./description";
import Titlesss from "./titlesss";
import Review from "./review";
import LandingPageBootcamp from "../../component/layout/LandingPageBootcamp";

export default function MainPage() {
  return (
    <div>
      <LandingPageBootcamp>
        <Sbar></Sbar>
        <Titlesss></Titlesss>
        <Conte></Conte>
        <Description></Description>
        <Instructor></Instructor>
        <Review></Review>
      </LandingPageBootcamp>
    </div>
  );
}
