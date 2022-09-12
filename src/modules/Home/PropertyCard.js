import { memo } from "react";
import { IoLocationSharp } from "react-icons/io5";
import { MdHomeWork } from "react-icons/md";
import { IoBedSharp } from "react-icons/io5";
import { BiArea } from "react-icons/bi";
import { GiBathtub } from "react-icons/gi";
import Badge from "react-bootstrap/Badge";
import styles from "./PropertyCard.module.css";
import { Link } from "react-router-dom";
import { RiKeyFill } from "react-icons/ri";

const PropertyCard = ({ info }) => {
  const {
    id,
    category,
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
  } = info;

  return (
    <div className={styles.card}>
      <img src={images[0]} className={styles.propertyImage} alt={title} title={title} />
      <div className={styles.cardBody}>
        <div className="d-flex justify-content-between align-items-center">
          <span className="text-capitalize text-primary fw-semibold">for {property}</span>
          {is_hot_deal === 1 && (
            <Badge
              bg="primary"
              className="fs-xs bg-opacity-15 text-primary fw-normal text-capitalize d-flex align-items-center justify-content-center"
              style={{ width: "86px", height: "30px" }}
            >
              hot deals
            </Badge>
          )}
        </div>
        <h2 className={`${styles.propertyTextColor} fs-md`}>{title}</h2>
        <div className={`d-flex ${styles.price} align-items-center`}>
          {property !== "offer" && (
            <span className={`${styles.prevPrice} fs-sm text-decoration-line-through`}>${price}</span>
          )}
          <span className={`${styles.currentPrice} text-primary fw-bold fs-sm`}>
            ${property === "offer" ? price : hot_deal_price}
          </span>
        </div>
        <div className={styles.details}>
          <ul className="list-unstyled">
            {location && (
              <li className={`"fw-xs" ${styles.propertyTextColor} fw-normal text-capitalize`}>
                <IoLocationSharp className={styles.icon} />
                location:
              </li>
            )}
            {type && (
              <li className={`"fw-xs" ${styles.propertyTextColor} fw-normal text-capitalize`}>
                <MdHomeWork className={styles.icon} />
                type:
              </li>
            )}
            {bedrooms && (
              <li className={`"fw-xs" ${styles.propertyTextColor} fw-normal text-capitalize`}>
                <IoBedSharp className={styles.icon} />
                bedrooms:
              </li>
            )}
            {floor && (
              <li className={`"fw-xs" ${styles.propertyTextColor} fw-normal text-capitalize`}>
                <BiArea className={styles.icon} />
                floor area:
              </li>
            )}
            {bathrooms && (
              <li className={`"fw-xs" ${styles.propertyTextColor} fw-normal text-capitalize`}>
                <GiBathtub className={styles.icon} />
                bathroom:
              </li>
            )}
            {id && (
              <li className={`"fw-xs" ${styles.propertyTextColor} fw-normal text-capitalize`}>
                <RiKeyFill className={styles.icon} />
                reference ID:
              </li>
            )}
          </ul>
          <ul className="list-unstyled">
            {location && <li className={`${styles.propertyTextColor} text-capitalize fs-xs text-end`}>{location}</li>}
            {type && <li className={`${styles.propertyTextColor} text-capitalize fs-xs text-end`}>{type}</li>}
            {bedrooms && <li className={`${styles.propertyTextColor} text-capitalize fs-xs text-end`}>{bedrooms}</li>}
            {floor && <li className={`${styles.propertyTextColor} text-capitalize fs-xs text-end`}>{floor}</li>}
            {bathrooms && <li className={`${styles.propertyTextColor} text-capitalize fs-xs text-end`}>{bathrooms}</li>}
            {id && <li className={`${styles.propertyTextColor} text-capitalize fs-xs text-end`}>{id}</li>}
          </ul>
        </div>
        <Link to={`/view/${id}`} className={`${styles.detailsBtn} text-decoration-none`}>
          view details
        </Link>
      </div>
    </div>
  );
};

export default memo(PropertyCard);
