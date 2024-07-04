
import { Button, Col, Container, Row } from "react-bootstrap";
import "./Introduction.css";

export default function Introduction() {
  return (
    <div className="introduction p-3 p-lg-5 mt-5">
      <Container fluid>
        <Row className="justify-content-md-center">
          <Col xs={12} md={8}>
            <h1 className="pl-2 text-center">
              Welcome to dynamic Form{" "}
              <span className="pt-2 pb-4">
                that you will do everything that you want
              </span>
            </h1>
            <h4 className="text-center pt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.
            </h4>
            <div className="d-flex container-actions mt-5">
              <div className="container-buttons">
                <Button
                  className="p-3"
                  onClick={() => console.log("Click button")}
                >
                  Get in touch
                </Button>
                <Button className="p-3">Get in touch</Button>
              </div>
              <div className="btn-start-create">
                <a href="#dynamic-form">Start to create ➡️</a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}