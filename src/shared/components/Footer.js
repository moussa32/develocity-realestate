import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFooter } from "../../redux/features/FooterSlice";
import { Link } from "react-router-dom";
import { BsFacebook, BsTwitter, BsYoutube, BsInstagram } from "react-icons/bs";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { SiLinkedin, SiAirbnb } from "react-icons/si";

const Footer = () => {
  const footerContent = useSelector((state) => state.footer.data?.data);
  const footerStatus = useSelector((state) => state.footer.status);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!footerContent) {
      dispatch(fetchFooter());
    }
  }, [dispatch]);

  const handleSocialMediaIcon = (name) => {
    switch (name) {
      case "facebook":
        return <BsFacebook />;
      case "twitter":
        return <BsTwitter />;
      case "linkedin":
        return <SiLinkedin />;
      case "youtube":
        return <BsYoutube />;
      case "instagram":
        return <BsInstagram />;
      case "airbnb":
        return <SiAirbnb />;
    }
  };

  return (
    <>
      {footerStatus === "success" && (
        <footer className="text-white footer-style">
          <Container>
            <Row className="main-footer">
              <Col>
                <img
                  src={footerContent.website_logo}
                  alt={footerContent.website_name}
                  title={footerContent.website_name}
                />
                <h2 className="mt-3">{footerContent.website_name}</h2>
                <p className="pt-4 josefin-text">Our goal is at the heart of all that we do.</p>
                <div className="d-flex gap-4">
                  {footerContent.social_media.map(({ url, name }) => (
                    <a className="text-white fs-sm" href={url} key={`${name}-socialmediaItem`}>
                      {handleSocialMediaIcon(name)}
                    </a>
                  ))}
                </div>
              </Col>
              <Col md={2}>
                <h3 className="text-capitalize">page</h3>
                <ul className="list-unstyled">
                  <li className="mt-3 mb-4">
                    <Link
                      className="text-capitalize josefin-text text-white text-decoration-none fs-sm footer-list-item"
                      to="/"
                    >
                      Homepage
                    </Link>
                  </li>
                  <li className="mt-3 mb-4">
                    <Link
                      className="text-capitalize josefin-text text-white text-decoration-none fs-sm footer-list-item"
                      to="/"
                    >
                      Features
                    </Link>
                  </li>
                  <li className="mt-3 mb-4">
                    <Link
                      className="text-capitalize josefin-text text-white text-decoration-none fs-sm footer-list-item"
                      to="/"
                    >
                      About Us
                    </Link>
                  </li>
                  <li className="mt-3 mb-4">
                    <Link
                      className="text-capitalize josefin-text text-white text-decoration-none fs-sm footer-list-item"
                      to="/"
                    >
                      Agents
                    </Link>
                  </li>
                </ul>
              </Col>
              <Col md={2}>
                <h3 className="text-capitalize">support</h3>
                <ul className="list-unstyled">
                  <li className="mt-3 mb-4">
                    <Link
                      className="text-capitalize josefin-text text-white text-decoration-none fs-sm footer-list-item"
                      to="/"
                    >
                      FAQ,s
                    </Link>
                  </li>
                  <li className="mt-3 mb-4">
                    <Link
                      className="text-capitalize josefin-text text-white text-decoration-none fs-sm footer-list-item"
                      to="/"
                    >
                      support center
                    </Link>
                  </li>
                  <li className="mt-3 mb-4">
                    <Link
                      className="text-capitalize josefin-text text-white text-decoration-none fs-sm footer-list-item"
                      to="/"
                    >
                      security
                    </Link>
                  </li>
                </ul>
              </Col>
              <Col md={4}>
                <h3 className="text-capitalize">contact us</h3>
                <ul className="list-unstyled">
                  <li className="mt-3 mb-4">
                    <a
                      href={`tel:${footerContent.phone}`}
                      className="text-capitalize josefin-text text-white text-decoration-none fs-sm footer-list-item"
                    >
                      {footerContent.phone}
                    </a>
                  </li>
                  <li className="mt-3 mb-4">
                    <a
                      href={`mailto:${footerContent.email}`}
                      className="text-capitalize josefin-text text-white text-decoration-none fs-sm footer-list-item"
                    >
                      {footerContent.email}
                    </a>
                  </li>
                  <li className="mt-3 mb-4">
                    <p className="text-capitalize josefin-text text-white text-decoration-none fs-sm mb-0 footer-list-item">
                      {footerContent.address}
                    </p>
                  </li>
                </ul>
              </Col>
            </Row>
            <Row className="secondary-footer">
              <Col md={12}>
                <p className="mb-0 text-center fs-xs josefin-text">@2022 All Right Reserved</p>
              </Col>
            </Row>
          </Container>
        </footer>
      )}
    </>
  );
};

export default Footer;
