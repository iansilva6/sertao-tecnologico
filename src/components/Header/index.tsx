import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  Section,
} from './style';

import logo from '../../images/logo.webp';

export default function () {
  return (
    <Section className={"mt-2 mb-5"}>
      <Container>
        <Row>
          <Col sm={12}>
            <figure>
                <img src={logo} alt={"Sertão Técnologico"} width={200}></img>
            </figure>
          </Col>
        </Row>
      </Container>
    </Section>
  );
}