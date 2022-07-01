import * as React from "react";
import {
  MySEO,
  TopSection,
  Courses,
  Teachers,
  Faq
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
      </main>
    </>
  );
};

export default IndexPage;