import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link, useParams } from "react-router-dom";
import { authentcatedInstance } from "../../api/constants";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { IoBedSharp } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";
import { FaPhoneAlt } from "react-icons/fa";
import ContentLoader from "react-content-loader";
import parse from "html-react-parser";
import { Carousel } from "react-responsive-carousel";
import "react-toastify/dist/ReactToastify.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const PropertyDetails = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [propertyInfo, setPropertyInfo] = useState(null);
  const [propertyAd, setPropertyAd] = useState(null);
  const [propertyInstructions, setPropertyInstructions] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const { propertyID } = useParams();

  useEffect(() => {
    if (!propertyInfo) {
      authentcatedInstance
        .get(`/realstates/${propertyID}`)
        .then((response) => {
          const { data } = response;
          setPropertyInfo(data.data.realstate);
          setPropertyAd(data.data.ad.image);
          setPropertyInstructions(data.data.instructions);
          console.log(data.data);
          setIsLoaded(true);
        })
        .catch((error) => {
          toast.warn(error.message);
        });
    }
  }, [propertyID]);

  const handleAddToFavorites = () => {
    setIsFavorite(!isFavorite);
    authentcatedInstance
      .get(`/realstate/toggle_favorite/${propertyID}`)
      .then((response) => {
        const { data } = response;
        toast.success(data.msg);
        console.log(data);
      })
      .catch((error) => {
        toast.warn(error.message);
      });
  };

  const renderContactSellerMethod = () => {
    const { contact_method, seller_phone } = propertyInfo;
    if (contact_method === "chat") {
      return <button className="btn btn-primary text-white w-100 mt-3 fs-md">chat with seller</button>;
    } else if (contact_method === "phone") {
      return (
        <a
          href={`tel:${seller_phone}`}
          className="d-block fw-semibold fs-md my-4 text-center text-dark text-decoration-none"
        >
          <FaPhoneAlt className="me-2 text-primary" /> {seller_phone}
        </a>
      );
    } else {
      <>
        <button className="btn btn-primary text-white w-100 mt-3 fs-md">chat with seller</button>
        <a
          href={`tel:${seller_phone}`}
          className="d-block fw-semibold fs-md my-4 text-center text-dark text-decoration-none"
        >
          <FaPhoneAlt className="me-2 text-primary" /> {seller_phone}
        </a>
      </>;
    }
  };

  const ContactSellerLoader = (props) => {
    return (
      <ContentLoader className="w-100" {...props}>
        <rect x="160" y="10" rx="3" ry="3" width="110" height="15" />
        <rect x="0" y="0" rx="3" ry="3" width="142" height="146" />
        <rect x="160" y="48" rx="3" ry="3" width="191" height="10" />
        <rect x="160" y="88" rx="3" ry="3" width="191" height="10" />
      </ContentLoader>
    );
  };

  const InstructionsLoader = (props) => {
    return (
      <ContentLoader className="w-100" height={300} {...props}>
        <rect x="70" y="20" rx="6" ry="6" width="300" height="15" />
        <circle cx="15" cy="28" r="15" />
        <rect x="70" y="73" rx="6" ry="6" width="420" height="15" />
        <circle cx="15" cy="81" r="15" />
        <rect x="70" y="126" rx="6" ry="6" width="300" height="15" />
        <circle cx="15" cy="134" r="15" />
        <rect x="70" y="179" rx="6" ry="6" width="444" height="15" />
        <circle cx="15" cy="187" r="15" />
        <rect x="70" y="232" rx="6" ry="6" width="300" height="15" />
        <circle cx="15" cy="240" r="15" />
      </ContentLoader>
    );
  };

  return (
    <Container fluid>
      <Row>
        <Col as="section" md={7} lg={8}>
          {isLoaded && (
            <Carousel showStatus={false} showIndicators={false}>
              {propertyInfo.images.map((imageSrc) => (
                <div key={imageSrc}>
                  <img src={imageSrc} height={612} />
                </div>
              ))}
            </Carousel>
          )}
          <section className="border border-1 rounded p-4 py-5 mt-4">
            <h2 className="fw-semibold fs-md text-capitalize mb-3 text-dark">Description</h2>
            <p className="mb-0 fs-md" style={{ color: "rgba(87, 87, 87, 1)", lineHeight: "28px" }}>
              Apt for sale in Georgia Ortachala, Tbilisi(next to the ministry of internal affairs) renovated and
              furnished This stunning penthouse apartment for sale of approximately 288 m is located on the 19th floor
              of the building New Amsterdam. The stunning apartment has a very large living room (approx. 120 mÂ²) with
              a terrace and a magnificent view. The luxurious kitchen has a second terrace. The master bedroom features
              a walk in closet and a bathroom with rain shower, whirlpool, sauna and toilet.
            </p>
          </section>
          <section className="border border-1 rounded p-4 py-5 mt-4">
            <Row>
              <Col md={4}>
                <h2 className="fw-semibold fs-md text-capitalize mb-4 text-dark">Details</h2>
                <p className="mb-2 fs-md text-capitalize" style={{ color: "rgba(87, 87, 87, 1)" }}>
                  360 m2
                </p>
                <p className="mb-2 fs-md text-capitalize">ground floor</p>
                <p className="mb-2 fs-md text-capitalize">living room</p>
              </Col>
              {isLoaded && propertyInfo.community_amentities && (
                <Col md={4}>
                  <h2 className="fw-semibold fs-md text-capitalize mb-3 text-dark">Community Amenities</h2>
                  {propertyInfo.community_amentities.map(({ property }) => (
                    <p key={property} className="mb-2 fs-md text-capitalize" style={{ color: "rgba(87, 87, 87, 1)" }}>
                      {property}
                    </p>
                  ))}
                  <p className="mb-0 fs-md"></p>
                </Col>
              )}
              {isLoaded && propertyInfo.amenity_properties && (
                <Col md={4}>
                  <h2 className="fw-semibold fs-md text-capitalize mb-3 text-dark">propirty Amenities</h2>
                  {propertyInfo.amenity_properties.map(({ property }) => (
                    <p key={property} className="mb-2 fs-md text-capitalize" style={{ color: "rgba(87, 87, 87, 1)" }}>
                      {property}
                    </p>
                  ))}
                  <p className="mb-0 fs-md"></p>
                </Col>
              )}
            </Row>
          </section>
        </Col>
        <Col as="aside" md={5} lg={4}>
          <section className="border border-2 rounded p-4">
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
                      {propertyInfo?.size} sqm
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
                <p>{propertyInfo?.date}</p>
              </Col>
            </Row>
          </section>
          <section className="border border-2 rounded p-4 mt-4">
            <h2 className="fw-semibold fs-md text-capitalize mb-3">Seller Description:</h2>
            {!isLoaded ? (
              <ContactSellerLoader />
            ) : (
              <>
                <div className="d-flex">
                  <img width={142} height={146} src={propertyInfo?.user?.image} className="rounded-3 me-4" />
                  <div className="d-flex align-items-start flex-column justify-content-between py-2">
                    <h3 className="text-primary fs-2xl fw-normal mb-0">{propertyInfo?.seller_name}</h3>
                    <p className="mb-0 fs-md text-secondaryText text-muted">commerical ID : {propertyInfo?.id}</p>
                    <p className="text-capitalize text-muted">Memeber since {propertyInfo?.user?.member_since}</p>
                  </div>
                </div>
                {renderContactSellerMethod()}
              </>
            )}
            {isLoaded && (
              <Link className="text-primary text-center fs-md d-block" to={`/reviews/${propertyInfo?.user?.id}`}>
                See Seller Reviews
              </Link>
            )}
          </section>
          <section className="border border-2 rounded p-4 mt-4">
            <h2 className="fw-semibold fs-md text-capitalize mb-3 text-dark">Your safety matters to us!</h2>
            {!isLoaded ? (
              <InstructionsLoader />
            ) : (
              <ul className="instructions-list">
                <li className="fs-md instructions-item">
                  <div className="custom-marker"></div>
                  <p className="mb-0">Only meet in public / crowded places for example metro stations and malls.</p>
                </li>
                <li className="fs-md instructions-item">
                  <div className="custom-marker"></div>
                  <p className="mb-0">Never go alone to meet a buyer / seller, always take someone with you.</p>
                </li>
                <li className="fs-md instructions-item">
                  <div className="custom-marker"></div>
                  <p className="mb-0">Check and inspect the product properly before purchasing it.</p>
                </li>
                <li className="fs-md instructions-item">
                  <div className="custom-marker"></div>
                  <p className="mb-0">Never pay anything in advance or transfer money before inspecting the product.</p>
                </li>
              </ul>
            )}
          </section>
          <section className="border border-2 rounded  mt-4 mb-5">
            {propertyAd && (
              <img src={propertyAd} alt="ad" title="ad" className="w-100" height={477} style={{ objectFit: "cover" }} />
            )}
            <div className="p-4">
              <Link to="/ad" className="btn btn-primary w-100 text-white fs-md">
                Learn More
              </Link>
            </div>
          </section>
        </Col>
      </Row>
      <Row></Row>
      <ToastContainer position="bottom-right" pauseOnFocusLoss pauseOnHover />
    </Container>
  );
};

export default PropertyDetails;
