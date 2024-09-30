import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Aboutimg from "../images/about-img.jpg";

function Program() {
  return (
    <div>
      <Container fluid>
        <div class="">
          <div class="row color_textbox">
            <div class="col">
              <img src={Aboutimg} alt="the img" className="abtimg" />
            </div>
            <div class="col">
              <div class="detail-box2 mt-4">
                <div>
                  <h1 class="fw-bold">A FEW WORDS ABOUT US</h1>
                </div>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web
                </p>
                <div>
                  <button class="read_btn my-4 px-4 py-2">READ MORE</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Program;
