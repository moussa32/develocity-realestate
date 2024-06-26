import { useState } from "react";
import { useEffect } from "react";
import { authentcatedInstance } from "../../api/constants";
import PropertyCard from "../../shared/components/PropertyCard";
import { AiFillHeart } from "react-icons/ai";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import ReactPaginate from "react-paginate";

const Favourites = () => {
  const [favouriteItems, setFavouriteItems] = useState([]);
  const [pagination, setPagination] = useState(null);

  useEffect(() => {
    authentcatedInstance.get("user/favorite_realstate").then((res) => {
      const { data } = res;
      const { data: responseData } = data;
      const { pagination, realstate } = responseData;
      setPagination(pagination);
      const convertedFavouriteItems = realstate.map((item) => ({
        ...item,
        Icon: AiFillHeart,
        iconHandler: handleFavouriteButton,
        iconClassNames: "text-primary fs-md favouriteIcon",
      }));
      setFavouriteItems(convertedFavouriteItems);
    });
  }, []);

  const handlePageClick = async (event) => {
    const nextPageNumber = event.selected + 1;
    await authentcatedInstance.get(`user/favorite_realstate?page=${nextPageNumber}`).then((res) => {
      const { data } = res;
      const { data: responseData } = data;
      const { pagination, realstate } = responseData;
      const convertedFavouriteItems = realstate.map((item) => ({
        ...item,
        Icon: AiFillHeart,
        iconHandler: handleFavouriteButton,
        iconClassNames: "text-primary fs-md favouriteIcon",
      }));
      setPagination(pagination);
      setFavouriteItems(convertedFavouriteItems);
    });
  };

  const handleFavouriteButton = () => {
    console.log("Icon Clicked");
  };

  return (
    <Container as="section" fluid>
      <h1 className="text-capitalize d-flex align-items-center ps-4 my-5 fs-2xl userPageHeader">favourites</h1>
      <section className="userPageContainer row">
        {favouriteItems &&
          favouriteItems.map((favouriteItem) => (
            <Col xl={4} lg={6} md={6} sm={6} className="userPageCard">
              <PropertyCard info={favouriteItem} />
            </Col>
          ))}
      </section>
      {pagination && (
        <ReactPaginate
          breakLabel="..."
          nextLabel="Next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={10}
          pageCount={pagination.last_page}
          previousLabel="< Prev"
          renderOnZeroPageCount={null}
          containerClassName="d-flex justify-content-center list-unstyled align-items-center"
          pageClassName="pagination-item"
          activeClassName="active-pagination-item"
          disabledLinkClassName="disabled-pagination-item"
          previousLinkClassName="text-decoration-none"
          nextLinkClassName="text-decoration-none"
          previousClassName="prev-pagination-button"
          nextClassName="next-pagination-button"
        />
      )}
    </Container>
  );
};

export default Favourites;
