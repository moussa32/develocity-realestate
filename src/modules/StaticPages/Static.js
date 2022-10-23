import { useEffect, useState } from "react";
import { globalInstance } from "../../api/constants";
import parse from "html-react-parser";
import Container from "react-bootstrap/Container";
import ContentLoader from "react-content-loader";

const Static = () => {
  const [page, setPage] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    globalInstance
      .get("/pages")
      .then((res) => {
        setIsLoaded(true);
        const { data } = res.data;
        const { pages } = data;
        console.log(pages);
        setPage(pages);
      })
      .catch((error) => {
        setIsLoaded(true);
        console.log(error);
      });
  }, []);

  const PageLoader = (props) => (
    <ContentLoader speed={1} viewBox="0 0 340 70" {...props}>
      <rect x="9" y="4" rx="0" ry="0" width="320" height="22" />
      <rect x="18" y="14" rx="0" ry="0" width="303" height="6" />
      <rect x="11" y="33" rx="0" ry="0" width="108" height="13" />
      <rect x="129" y="33" rx="0" ry="0" width="60" height="13" />
      <rect x="196" y="33" rx="0" ry="0" width="60" height="13" />
    </ContentLoader>
  );

  return (
    <Container className="staticPageWrapper">
      {isLoaded ? (
        parse(page.privacy)
      ) : (
        <>
          <PageLoader />
          <PageLoader />
          <PageLoader />
        </>
      )}
    </Container>
  );
};

export default Static;
