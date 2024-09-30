import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import backgroundImage from '../images/slider-bg.jpg'

function Home() {
  return (
    <div>
      <Container fluid className="head">
        <Row>
          <Col>
            <h1>Welcome</h1>
          </Col>
          <Col>
            <Nav
              className="navtext justify-content-center"
              variant="underline"
              defaultActiveKey="/home"
            >
              <Nav.Item>
                <Nav.Link href="/home">HOME</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="Option">ABOUT</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="Offer">PROGRAM</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="adrress">CONTACT</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row> <br /> <br />
        <div class="container-text  ">
          <Row>
            <Col>
              <h4 class="first_text">A PERFECET LEARNING CENTER</h4>
              <h1 class="second_text">FOR YOUR KIDS</h1>
              <h6 class="third_text col-12 text-center text-sm-start col-lg-6 py-4">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as
              </h6>
              <button class="read_btn px-4 py-2 mb-4 " type="button">
                READ MORE
              </button>
              <button class="contact_btn px-4 py-2 mx-2" type="button">
                CONTACT US
              </button>
            </Col>
            <Col className="img">
              <img className="bgimg" src={backgroundImage} alt="home_bg_img" />
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default Home;
