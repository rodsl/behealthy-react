import React from "react";
import {
  Accordion,
  Button,
  Card,
  CardGroup,
  Carousel,
  Col,
  Container,
  Form,
  FormControl,
  Jumbotron,
  Nav,
  Navbar,
  NavDropdown,
  Row,
} from "react-bootstrap";

import logo from "../../assets/img/logo_white.png";
import img1 from "../../assets/img/food01.jpg";
import img2 from "../../assets/img/food02.jpg";
import img3 from "../../assets/img/food03.jpg";
import img4 from "../../assets/img/food04.jpg";
import img5 from "../../assets/img/food05.jpg";

const Home = () => {
  return (
    <>
      <div className="bg-image"></div>
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Container fluid="md">
          <Navbar.Brand href="#home">
            <img
              src={logo}
              height="38"
              className="d-inline-block align-top pt-1"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Refeições Congeladas</Nav.Link>
              <Nav.Link href="#link">Kits</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* end Navbar */}

      {/* start carousel */}
      <Carousel controls={false} indicators={false}>
        <Carousel.Item style={{ height: "calc(100vh - 64px)" }}>
          <div
            className="img-holder-carousel "
            style={{ backgroundImage: `url(${img1})` }}
          >
            <div className="d-flex flex-column align-items-center justify-content-center w-100 h-100 p-2">
              <h1 className="custom-h1 text-center" style={{ color: "#fff" }}>
                Coma saudável todos os dias
              </h1>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
      {/* End Carousel */}

      {/* start cards section */}
      <Container fluid="md" className="px-5 mt-5">
        <Row className="g-4">
          <Col className="mb-4">
            <Card className="me-2 custom-card custom-card">
              <Card.Img
                as="div"
                variant="top"
                className="card-img"
                style={{ backgroundImage: `url(${img2})` }}
              />
              <Card.Body>
                <Card.Title>Salmão ao Forno</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <Button className="btn-card" block variant="primary">
                  Adicionar
                </Button>
              </Card.Body>
              {/* <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer> */}
            </Card>
          </Col>
          <Col className="mb-4">
            <Card className="me-2 custom-card custom-card">
              <Card.Img
                variant="top"
                className="card-img"
                style={{ backgroundImage: `url(${img3})` }}
              />
              <Card.Body>
                <Card.Title>Spaghetti com Tomates Cereja</Card.Title>
                <Card.Text>Masssa sem glúten</Card.Text>
                <Button className="btn-card" block variant="primary">
                  Adicionar
                </Button>
              </Card.Body>
              {/* <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer> */}
            </Card>
          </Col>
          <Col className="mb-4">
            <Card className="me-2 custom-card">
              <Card.Img
                variant="top"
                className="card-img"
                style={{ backgroundImage: `url(${img4})` }}
              />
              <Card.Body>
                <Card.Title>Filet Mignon</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <Button className="btn-card" block variant="primary">
                  Adicionar
                </Button>
              </Card.Body>
              {/* <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer> */}
            </Card>
          </Col>
          <Col>
            <Card className="custom-card">
              <Card.Img
                variant="top"
                className="card-img"
                style={{ backgroundImage: `url(${img1})` }}
              />
              <Card.Body>
                <Card.Title>Lombo Suíno Grelhado</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <Button className="btn-card" block variant="primary">
                  Adicionar
                </Button>
              </Card.Body>
              {/* <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer> */}
            </Card>
          </Col>
        </Row>
      </Container>
      {/* end cards section */}

      {/* start cards section */}
      <Container fluid="md" className="px-5 mt-4">
        <Row className="g-4">
          <Col className="mb-4">
            <Card className="me-2 custom-card">
              <Card.Img
                as="div"
                variant="top"
                className="card-img"
                style={{ backgroundImage: `url(${img2})` }}
              />
              <Card.Body>
                <Card.Title>Salmão ao Forno</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <Button className="btn-card" block variant="primary">
                  Adicionar
                </Button>
              </Card.Body>
              {/* <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer> */}
            </Card>
          </Col>
          <Col className="mb-4">
            <Card className="me-2 custom-card card">
              <Card.Img
                variant="top"
                className="card-img"
                style={{ backgroundImage: `url(${img3})` }}
              />
              <Card.Body>
                <Card.Title>Spaghetti com Tomates Cereja</Card.Title>
                <Card.Text>Masssa sem glúten</Card.Text>
                <Button className="btn-card" block variant="primary">
                  Adicionar
                </Button>
              </Card.Body>
              {/* <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer> */}
            </Card>
          </Col>
          <Col className="mb-4">
            <Card className="me-2 custom-card">
              <Card.Img
                variant="top"
                className="card-img"
                style={{ backgroundImage: `url(${img4})` }}
              />
              <Card.Body>
                <Card.Title>Filet Mignon</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <Button className="btn-card" block variant="primary">
                  Adicionar
                </Button>
              </Card.Body>
              {/* <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer> */}
            </Card>
          </Col>
          <Col>
            <Card className="custom-card">
              <Card.Img
                variant="top"
                className="card-img"
                style={{ backgroundImage: `url(${img1})` }}
              />
              <Card.Body>
                <Card.Title>Lombo Suíno Grelhado</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <Button className="btn-card" block variant="primary">
                  Adicionar
                </Button>
              </Card.Body>
              {/* <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer> */}
            </Card>
          </Col>
        </Row>
      </Container>
      {/* end cards section */}

      {/* start about us section */}
      <Container fluid="md" className="px-5 mt-4">
        <Row xs={1} md={2}>
          <Col className="mb-4">
            <div
              className="img-holder-carousel "
              style={{ backgroundImage: `url(${img1})`, borderRadius: "12px" }}
            >
              <div
                className="d-flex flex-column align-items-center justify-content-center w-100 h-100 p-2"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.4)",
                  borderRadius: "12px",
                }}
              >
                <h1 className="custom-h2 text-center" style={{ color: "#fff" }}>
                  Sobre nós
                </h1>
              </div>
            </div>
          </Col>
          <Col className="mb-4">
            <Card body className="text-justify font-weight-bold">
              Somos um grupo de amigos apaixonados por culinária e estilo de
              vida saúdável, no qual resolvemos nos unir e criar esse projeto,
              onde levamos não só praticidade, mas também qualidade e
              diversidade em forma de marmita.
            </Card>
            <Card body className="text-justify font-weight-bold mt-4">
              Nossas marmitas congeladas são feitas com controle total da cadeia
              de suprimentos, utilizando ingredientes naturais e frescos,
              congeladas com a tecnologia de ultracongelamento, que preserva
              todos os nutrientes e sabores.
            </Card>
            <Card body className="text-justify font-weight-bold mt-4">
              Temos a missão de levar nossa culinária de forma afetiva e
              saudável para todos, promovendo o consumo sem desperdícios e
              personalizado, de acordo com seu estilo de vida e dieta.
            </Card>
          </Col>
        </Row>
      </Container>
      {/* end about us section */}

      {/* start frequently questions section */}
      <Container fluid="md" className="px-5 mt-4">
        <Row xs={1} md={1}>
          <Col className="mb-4">
            {/* <div
              className="img-holder-carousel "
              style={{ backgroundImage: `url(${img4})`, borderRadius: "12px" }}
            > */}

            <div
              className="d-flex flex-column align-items-center justify-content-center w-100 h-100 p-2"
              style={{
                //   backgroundColor: "rgba(94, 174, 83, 0.4)",
                borderRadius: "12px",
              }}
            >
              <h1 className="custom-h3 text-center">Perguntas Frequentes</h1>
            </div>
            {/* </div> */}
          </Col>
        </Row>
        <Row xs={1} md={1}>
          <Col className="mb-4">
            <Accordion>
              <Card>
                <Accordion.Toggle
                  as={Card.Header}
                  eventKey="0"
                  style={{ backgroundColor: "#eb8e78", color: "#ffffff" }}
                  className="text-center"
                >
                  Como são produzidas as marmitas congeladas?
                </Accordion.Toggle>

                <Accordion.Collapse eventKey="0">
                  <Card.Body>Resposta 1</Card.Body>
                </Accordion.Collapse>
              </Card>

              <Card>
                <Accordion.Toggle
                  as={Card.Header}
                  eventKey="1"
                  style={{ backgroundColor: "#eb8e78", color: "#ffffff" }}
                  className="text-center"
                >
                  Como fazer para descongelar a marmita?
                </Accordion.Toggle>

                <Accordion.Collapse eventKey="1">
                  <Card.Body>Resposta 2</Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle
                  as={Card.Header}
                  eventKey="2"
                  style={{ backgroundColor: "#eb8e78", color: "#ffffff" }}
                  className="text-center"
                >
                  De onde vem os produtos utilizados na produção das marmitas?
                </Accordion.Toggle>

                <Accordion.Collapse eventKey="2">
                  <Card.Body>Resposta 3</Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Col>
        </Row>
      </Container>
      {/* end frequently questions section */}

      {/* start footer */}

      <Container fluid className="footer">
        <Row xs={1} md={1} lg={2} className="pt-5 px-5 align-items-center">
          <Col className="align-self-lg-center">
            <div className="d-flex flex-column justify-content-start">
              <img
                src={logo}
                height="38"
                className="d-inline-block align-top align-self-start pt-1"
                alt="React Bootstrap logo"
              />
              <p className="">eat healthy, be healthy</p>
            </div>
          </Col>
          <Col className="align-self-center ">
            <div className="d-flex justify-content-between flex-md-row flex-column">

            <div className="d-flex justify-content-start justify-content-sm-end">
              <div className="">
                <p className="title">Serviços</p>
                <p>Fale conosco</p>
              </div>
            </div>
            <div className="d-flex justify-content-start justify-content-sm-end">
              <div className="">
                <p className="title">Sobre</p>
                <p>Sobre Nós</p>
              </div>
            </div>
            <div className="d-flex justify-content-start justify-content-sm-end">
              <div className="">
                <p className="title">REDES SOCIAIS</p>
              </div>
            </div>
            </div>

          </Col>
        </Row>
        <Row className="d-flex justify-content-center pb-0">
          <Col className="d-flex justify-content-center pb-3">
            <p className="mb-0 text-muted">
              Copyright © 2021. BeHealthy. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>

      {/* end footer */}
    </>
  );
};

export default Home;
