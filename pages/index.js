import LandingPage from "./component/layout/LandingPage";
import Hero from "./component/landingpage/Hero";
import ClientPartners from "./component/landingpage/ClientPartners";
import Head from "next/head";
import Bootcamp from "./component/landingpage/Bootcamp";
import AlumniTestimony from "./component/landingpage/AlumniTestimony";
import Benefit from "./component/landingpage/Benefit";
import Course from "./component/landingpage/Course";
import Faq from "./component/landingpage/Faq";
import AlumniStory from "./component/landingpage/AlumniStory";

export default function Home() {
  return (
    <div>
      <LandingPage>
      <>
        <Head>
          <title>CodeId Academy</title>
          <link rel="icon" href="../assets/images/icon.png" />
        </Head>

        <Hero />
        <ClientPartners />
        <AlumniStory />
        <Bootcamp />
        <AlumniTestimony />
        <Benefit />
        <Course />
        <Faq />
      </>
      </LandingPage>
    </div>
  )
}
