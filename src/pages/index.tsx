import * as React from "react";
import { Container } from "react-bootstrap";
import {
  MySEO,
  TopSection
} from "../components";

const IndexPage = () => {
  return (
    <>
      <MySEO />
      <main>
        <TopSection/>
      </main>
    </>
  );
};

export default IndexPage;