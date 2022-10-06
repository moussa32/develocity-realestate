import { memo } from "react";
import Nav from "react-bootstrap/Nav";

const TabButton = ({ activeTab, name, customEventKey }) => {
  return (
    <Nav.Item
      className={`border-bottom border-secondary border-4 flex-fill text-center justify-content-center d-flex ${
        activeTab === (customEventKey || name) ? "border-primary" : null
      }`}
    >
      <Nav.Link
        as={"button"}
        eventKey={customEventKey ? customEventKey : name}
        className={`text-muted text-capitalize fs-lg px-5 dealsTabButton ${
          activeTab === (customEventKey || name) && "bg-transparent"
        }`}
      >
        {name}
      </Nav.Link>
    </Nav.Item>
  );
};

export default memo(TabButton);
