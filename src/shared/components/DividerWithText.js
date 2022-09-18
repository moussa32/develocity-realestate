const DividerWithText = ({ text, fontSize, fontWeight, classNames, bgVariant }) => {
  return (
    <h2
      className={`text-capitalize text-center mb-4 heading ${
        bgVariant !== "primary" ? "blackHeading" : "primaryHeading"
      } ${fontSize ? fontSize : "fs-3xl"} fw-${
        fontWeight ? fontWeight : "normal"
      } position-relative d-flex align-items-center justify-content-center ${classNames}`}
    >
      <span>{text}</span>
    </h2>
  );
};

export default DividerWithText;
