import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import {
  Emoji
} from './style';

export default function () {

  return (
    <Container>
      <Row className={"py-5"}>
        <Col xs={12}>
          <h2 className={"text-center mb-4"}>Cursos</h2>
        </Col>
        <Col xs={12} md={12} lg={4}>
          <Card className={"mb-4"}>
            <Emoji className={"text-center"}>👨‍💻</Emoji>
            <Card.Body>
              <Card.Title className={"text-center"}><b>Seja um DEV!</b> Introdução ao desenvolvimento de aplicações web.</Card.Title>
              <Card.Text className={"text-center"}>
                Dê o pontapé inicial no mundo do desenvolvimento. Aprenda o básico de como construir aplicações
                web e mobile.
              </Card.Text>
              <Button variant="success" className={"w-100"}>Inscreva-se</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={12} lg={4}>
          <Card className={"mb-4"}>
            <Emoji className={"text-center"}>🤳</Emoji>
            <Card.Body>
              <Card.Title className={"text-center"}><b>Seja um criador de conteúdo!</b> Como conquistar mais seguidores e monetizar suas redes sociais.</Card.Title>
              <Card.Text className={"text-center"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean condimentum tincidunt quam quis.
              </Card.Text>
              <Button variant="success" className={"w-100"}>Inscreva-se</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={12} lg={4}>
          <Card>
            <Emoji className={"text-center"}>🌐</Emoji>
            <Card.Body>
              <Card.Title className={"text-center"}><b>Empreendedorismo e Marketing Digital</b> Como criar negócios e vender seu produto usando a internet.</Card.Title>
              <Card.Text className={"text-center"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean condimentum tincidunt quam quis.
              </Card.Text>
              <Button variant="success" className={"w-100"}>Inscreva-se</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}