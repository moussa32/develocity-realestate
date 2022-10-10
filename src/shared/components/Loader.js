import Logo from "../../assets/images/logo.png";

const Loader = () => {
  return (
    <div className="loaderContainer d-flex align-items-center justify-content-center flex-column">
      <img className="loaderImage" src={Logo} title="Home" alt="Home" />
      <h1 className="loaderText mt-5">Loadding...</h1>
    </div>
  );
};

export default Loader;
