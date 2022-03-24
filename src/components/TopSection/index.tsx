import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import {
  Section,
  Title,
  SubTitle
} from './style';
import { Header } from '../';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
      <Header />
      <Container>
        <Row>
          <Col md={6}>
            <Title>Embarque no mundo da tecnologia!</Title>
            <SubTitle>O mapa completo para você impulsionar sua evolução e acessar as melhores oportunidades da sua carreira.</SubTitle>
          </Col>
          <Col md={6}>
            <Slider {...settings}>
              
            </Slider>
            <div className="d-grid gap-1 mx-5">
              <Button variant="outline-light" size="lg">Inscreva-se</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </Section>
  );
}