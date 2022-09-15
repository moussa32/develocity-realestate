import logo from "../../assets/images/logo.png";

const ModalHeader = ({ title, subTitle, hints, text }) => {
  return (
    <div className="text-center text-capitalize">
      <div className="mb-4">
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
