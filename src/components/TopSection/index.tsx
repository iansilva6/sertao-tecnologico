import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import {
  Section,
  Title,
  SubTitle
} from './style';
import { Header } from '../';

export default function () {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Section>
      <Container>
        <Row>
          <Col xs={12} className={"mb-5"}>
            <Header />
          </Col>
          <Col md={6}>
            <Title>Embarque no mundo da tecnologia!</Title>
            <SubTitle>O mapa completo para você impulsionar sua evolução e acessar as melhores oportunidades da sua carreira.</SubTitle>
          </Col>
          <Col md={6}>
            <div className="d-grid gap-1 mx-5">
              <Button variant="outline-light" size="lg">Inscreva-se</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </Section>
  );
}