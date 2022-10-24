import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import styles from "./ThirdPartyButtons.module.scss";
import { useDispatch } from "react-redux";
import { setShowModal } from "../../redux/features/ModalSlice";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { globalInstance } from "../../api/constants";

const ThirdPartyButtons = () => {
  const dispatch = useDispatch();

  const handleOpenPhoneModal = () => {
    dispatch(setShowModal("phone"));
  };

  const responseFacebook = (response) => {
    const { name, email } = response;
    const userData = { username: name, email, provider: "facebook" };
    globalInstance
      .post("/auth/social_register", userData)
      .then((res) => {
        const { data: responseData } = res;

        if (responseData.code === 200) {
          dispatch(setUser(responseData.data.user));
          dispatch(setCloseModal());
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="d-flex justify-content-center align-items-center mx-auto gap-4 mt-4">
      <button className={`border border-primary bg-transparent rounded ${styles.thirdPartyButton}`}>
        <FcGoogle className={`${styles.thirdPartyIcon}`} />
      </button>
      <FacebookLogin
        appId="1523259471459515"
        callback={responseFacebook}
        render={(renderProps) => (
          <button
            className={`border border-primary bg-transparent rounded ${styles.thirdPartyButton}`}
            onClick={renderProps.onClick}
          >
            <FaFacebookF className={`${styles.thirdPartyIcon} ${styles.facebookIcon}`} />
          </button>
        )}
      />
      <button
        className={`border border-primary bg-transparent rounded ${styles.thirdPartyButton}`}
        onClick={handleOpenPhoneModal}
      >
        <BsTelephoneFill className={`${styles.thirdPartyIcon}`} />
      </button>
    </div>
  );
};

export default ThirdPartyButtons;
