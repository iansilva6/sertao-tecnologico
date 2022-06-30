import * as React from "react";
import { Container } from "react-bootstrap";
import {
  MySEO,
  TopSection,
  Courses,
  Teachers
} from "../components";

const IndexPage = () => {
  return (
    <>
      <MySEO />
      <main>
        <TopSection/>
        <Courses/>
        <Teachers/>
      </main>
    </>
  );
};

export default IndexPage;