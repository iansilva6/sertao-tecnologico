import * as React from "react";
import {
  MySEO,
  TopSection,
  Courses,
  Teachers,
  Faq,
  Footer
} from "../components";

const IndexPage = () => {
  return (
    <>
      <MySEO />
      <main>
        <TopSection/>
        <Courses/>
        <Teachers/>
        <Faq/>
        <Footer/>
      </main>
    </>
  );
};

export default IndexPage;