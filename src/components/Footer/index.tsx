import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  Footer,
} from './style';

export default function () {
  return (
    <Footer className={"py-4 mt-5"}>
      <Container>
        <Row>
          <Col sm={12}>
            <p>Todos os direitos reservados - Sertão Tecnológico. 2022.</p>
          </Col>
        </Row>
      </Container>
    </Footer>
  );
}