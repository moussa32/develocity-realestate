import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { AiOutlineSearch } from "react-icons/ai";

const Search = () => {
  return (
    <Row className="ms-4 align-items-center flex-fill">
      <Col md={5} sm={12}>
        <Form>
          <InputGroup>
            <InputGroup.Text
              className={`border-primary bg-transparent border-1 rounded border-end-0 rounded-0 rounded-start searchIcon`}
            >
              <AiOutlineSearch className="text-primary" size={"1.5rem"} />
            </InputGroup.Text>
            <Form.Control
              placeholder="Georgia"
              name="country"
              aria-label="country"
              type="text"
              className={`border-primary bg-transparent border-start-0 border-1 shadow-none fs-sm formInput`}
              aria-describedby="search-country-input"
            />
          </InputGroup>
        </Form>
      </Col>
      <Col md={7} sm={12}>
        <Form>
          <InputGroup>
            <Form.Control
              className={`border-primary bg-transparent border-end-0 border-1 shadow-none fs-sm formInput ps-3`}
              placeholder="Find Home, Apartment And More"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <Button variant="primary" id="button-addon2" className="px-3 rounded">
              <AiOutlineSearch className="text-white" size={"1.8rem"} />
            </Button>
          </InputGroup>
        </Form>
      </Col>
    </Row>
  );
};

export default Search;
