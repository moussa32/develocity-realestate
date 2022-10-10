import { useState } from "react";
import { useEffect } from "react";
import { authentcatedInstance } from "../../api/constants";
import PropertyCard from "../../shared/components/PropertyCard";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import ReactPaginate from "react-paginate";

const HotDeals = () => {
  const [hotDealItems, setHotDealItems] = useState([]);
  const [pagination, setPagination] = useState(null);

  useEffect(() => {
    authentcatedInstance.get("user/hot_deal").then((res) => {
      const { data } = res;
      const { data: responseData } = data;
      const { pagination, realstate } = responseData;
      setPagination(pagination);
      setHotDealItems(realstate);
    });
  }, []);

  const handlePageClick = async (event) => {
    const nextPageNumber = event.selected + 1;
    await authentcatedInstance.get(`user/hot_deal?page=${nextPageNumber}`).then((res) => {
      const { data } = res;
      const { data: responseData } = data;
      const { pagination, realstate } = responseData;
      setPagination(pagination);
      setHotDealItems(realstate);
    });
  };

  return (
    <Container as="section" fluid>
      <h1 className="text-capitalize d-flex align-items-center ps-4 my-5 fs-2xl userPageHeader">hot Deals</h1>
      <section className="userPageContainer row">
        {hotDealItems &&
          hotDealItems.map((hotDealItem) => (
            <Col xl={4} lg={6} md={6} sm={6} className="userPageCard">
              <PropertyCard info={hotDealItem} />
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

export default HotDeals;
