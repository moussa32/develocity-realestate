import { useEffect, useState } from "react";
import Container from "react-bootstrap/container";
import Row from "react-bootstrap/row";
import Col from "react-bootstrap/col";
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
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  }, [propertyID]);

  const handleAddToFavorites = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <Container>
      <Row>
        <Col as="section" md={8}></Col>
        <Col as="aside" md={4}>
          <div className="border border-2 rounded p-4">
            <Row>
              <Col md={9}>
                <div className="d-flex flex-column">
                  <p className="mb-4 text-primary fw-semibold fs-2xl">$270.000</p>
                  <div className="mb-0 text-secondary fs-md">
                    <IoBedSharp size={"1.5rem"} className="me-3" />
                    <span>7</span>
                  </div>
                </div>
              </Col>
              <Col md={3} className="text-end">
                {isFavorite ? (
                  <AiFillHeart className="text-primary fs-2xl" role="button" onClick={handleAddToFavorites} />
                ) : (
                  <AiOutlineHeart className="text-primary fs-2xl" role="button" onClick={handleAddToFavorites} />
                )}
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
