import { memo } from "react";
import { IoLocationSharp } from "react-icons/io5";
import { MdHomeWork } from "react-icons/md";
import { IoBedSharp } from "react-icons/io5";
import { BiArea } from "react-icons/bi";
import { GiBathtub } from "react-icons/gi";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { RiKeyFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { setShowModal } from "../../redux/features/ModalSlice";

const PropertyCard = ({ info }) => {
  const {
    id,
    property,
    is_hot_deal,
    title,
    price,
    location,
    type,
    bedrooms,
    floor,
    bathrooms,
    images,
    hot_deal_price,
    Icon,
    iconHandler,
    iconClassNames,
  } = info;
  const isUserLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const dispatch = useDispatch();

  return (
    <div className="custom-card">
      <img src={images[0]} className="propertyImage" alt={title} title={title} />
      <div className="cardBody">
        <div className="d-flex justify-content-between align-items-center">
          <span className="text-capitalize text-primary fw-semibold">for {property}</span>
          {is_hot_deal === 1 && (
            <Badge
              bg="primary"
              className="fs-xs bg-opacity-15 text-primary fw-normal text-capitalize d-flex align-items-center justify-content-center propertyBade"
              style={{ width: "86px", height: "30px", marginLeft: "auto", marginRight: "20px" }}
            >
              hot deals
            </Badge>
          )}
          {Icon && <Icon className={iconClassNames} onClick={() => iconHandler && iconHandler()} />}
        </div>
        <h2 className={`propertyTextColor fs-md`}>{title}</h2>
        <div className={`d-flex price align-items-center`}>
          {property !== "offer" && <span className={`prevPrice fs-sm text-decoration-line-through`}>${price}</span>}
          <span className={`currentPrice text-primary fw-bold fs-sm`}>
            ${property === "offer" ? price : hot_deal_price}
          </span>
        </div>
        <div className="details">
          <ul className="list-unstyled">
            {location && (
              <li className={`"fw-xs propertyTextColor fw-normal text-capitalize`}>
                <IoLocationSharp className="icon" />
                location:
              </li>
            )}
            {type && (
              <li className={`"fw-xs propertyTextColor fw-normal text-capitalize`}>
                <MdHomeWork className="icon" />
                type:
              </li>
            )}
            {bedrooms && (
              <li className={`"fw-xs propertyTextColor fw-normal text-capitalize`}>
                <IoBedSharp className="icon" />
                bedrooms:
              </li>
            )}
            {floor && (
              <li className={`"fw-xs" propertyTextColor fw-normal text-capitalize`}>
                <BiArea className="icon" />
                floor area:
              </li>
            )}
            {bathrooms && (
              <li className={`"fw-xs" propertyTextColor fw-normal text-capitalize`}>
                <GiBathtub className="icon" />
                bathroom:
              </li>
            )}
            {id && (
              <li className={`"fw-xs" propertyTextColor fw-normal text-capitalize`}>
                <RiKeyFill className="icon" />
                reference ID:
              </li>
            )}
          </ul>
          <ul className="list-unstyled">
            {location && <li className="propertyTextColor text-capitalize fs-xs text-end">{location}</li>}
            {type && <li className="propertyTextColor text-capitalize fs-xs text-end">{type}</li>}
            {bedrooms && <li className="propertyTextColor text-capitalize fs-xs text-end">{bedrooms}</li>}
            {floor && <li className="propertyTextColor text-capitalize fs-xs text-end">{floor}</li>}
            {bathrooms && <li className="propertyTextColor text-capitalize fs-xs text-end">{bathrooms}</li>}
            {id && <li className="propertyTextColor text-capitalize fs-xs text-end">{id}</li>}
          </ul>
        </div>
        <Button
          as={isUserLoggedIn ? Link : null}
          to={`/view/${id}`}
          className="detailsBtn text-decoration-none text-white bg-primary fw-normal"
          onClick={() => !isUserLoggedIn && dispatch(setShowModal("login"))}
        >
          view details
        </Button>
      </div>
    </div>
  );
};

export default memo(PropertyCard);
