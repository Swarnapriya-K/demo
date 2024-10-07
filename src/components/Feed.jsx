import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Clientimg from "../images/client.png";

function Feed() {
  return (
    <div>
      <Container fluid>
        <Row className="py-3 text-center">
          <h1>PARENT'S FEEDBACK</h1>
        </Row>
          <Row className='fb_row' >
                    <div class="text-center py-3">
                      <h2>ROHALI JHONSON</h2>
                      <h6 className='cus'>
                        CUSTOMER
                      </h6>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nisi vel distinctio ipsam in dolores ullam, quisquam
                        cumque nemo doloribus iste ad ipsa voluptate modi eos?
                        Quis, iste aut et rerum nobis nihil, dolores nesciunt
                        minus veniam asperiores exercitationem ipsa, dolorum
                        fugit commodi qui id debitis voluptate mollitia
                        consectetur eveniet nulla.
                      </p>
                      <img className="quote" src={Clientimg} alt="img" />
                    </div>
                  </Row>
      </Container>
      </div>
  );
}

export default Feed;