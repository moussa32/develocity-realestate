import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeUser } from "../../../redux/features/UserSlice";
import { globalInstance } from "../../../api/constants";
import { FaPlus } from "react-icons/fa";
import { MdOutlineNotificationsNone, MdOutlineKeyboardArrowDown, MdOutlineSettings } from "react-icons/md";
import { RiLogoutBoxLine, RiAdvertisementLine } from "react-icons/ri";
import { BsChat } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { TbDiscount2 } from "react-icons/tb";
import { toggleNotificationsMenu } from "../../../redux/features/NotificationsSlice";

const UserActions = ({ userData }) => {
  const dispatch = useDispatch();
  const { username, image, id } = userData;

  const handleLogout = async () => {
    await globalInstance.post("auth/logout");
    dispatch(removeUser());
  };

  const toggleNotifications = () => dispatch(toggleNotificationsMenu());

  return (
    <div className="d-flex gap-3 align-items-center ms-4">
      <BsChat className="text-primary opacity-75" size={"2.2rem"} />
      <MdOutlineNotificationsNone
        className="text-primary opacity-75"
        size={"2.6rem"}
        onClick={toggleNotifications}
        role="button"
      />
      <Dropdown>
        <Dropdown.Toggle className="px-0 bg-transparent border-0" id="avatar-dropdow">
          <img className="rounded-circle" src={image} alt={username} title={username} width={47} height={44} />
          <MdOutlineKeyboardArrowDown className="fs-xl text-primary ms-1" />
        </Dropdown.Toggle>

        <Dropdown.Menu className="dropdown-menu-end py-0 customNavbarDropdown">
          <Dropdown.Item as={Button} className="d-flex py-2 bg-primary bg-opacity-5">
            <img className="rounded-circle" src={image} alt={username} title={username} width={47} height={44} />
            <div className="ms-3">
              <p className="mb-0 text-dark fs-xs">Hello, {username}</p>
              <Link className="fs-xs" to={`/profile/${id}`}>
                View your profile
              </Link>
            </div>
          </Dropdown.Item>
          <NavDropdown.Divider className="m-0" />
          <Dropdown.Item
            as={Link}
            to="/my-ads"
            className={`text-capitalize py-2 d-flex align-items-center dropdownItem`}
          >
            <RiAdvertisementLine className="me-2" size="1.2rem" />
            my ads
          </Dropdown.Item>
          <Dropdown.Item
            as={Link}
            to="/favourite"
            className={`text-capitalize py-2 d-flex align-items-center dropdownItem`}
          >
            <AiOutlineHeart className="me-2" size="1.2rem" />
            favourites
          </Dropdown.Item>
          <Dropdown.Item
            as={Link}
            to="/hot-deals"
            className={`text-capitalize py-2 d-flex align-items-center dropdownItem`}
          >
            <TbDiscount2 className="me-2" size="1.2rem" />
            hot deals
          </Dropdown.Item>
          <Dropdown.Item
            as={Link}
            to="/settings"
            className={`text-capitalize py-2 d-flex align-items-center dropdownItem`}
          >
            <MdOutlineSettings className="me-2" size="1.2rem" />
            settings
          </Dropdown.Item>
          <NavDropdown.Divider className="m-0" />
          <Dropdown.Item
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
