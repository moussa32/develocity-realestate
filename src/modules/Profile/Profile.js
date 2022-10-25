import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ContentLoader from "react-content-loader";
import { BsStar, BsStarFill } from "react-icons/bs";
import Rating from "react-rating";
import { authentcatedInstance } from "../../api/constants";
import PropertyCard from "../../shared/components/PropertyCard";
import ReviewPersonImage from "../../assets/person.jpg";
import ReviewPersonImage2 from "../../assets/reviewerImage.png";

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    authentcatedInstance
      .get("/user/39/profile")
      .then((res) => {
        const { data } = res.data;
        setProfile(data);
        setIsLoaded(true);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const ProfileLoader = (props) => (
    <ContentLoader
      speed={1}
      viewBox="0 0 400 560"
      {...props}
      width={400}
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      className="mx-auto d-block"
      style={{ zIndex: "5000" }}
    >
      <circle cx="200" cy="200" r="200" style={{ zIndex: "5000" }} />
      <rect x="100" y="440" rx="0" ry="0" width="200" height="25" style={{ zIndex: "5000" }} />
      <rect x="80" y="495" rx="0" ry="0" width="240" height="17" style={{ zIndex: "5000" }} />
    </ContentLoader>
  );

  return (
    <Container fluid className="mt-5">
      <section className="position-relative">
        <div className="userProfileBackground"></div>
        {isLoaded ? (
          <div className="userProfileMainInfo">
            <img
              src={profile?.user?.image}
              className="userProfileImage"
              alt="user background"
              title="user background"
            />

            <h1 className="text-dark text-capitalize fs-3xl my-4">{profile?.user?.username}</h1>
            <div className="userProfileRating">
              <Rating
                readonly={true}
                emptySymbol={<BsStar className="ratingStar" />}
                fullSymbol={<BsStarFill className="ratingStar" />}
                initialRating={profile?.reviews?.avg_rate}
              />
              <p className="text-dark fw-semibold fs-2xl mb-0 ms-4">
                {profile?.reviews?.avg_rate}
                <span className="ms-2" style={{ color: "rgba(109, 111, 115, 1)" }}>
                  ({profile?.reviews?.count} Reviews)
                </span>
              </p>
            </div>
          </div>
        ) : (
          <ProfileLoader />
        )}
      </section>
      <section className="userProfilePropertiesStats">
        {isLoaded &&
          profile.user_realstates_statistic.map(({ name, count }) => (
            <div key={`${name}${count}`} className="userProfilePropertyStatCard">
              <p className="text-dark fs-2xl fw-semibold mb-0">{count}</p>
              <p className="text-dark fs-2xl fw-semibold text-captialize mb-0">{name}</p>
            </div>
          ))}
      </section>
      <section>
        <h2 className="fs-2xl fw-semibold text-capitalize headingBorderLine py-4 ps-3 mb-4">Available Prperties</h2>
        <Row className="userProfileProperties">
          {isLoaded &&
            profile.realstate.map((propertyInfo) => (
              <Col sm={12} md={6} lg={4} key={`${propertyInfo.id}`} className="customCardCenter">
                <PropertyCard info={propertyInfo} />
              </Col>
            ))}
        </Row>
      </section>
      <Row style={{ rowGap: "1rem" }}>
        {isLoaded &&
          profile.reviews.reviews.map(({ username, id, image, date, reivew, rate }) => (
            <Col key={`${username}${id}`} md={6}>
              <div className="reviewCard">
                <div className="reviewHeader">
                  <img src={image} className="reviewerImage" alt={username} title={username} />
                  <div className="reviewUserInfo">
                    <h2 className="text-dark fs-md fw-semibold text-capitalize">{username}</h2>
                    <p className="fw-semibold fs-xs mb-0">{date}</p>
                    <Rating
                      readonly={true}
                      emptySymbol={<BsStar className="ratingStar" />}
                      fullSymbol={<BsStarFill className="ratingStar" />}
                      initialRating={rate}
                    />
                  </div>
                </div>
                <div className="reviewContent">{reivew}</div>
              </div>
            </Col>
          ))}
      </Row>
      <Form>
        <Form.Group as="section" className="my-4" controlId="reviewComment">
          <h2 className="headingBorderLine p-4">Add Review</h2>
          <h3 className="text-dark text-capitalize mt-5 fw-normal mb-3">add your own review</h3>
          <Form.Control className="customTextAreaInput" as="textarea" placeholder="Type Review..." rows={9} />
        </Form.Group>
        <section className="my-4">
          <h2 className="headingBorderLine text-capitalize p-4 mb-4">rate</h2>
          <div className="mx-auto">
            <Rating
              emptySymbol={<BsStar className="ratingStar" size={"3.5rem"} />}
              fullSymbol={<BsStarFill className="ratingStar" size={"3.5rem"} />}
              initialRating={0}
              stop={5}
            />
            <p className="text-primary fw-normal fs-sm text-capitalize mb-0 ms-3 mt-3">rate must be from 1 to 5</p>
          </div>
        </section>
        <Button variant="primary" className="submitReviewButton text-white mx-auto d-block fs-md">
          Add Review
        </Button>
      </Form>
    </Container>
  );
};

export default Profile;
