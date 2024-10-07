import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Aboutimg from "../images/about-img.jpg";
import TriggerExample from "./TriggerExample";

function Program() {
  return (
    <div id="#link1">
      <Container fluid className="bgclr">
        <div class="">
          <Row className="color_textbox">
            <Col sm={12} lg={6} md={12} xl={6}>
              <img src={Aboutimg} alt="the img" className="abtimg" />
            </Col>
            <Col >
              <div class="detail-box2 mt-4">
                <div>
                  <h1 class="fw-bold">A FEW WORDS ABOUT US</h1>
                </div>
                <br />
                <p className="para">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web
                </p>
                <div>
                  <TriggerExample/>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default Program;
