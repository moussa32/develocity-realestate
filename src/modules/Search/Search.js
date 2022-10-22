import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";
import { authentcatedInstance } from "../../api/constants";
import PropertyCard from "../../shared/components/PropertyCard";
import { GiHouseKeys } from "react-icons/gi";

const Search = () => {
  const [realstates, setRealstates] = useState([]);

  useEffect(() => {
    authentcatedInstance.get("/realstates").then((res) => {
      const { data } = res.data;
      const { realstates } = data;
      setRealstates(realstates);
      console.log(realstates);
    });
  }, []);

  return (
    <Container fluid style={{ marginTop: "64px", paddingLeft: "64px", paddingRight: "64px" }}>
      <Row>
        <Col sm={3} as="aside" className="search-filter">
          <h2 className="fs-md text-primary fw-normal text-capitalize">filters</h2>
          <Form.Select className="search-select fs-md" aria-label="Default select example">
            <GiHouseKeys size={"15rem"} className="text-primary" />
            <option>Property</option>
            <option value="1">For rent</option>
            <option value="2">For sell</option>
            <option value="3">All</option>
          </Form.Select>
          <Form.Select className="search-select fs-md" aria-label="Default select example">
            <option>Type</option>
            <option value="1">House</option>
            <option value="2">Land</option>
            <option value="3">Commercial</option>
            <option value="3">Other</option>
          </Form.Select>
          <Form.Control type="text" placeholder="Location" />
          <Row>
            <Col md={6}>
              <Form.Control type="number" placeholder="Min sq m" />
            </Col>
            <Col md={6}>
              <Form.Control type="number" placeholder="Max sq m" />
            </Col>
          </Row>
          <Form.Group controlId="property_amentities">
            <h2 className="fs-md ps-0">Property amentities</h2>
            <Form.Check
              type="checkbox"
              name="property_amentities"
              value="air condistioning"
              label="air condistioning"
            />
            <Form.Check
              type="checkbox"
              name="property_amentities"
              value="balacony , deck or patio"
              label="balacony , deck or patio"
            />
            <Form.Check type="checkbox" label="basement" />
            <Form.Check type="checkbox" label="dishwasher" />
            <Form.Check type="checkbox" label="dining room" />
          </Form.Group>
          <Form.Group controlId="community_amentities">
            <h2 className="fs-md m-0 ps-0">Community amentities</h2>
            <Form.Check type="checkbox" label="business center" />
            <Form.Check type="checkbox" label="club house" />
            <Form.Check type="checkbox" label="coverd parking" />
            <Form.Check type="checkbox" label="elevator" />
            <Form.Check type="checkbox" label="garage parking" />
          </Form.Group>
        </Col>
        <Col sm={9} as="section" className="search-cards-wrapper">
          <Row>
            {realstates.map((item) => (
              <Col key={item.title} md={6} lg={4}>
                <PropertyCard info={item} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Search;
