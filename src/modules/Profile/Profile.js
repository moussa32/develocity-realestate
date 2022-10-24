import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import ContentLoader from "react-content-loader";
import { BsStar, BsStarFill } from "react-icons/bs";
import Rating from "react-rating";
import { authentcatedInstance } from "../../api/constants";

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
    </Container>
  );
};

export default Profile;
