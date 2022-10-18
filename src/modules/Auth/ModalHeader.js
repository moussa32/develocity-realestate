import logo from "../../assets/images/logo.png";
import { RiCloseFill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { setCloseModal } from "../../redux/features/ModalSlice";

const ModalHeader = ({ title, subTitle, hints, text }) => {
  const dispatch = useDispatch();
  return (
    <div className="text-center text-capitalize">
      <div className="mb-4 position-relative">
        <button
          className="position-absolute border border-primary border-1 bg-white text-primary rounded-2 p-2 start-0"
          onClick={() => dispatch(setCloseModal())}
        >
          <RiCloseFill className="fw-bold fs-md" />
        </button>
        <img width={157} height={148} src={logo} alt="logo" />
      </div>
      {title && <h2 className="fw-semibold fs-md">{title}</h2>}
      {hints && <>{hints}</>}
      {subTitle && <h2 className="text-primary">{subTitle}</h2>}
      {text && <>{text}</>}
    </div>
  );
};

export default ModalHeader;
