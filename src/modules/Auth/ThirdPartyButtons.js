import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import styles from "./ThirdPartyButtons.module.scss";

const ThirdPartyButtons = () => {
  return (
    <div className="d-flex justify-content-center align-items-center mx-auto gap-4 mt-4">
      <button className={`border border-primary bg-transparent rounded ${styles.thirdPartyButton}`}>
        <FcGoogle className={`${styles.thirdPartyIcon}`} />
      </button>
      <button className={`border border-primary bg-transparent rounded ${styles.thirdPartyButton}`}>
        <FaFacebookF className={`${styles.thirdPartyIcon} ${styles.facebookIcon}`} />
      </button>
      <button className={`border border-primary bg-transparent rounded ${styles.thirdPartyButton}`}>
        <BsTelephoneFill className={`${styles.thirdPartyIcon}`} />
      </button>
    </div>
  );
};

export default ThirdPartyButtons;
