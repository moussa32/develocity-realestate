import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BsChat } from "react-icons/bs";
import { MdOutlineNotificationsNone, MdOutlineKeyboardArrowDown, MdOutlineSettings } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { TbDiscount2 } from "react-icons/tb";
import { RiLogoutBoxLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeUser } from "../../../redux/features/UserSlice";
import { globalInstance } from "../../../api/constants";
import { FaPlus } from "react-icons/fa";

const UserActions = ({ userData }) => {
  const dispatch = useDispatch();
  const { username, image } = userData;

  const handleLogout = async () => {
    const logoutRequest = await globalInstance.post("auth/logout");
    console.log(logoutRequest);
    dispatch(removeUser());
  };

  return (
    <div className="d-flex gap-2 align-items-center ms-4">
      <BsChat className="text-primary" size={"2.9rem"} />
      <MdOutlineNotificationsNone className="text-primary" size={"2.9rem"} />
      <Dropdown>
        <Dropdown.Toggle variant="success" id="avatar-dropdow">
          <img className="rounded-circle" src={image} alt={username} title={username} width={47} height={44} />
          <MdOutlineKeyboardArrowDown />
        </Dropdown.Toggle>

        <Dropdown.Menu className="dropdown-menu-end py-0">
          <Dropdown.Item as={Button} className="d-flex py-2 bg-primary bg-opacity-5">
            <img className="rounded-circle" src={image} alt={username} title={username} width={47} height={44} />
            <div className="ms-3">
              <p className="mb-0 text-dark" style={{ fontSize: "14px" }}>
                Hello, {username}
              </p>
              <Link className="" to="/profile" style={{ fontSize: "14px" }}>
                View and edit your profile
              </Link>
            </div>
          </Dropdown.Item>
          <NavDropdown.Divider className="m-0" />
          <Dropdown.Item href="#/action-2" className={`text-capitalize py-2 d-flex align-items-center dropdownItem`}>
            <AiOutlineHeart className="me-2" size="1.2rem" />
            favourites
          </Dropdown.Item>
          <Dropdown.Item href="#/action-3" className={`text-capitalize py-2 d-flex align-items-center dropdownItem`}>
            <TbDiscount2 className="me-2" size="1.2rem" />
            hot deals
          </Dropdown.Item>
          <Dropdown.Item href="#/action-3" className={`text-capitalize py-2 d-flex align-items-center dropdownItem`}>
            <MdOutlineSettings className="me-2" size="1.2rem" />
            settings
          </Dropdown.Item>
          <NavDropdown.Divider className="m-0" />
          <Dropdown.Item
            as={Button}
            onClick={handleLogout}
            className={`text-capitalize py-2 d-flex align-items-center dropdownItem`}
          >
            <RiLogoutBoxLine className="me-2" size="1.2rem" />
            logout
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Button
        as={Link}
        to="/sell"
        variant="primary"
        className={`sellBtn text-white fs-md text-uppercase d-flex align-items-center justify-content-center mx-auto fw-semibold`}
      >
        <FaPlus className="me-2" />
        sell
      </Button>
    </div>
  );
};

export default UserActions;
