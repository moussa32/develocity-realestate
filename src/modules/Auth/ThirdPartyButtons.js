import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import styles from "./ThirdPartyButtons.module.scss";
import { useDispatch } from "react-redux";
import { setCloseModal, setShowModal } from "../../redux/features/ModalSlice";
import { GoogleLogin } from "react-google-login";
import { globalInstance } from "../../api/constants";
import { setUser } from "../../redux/features/UserSlice";
import FacebookLogin from "@greatsumini/react-facebook-login";

const ThirdPartyButtons = () => {
  const dispatch = useDispatch();

  const handleOpenPhoneModal = () => {
    dispatch(setShowModal("phone"));
  };

  const loginWithFacebook = (response) => {
    const { name, email } = response;

    const userData = { username: name, email, provider: "facebook", image: response.picture.data.url };
    console.log(userData, response);

    globalInstance
      .post("/auth/social", userData)
      .then((res) => {
        const { data: responseData } = res;
        if (responseData.code === 200) {
          dispatch(setUser(responseData.data.user));
          dispatch(setCloseModal());
        }
      })
      .catch((error) => console.log(error));
  };

  const responseGoogle = (response) => {
    console.log(response);
  };

  return (
    <div className="d-flex justify-content-center align-items-center mx-auto gap-4 mt-4">
      <GoogleLogin
        clientId="102324541899-52jct2ir1v0c6rg9av45ua65lnighdbk.apps.googleusercontent.com"
        render={(renderProps) => (
          <button
            className={`border border-primary bg-transparent rounded ${styles.thirdPartyButton}`}
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
          >
            <FcGoogle className={`${styles.thirdPartyIcon}`} />
          </button>
        )}
        autoLoad={false}
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
        redirectUri="http://localhost:3000/"
      />
      <FacebookLogin
        appId="1523259471459515"
        onFail={(error) => {
          console.log("Login Failed!", error);
        }}
        onProfileSuccess={(response) => loginWithFacebook(response)}
        render={({ onClick }) => (
          <button
            className={`border border-primary bg-transparent rounded ${styles.thirdPartyButton}`}
            onClick={onClick}
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
