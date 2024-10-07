import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Home2 from "./Home2";
import Navigation from "./Navigation";


function Home() {
  return (
    <div>
      <Container fluid>
          <Row className="head">
            <Col>
              <h1 className="mx-4">Welcome</h1>
            </Col>
            <Col>
              <Navigation />
            </Col>
          </Row>
          <Home2 />
      </Container>
    </div>
  );
}

export default Home;
