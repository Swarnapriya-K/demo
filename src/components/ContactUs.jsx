import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
function ContactUs() {
  return (
    <div>
      <Container fluid className="blck">
        <div class="row pt-5">
          <div class="col-12 col-xl-6">
            <h4 class="f_text pt-5 text-md-center">NEWSLETTER</h4>
          </div>
          <div class="col-12 col-xl-6">
            <div class="search_box mt-3">
              <h6 class="px-2 py-4 text-center">Enter your EMAIL</h6>
              <div class="innerbox mt-1">
                <h5 class="mt-3 d-flex justify-content-center">SUBSCRIBE</h5>
              </div>
            </div>
          </div>
        </div>
        <Row className="textclr justify-content-center mt-4 pb-5">
          <Col lg={3} xl={2}>
            <h4>BRINGTON</h4>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration
            </p>
          </Col>
          <Col lg={3} xl={2}>
            <h4>CONTACT US</h4>
            <p>
              Donec odio. Quisque volutpat mattis eros.Lorem ipsum dolor sit
              amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat
              mattis eros
            </p>
          </Col>
          <Col lg={3} xl={2}>
            <h4>INFORMATION</h4>
            <p>
              Donec odio. Quisque volutpat mattis eros.Lorem ipsum dolor sit
              amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat
              mattis eros
            </p>
          </Col>
          <Col lg={3} xl={2}>
            <h4>MY ACCOUNT</h4>
            <p>
              Donec odio. Quisque volutpat mattis eros.Lorem ipsum dolor sit
              amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat
              mattis eros
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ContactUs;
