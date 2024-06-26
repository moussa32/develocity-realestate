import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import mainImage from "../../assets/images/minaOverlapImg.png";
import secondImage from "../../assets/images/secondOverlapImg.png";
import { ImPlay3 } from "react-icons/im";
import { Link } from "react-router-dom";
import DividerWithText from "../../shared/components/DividerWithText";

const About = () => {
  return (
    <section className="bg-primary bg-opacity-5 py-5">
      <Container>
        <DividerWithText text="about us" bgVariant="primary" />
        <Row>
          <Col lg={7} md={12} sm={12}>
            <div className="imageStack">
              <div className="imageStackItem imageStackItemTop">
                <img src={mainImage} alt="A portrait of a girl under hanging flowers." />
              </div>
              <div className="imageStackItem imageStackItemBottom">
                <div className="position-relative" role="button">
                  <div className="overlay position-absolute h-100 w-100"></div>
                  <img src={secondImage} alt="" />
                  <span className="playButtonWrapper position-absolute top-50 start-50 translate-middle bg-white rounded-circle d-flex align-items-center justify-content-center">
                    <ImPlay3 className="playButton text-primary" />
                  </span>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={5} md={12} sm={12} className="d-flex flex-column mt-5 align-items-md-start align-items-center">
            <h3 className="fs-4xl fw-semibold text-capitalize">we provide the best</h3>
            <h3 className="fs-4xl fw-semibold text-capitalize">
              <span className="text-primary">porperty</span> for you .
            </h3>
            <p className="fs-xl mb-1 text-muted text-center text-md-start">Lorem ipsumLorem ipsumLorem ipsum</p>
            <p className="fs-xl mb-1 text-muted text-center text-md-start">Lorem ipsumLorem ipsumLorem ipsum</p>
            <p className="fs-xl mb-1 text-muted text-center text-md-start">Lorem ipsumLorem ipsumLorem ipsum</p>
            <p className="fs-xl mb-4 text-muted text-center text-md-start">Lorem ipsumLorem ipsumLorem ipsum</p>
            <Button
              as={Link}
              variant="primary"
              to="/"
              className={`text-white readMoreButton fs-md d-flex align-items-center fw-semibold`}
            >
              Read More
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
