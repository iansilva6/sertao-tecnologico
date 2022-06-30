import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

export default function () {

  return (
    <Container>
      <Row className={"py-5"}>
        <Col xs={12}>
          <h2 className={"text-center mb-4"}>Instrutores</h2>
        </Col>
        <Col xs={12} md={12} lg={4}>
          <Card className={"mb-4"}>
            <Card.Img variant="top" src="https://media-exp2.licdn.com/dms/image/C4D03AQE6QO5u3lyGGw/profile-displayphoto-shrink_800_800/0/1624902889351?e=1661990400&v=beta&t=Ix1sSLsmGlYpMghkRsM58-5ISdOe8cGwgog75KG0UHM" />
            <Card.Body>
              <Card.Title className={"text-center"}><b>Mateus Carvalho</b></Card.Title>
              <Card.Text className={"text-justify"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean condimentum tincidunt quam quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean condimentum tincidunt quam quis.
              </Card.Text>
              <Button variant="success" className={"w-100"}>Saiba Mais</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={12} lg={4}>
          <Card className={"mb-4"}>
            <Card.Img variant="top" src="https://scontent.ffec7-1.fna.fbcdn.net/v/t1.18169-9/13509069_1080134495408580_8732268218232863400_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=juE8pukmWFwAX--Iw7w&_nc_ht=scontent.ffec7-1.fna&oh=00_AT8_MgVyptLNMxWmrWTBb9Zf85uqbhvr7P6AYUFQJYa6-A&oe=62E2DF68" />
            <Card.Body>
              <Card.Title className={"text-center"}><b>Ian Silva</b></Card.Title>
              <Card.Text className={"text-justify"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean condimentum tincidunt quam quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean condimentum tincidunt quam quis.
              </Card.Text>
              <Button variant="success" className={"w-100"}>Saiba Mais</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={12} lg={4}>
          <Card className={"mb-4"}>
            <Card.Img variant="top" src="https://scontent.ffec7-1.fna.fbcdn.net/v/t1.18169-9/13509069_1080134495408580_8732268218232863400_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=juE8pukmWFwAX--Iw7w&_nc_ht=scontent.ffec7-1.fna&oh=00_AT8_MgVyptLNMxWmrWTBb9Zf85uqbhvr7P6AYUFQJYa6-A&oe=62E2DF68" />
            <Card.Body>
              <Card.Title className={"text-center"}><b>Andressa Carvalho</b></Card.Title>
              <Card.Text className={"text-justify"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean condimentum tincidunt quam quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean condimentum tincidunt quam quis.
              </Card.Text>
              <Button variant="success" className={"w-100"}>Saiba Mais</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}