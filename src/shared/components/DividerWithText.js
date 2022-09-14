import styles from "./DividerWithText.module.scss";

const DividerWithText = ({ text, fontSize, fontWeight, classNames, bgVariant }) => {
  return (
    <h2
      className={`text-capitalize text-center mb-4 ${styles.heading} ${
        bgVariant !== "primary" ? styles.blackHeading : styles.primaryHeading
      } ${fontSize ? fontSize : "fs-3xl"} fw-${
        fontWeight ? fontWeight : "normal"
      } position-relative d-flex align-items-center justify-content-center ${classNames}`}
    >
      <span>{text}</span>
    </h2>
  );
};

export default DividerWithText;
