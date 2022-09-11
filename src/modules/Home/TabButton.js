import { memo } from "react";
import Nav from "react-bootstrap/Nav";
import styles from "./DealsCarousel.module.css";

const TabButton = ({ activeTab, name }) => {
  return (
    <Nav.Item className={`border-bottom border-secondary border-4 ${activeTab === name && "border-primary"}`}>
      <Nav.Link
        as={"button"}
        eventKey={name}
        className={`text-muted text-capitalize fs-lg px-5 ${styles.dealsTabButton} ${
          activeTab === name && "bg-transparent"
        }`}
      >
        {name}
      </Nav.Link>
    </Nav.Item>
  );
};

export default memo(TabButton);
