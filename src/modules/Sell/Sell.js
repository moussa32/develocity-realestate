import { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { fetchSell } from "../../redux/features/SellSlice";

const Sell = () => {
  const sellStatus = useSelector((state) => state.sell.status);
  const sellCategories = useSelector((state) => state.sell.data.data.categories);

  const dispatch = useDispatch();
  useEffect(() => {
    if (!sellStatus) {
      dispatch(fetchSell());
    }
  }, [sellStatus]);

  return (
    <Container>
      <h1 className="border-start border-3 ps-4 border-primary fs-2xl fw-normal my-5">Select Category</h1>
      <Row className="selectCategoryWrapper mb-5">
        {sellStatus === "success" &&
          sellCategories.map(({ id, name, image }) => (
            <Col xs={12} sm={6} md={4} lg={3} key={`category${id}-name`}>
              <Link
                to={name}
                className="d-flex flex-column text-decoration-none text-primary text-center fs-md selectCategoryCard justify-content-center align-items-center text-capitalize rounded"
              >
                <img src={image} title={name} alt={name} />
                {name}
              </Link>
            </Col>
          ))}
      </Row>
      <Outlet />
    </Container>
  );
};

export default Sell;
