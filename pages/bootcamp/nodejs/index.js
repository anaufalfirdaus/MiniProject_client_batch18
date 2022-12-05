import LandingPage from "../../component/layout/LandingPage";
import Conte from "./conte";
import Instructor from "./instructor";
import Sbar from "./sBar";
import Titless from "./Title";
import Description from "./description";
import Titlesss from "./titlesss";
import Review from "./review";

export default function MainPage() {
  return (
    <div>
      <LandingPage>
        <Sbar></Sbar>
        <Titlesss></Titlesss>
        <Conte></Conte>
        <Description></Description>
        <Instructor></Instructor>
        <Review></Review>
      </LandingPage>
    </div>
  );
}
