import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useParams } from "react-router-dom";
import { authentcatedInstance } from "../../api/constants";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { IoBedSharp } from "react-icons/io5";

const PropertyDetails = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  const { propertyID } = useParams();
  useEffect(() => {
    const request = authentcatedInstance
      .get(`/advertisements/${propertyID}`)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  }, [propertyID]);

  const handleAddToFavorites = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <Container>
      <Row>
        <Col as="section" md={7} lg={8}></Col>
        <Col as="aside" md={5} lg={4}>
          <div className="border border-2 rounded p-4">
            <Row>
              <Col md={9}>
                <div className="d-flex flex-column">
                  <p className="mb-3 text-primary fw-semibold fs-2xl">$270.000</p>
                  <div className="d-flex flex-row gap-4">
                    <div className="mb-0 text-secondary fs-md text-opacity-75">
                      <IoBedSharp size={"1.5rem"} className="me-2" />7
                    </div>
                    <div className="mb-0 text-secondary fs-md text-opacity-75 d-flex align-items-center">
                      <IoBedSharp size={"1.5rem"} className="me-2" />4
                    </div>
                    <div className="mb-0 text-secondary fs-md text-opacity-75">
                      <IoBedSharp size={"1.5rem"} className="me-2" />
                      360 sqm
                    </div>
                  </div>
                </div>
                <p>Georgia , Antalia</p>
              </Col>
              <Col md={3} className="text-end">
                {isFavorite ? (
                  <AiFillHeart className="text-primary fs-2xl" role="button" onClick={handleAddToFavorites} />
                ) : (
                  <AiOutlineHeart className="text-primary fs-2xl" role="button" onClick={handleAddToFavorites} />
                )}
                <p>3 days ago</p>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
      <Row></Row>
    </Container>
  );
};

export default PropertyDetails;
