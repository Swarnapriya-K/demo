import React from 'react'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import backgroundImage from "../images/slider-bg.jpg";
import TriggerExample from './TriggerExample';
import TriggerExample2 from './TriggerExample2';


function Home2() {
  return (
    <div>
      <div class="container-text ">
        {/* col-12 col-xl-6 col-md-6 */}
        <Row className="head1">
          <Col sm={12} lg={6} md={12} xl={6}>
            <div className="textctr">
              <h4 class="first_text">A PERFECET LEARNING CENTER</h4>
              <h1 class="second_text">FOR YOUR KIDS</h1>
              <p className="third_text">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as
              </p>
              <TriggerExample />
              <TriggerExample2 />
            </div>
          </Col>
          <Col>
            <img className="bgimg" src={backgroundImage} alt="home_bg_img" />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Home2