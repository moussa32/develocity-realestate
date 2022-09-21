import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sell = () => {
  const categories = useSelector((state) => state.home.data?.data?.categories);
  const categoriesState = useSelector((state) => state.home.status);

  return (
    <Container>
      <h1 className="border-start border-3 ps-4 border-primary fs-2xl fw-normal my-5">Select Category</h1>
      {categoriesState === "success" &&
        categories.map(({ id, name }) => (
          <Link key={`category${id}-name`} to={`sell-${name.toLowerCase()}`}>
            {name}
          </Link>
        ))}
    </Container>
  );
};

export default Sell;
