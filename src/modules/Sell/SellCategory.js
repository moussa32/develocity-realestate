import Container from "react-bootstrap/Container";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { homeSchema } from "../../shared/schemas/PostRealState";
import { Formik } from "formik";
import UseAnimations from "react-useanimations";
import infinity from "react-useanimations/lib/infinity";
import usePlacesAutocomplete, { getGeocode, getLatLng } from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";
import { useState } from "react";
import { TbCameraPlus } from "react-icons/tb";
import { authentcatedInstance } from "../../api/constants";

const SellCategory = () => {
  const { categoryName } = useParams();
  const currentSellCategory = useSelector((state) =>
    state.sell.data.data.categories.find((category) => category.name === categoryName)
  );
  const user = useSelector((state) => state.user);
  const [location, setLocation] = useState({
    lat: "",
    lng: "",
  });
  const [realstateImages, setRealstateImages] = useState([]);

  const {
    ready,
    value: selectedLocation,
    suggestions: { status, data },
    setValue: setSelectedLocation,
    clearSuggestions,
  } = usePlacesAutocomplete({
    debounce: 300,
  });

  const ref = useOnclickOutside(() => {
    // When user clicks outside of the component, we can dismiss
    // the searched suggestions by calling this method
    clearSuggestions();
  });

  const handleAddLocation = (e) => {
    // Update the keyword of the input element
    setSelectedLocation(e.target.value);
  };

  const handleSelect =
    ({ description }, setFieldValue) =>
    async () => {
      // When user selects a place, we can replace the keyword without request data from API
      // by setting the second parameter to "false"
      setSelectedLocation(description, false);
      setFieldValue("location", description);
      clearSuggestions();

      // Get latitude and longitude via utility functions
      await getGeocode({ address: description }).then((results) => {
        const { lat, lng } = getLatLng(results[0]);

        setLocation({ lat, lng });
      });
    };

  const renderSuggestions = (setFieldValue) =>
    data.map((suggestion) => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
      } = suggestion;

      return (
        <li key={place_id} onClick={handleSelect(suggestion, setFieldValue)}>
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </li>
      );
    });

  const handleImage = (indexImage, event) => {
    const realstateImagesClone = [...realstateImages];
    realstateImagesClone[indexImage] = event.target.files[0];

    setRealstateImages(realstateImagesClone);
  };

  const handleSubmitRealState = async (values, methods) => {
    const { setSubmitting } = methods;

    await authentcatedInstance
      .post("realstates", {
        ...values,
        ...location,
        images: realstateImages,
        category_id: currentSellCategory.id,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => console.log(error));
    setSubmitting(false);
  };

  return (
    <Container className="my-5">
      <Breadcrumb>
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/sell" }}>
          Sell
        </Breadcrumb.Item>
        <Breadcrumb.Item active>{categoryName}</Breadcrumb.Item>
      </Breadcrumb>
      <h1 className="fs-2xl headingBorderLine p-3">include some details</h1>
      <Formik
        validationSchema={homeSchema}
        initialValues={{
          title: undefined,
          property: undefined,
          payment_method: undefined,
          bedrooms: undefined,
          bathrooms: undefined,
          size: undefined,
          floor: undefined,
          furnished: undefined,
          condition: undefined,
          desc: undefined,
          location: undefined,
          seller_name: undefined,
          seller_phone: undefined,
          contact_method: undefined,
          price: undefined,
        }}
        onSubmit={handleSubmitRealState}
        validateOnChange={true}
        validateOnBlur={false}
      >
        {({ handleSubmit, handleChange, handleBlur, values, errors, isSubmitting, setFieldValue, touched }) => (
          <Form noValidate onSubmit={handleSubmit} className="mt-5">
            <Form.Label className="text-capitalize fs-md text-dark">Property</Form.Label>
            <Form.Group className="mb-4 d-flex flex-row gap-4">
              <Form.Check
                isInvalid={touched.property && !!errors.property}
                onChange={handleChange}
                disabled={isSubmitting}
                type="radio"
                name="property"
                className={`fs-md text-dark customButtonWrapper ${
                  values.property === "rent" ? "customButtonWrapperSelected" : ""
                } ${touched.property && errors.property && "invalidButtonWrapper"}`}
                label="Rent"
                value="rent"
                id="rent"
              />
              <Form.Check
                isInvalid={touched.property && !!errors.property}
                onChange={(event) => {
                  handleChange(event);
                  setFieldValue("rental_duration", null);
                }}
                disabled={isSubmitting}
                type="radio"
                name="property"
                className={`fs-md text-dark customButtonWrapper ${
                  values.property === "sell" ? "customButtonWrapperSelected" : ""
                } ${touched.property && errors.property && "invalidButtonWrapper"}`}
                label="Sell"
                value="sell"
                id="sell"
              />
            </Form.Group>
            {touched.property && errors.property && (
              <Form.Control.Feedback type="invalid" className="d-block mt-0">
                {errors.property}
              </Form.Control.Feedback>
            )}
            {values.property === "rent" && (
              <>
                <Form.Label className="text-capitalize fs-md text-dark mt-4">Rental duration</Form.Label>
                <Form.Group className="mb-4 d-flex flex-row gap-4 flex-wrap">
                  <Form.Check
                    isInvalid={touched.rental_duration && !!errors.rental_duration}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    type="radio"
                    name="rental_duration"
                    className={`fs-md text-dark customButtonWrapper ${
                      values.rental_duration === "daily" ? "customButtonWrapperSelected" : ""
                    } ${touched.rental_duration && errors.rental_duration && "invalidButtonWrapper"}`}
                    label="Daily"
                    value="daily"
                    id="daily"
                  />
                  <Form.Check
                    isInvalid={touched.rental_duration && !!errors.rental_duration}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    type="radio"
                    name="rental_duration"
                    className={`fs-md text-dark customButtonWrapper ${
                      values.rental_duration === "monthly" ? "customButtonWrapperSelected" : ""
                    } ${touched.rental_duration && errors.rental_duration && "invalidButtonWrapper"}`}
                    label="Monthly"
                    value="monthly"
                    id="monthly"
                  />
                  <Form.Check
                    isInvalid={touched.rental_duration && !!errors.rental_duration}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    type="radio"
                    name="rental_duration"
                    className={`fs-md text-dark customButtonWrapper ${
                      values.rental_duration === "yearly" ? "customButtonWrapperSelected" : ""
                    } ${touched.rental_duration && errors.rental_duration && "invalidButtonWrapper"}`}
                    label="Yearly"
                    value="yearly"
                    id="yearly"
                  />
                </Form.Group>
              </>
            )}
            <Form.Group className="my-5">
              <Form.Label className="text-capitalize fs-md text-dark">add title</Form.Label>
              <Form.Control
                placeholder="type title"
                onChange={handleChange}
                name="title"
                onBlur={handleBlur}
                value={values.title}
                aria-label="title"
                type="text"
                className={`${
                  touched.title && !!errors.title ? "border-danger" : "border-secondary"
                } bg-transparent border-1 shadow-none fs-sm postRealStateTextInput`}
                aria-describedby="email-input"
                isInvalid={touched.title && !!errors.title}
                disabled={isSubmitting}
              />
              {touched.title && errors.title && (
                <Form.Control.Feedback type="invalid">{errors.title}</Form.Control.Feedback>
              )}
            </Form.Group>
            <Form.Label className="text-capitalize fs-md text-dark">Payment method</Form.Label>
            <Form.Group className="mb-5 d-flex flex-row gap-4 flex-wrap">
              <Form.Check
                isInvalid={touched.payment_method && !!errors.payment_method}
                onChange={handleChange}
                disabled={isSubmitting}
                type="radio"
                name="payment_method"
                className={`fs-md text-dark customButtonWrapper ${
                  values.payment_method === "cash" ? "customButtonWrapperSelected" : ""
                } ${touched.payment_method && errors.payment_method && "invalidButtonWrapper"}`}
                label="Cash"
                value="cash"
                id="cash"
              />
              <Form.Check
                isInvalid={touched.payment_method && !!errors.payment_method}
                onChange={handleChange}
                disabled={isSubmitting}
                type="radio"
                name="payment_method"
                className={`fs-md text-dark customButtonWrapper ${
                  values.payment_method === "cheque" ? "customButtonWrapperSelected" : ""
                } ${touched.payment_method && errors.payment_method && "invalidButtonWrapper"}`}
                label="Cheque"
                value="cheque"
                id="cheque"
              />
              <Form.Check
                isInvalid={touched.payment_method && !!errors.payment_method}
                onChange={handleChange}
                disabled={isSubmitting}
                type="radio"
                name="payment_method"
                className={`fs-md text-dark customButtonWrapper ${
                  values.payment_method === "crypto" ? "customButtonWrapperSelected" : ""
                } ${touched.payment_method && errors.payment_method && "invalidButtonWrapper"}`}
                label="Crypto Currency"
                value="crypto"
                id="crypto"
              />
            </Form.Group>
            <Row>
              {currentSellCategory.options.includes("bedrooms") && (
                <Col md={6} className="mb-5">
                  <Form.Group>
                    <Form.Label className="fs-md text-capitalize">bedrooms</Form.Label>
                    <Form.Control
                      placeholder={`Type Number of bedrooms`}
                      onChange={handleChange}
                      name="bedrooms"
                      onBlur={handleBlur}
                      value={values.bedrooms}
                      aria-label="bedrooms"
                      type="text"
                      className={`${
                        !!errors.bedrooms ? "border-danger" : "border-secondary"
                      } bg-transparent border-1 shadow-none fs-sm postRealStateTextInput`}
                      aria-describedby="email-input"
                      isInvalid={!!errors.bedrooms}
                      disabled={isSubmitting}
                    />
                    {errors.bedrooms && <Form.Control.Feedback type="invalid">{errors.bedrooms}</Form.Control.Feedback>}
                  </Form.Group>
                </Col>
              )}
              {currentSellCategory.options.includes("bathrooms") && (
                <Col md={6} className="mb-5">
                  <Form.Group>
                    <Form.Label className="fs-md text-capitalize">bathrooms</Form.Label>
                    <Form.Control
                      placeholder={`Type Number of bathrooms`}
                      onChange={handleChange}
                      name="bathrooms"
                      onBlur={handleBlur}
                      value={values.bathrooms}
                      aria-label="bathrooms"
                      type="text"
                      className={`${
                        !!errors.bathrooms ? "border-danger" : "border-secondary"
                      } bg-transparent border-1 shadow-none fs-sm postRealStateTextInput`}
                      aria-describedby="email-input"
                      isInvalid={!!errors.bathrooms}
                      disabled={isSubmitting}
                    />
                    {errors.bathrooms && (
                      <Form.Control.Feedback type="invalid">{errors.bathrooms}</Form.Control.Feedback>
                    )}
                  </Form.Group>
                </Col>
              )}
              <Col className="mb-5">
                <Form.Group>
                  <Form.Label className="fs-md text-capitalize">
                    size (M<sup>2</sup>)
                  </Form.Label>
                  <Form.Control
                    placeholder={`Type Number of size`}
                    onChange={handleChange}
                    name="size"
                    onBlur={handleBlur}
                    value={values.size}
                    aria-label="size"
                    type="text"
                    className={`${
                      !!errors.size ? "border-danger" : "border-secondary"
                    } bg-transparent border-1 shadow-none fs-sm postRealStateTextInput`}
                    aria-describedby="email-input"
                    isInvalid={!!errors.size}
                    disabled={isSubmitting}
                  />
                  {errors.size && <Form.Control.Feedback type="invalid">{errors.size}</Form.Control.Feedback>}
                </Form.Group>
              </Col>
              {currentSellCategory.options.includes("floor") && (
                <Col md={6} className="mb-5">
                  <Form.Group>
                    <Form.Label className="fs-md text-capitalize">floor</Form.Label>
                    <Form.Control
                      placeholder={`Type Number of floor`}
                      onChange={handleChange}
                      name="floor"
                      onBlur={handleBlur}
                      value={values.floor}
                      aria-label="floor"
                      type="text"
                      className={`${
                        !!errors.floor ? "border-danger" : "border-secondary"
                      } bg-transparent border-1 shadow-none fs-sm postRealStateTextInput`}
                      aria-describedby="email-input"
                      isInvalid={!!errors.floor}
                      disabled={isSubmitting}
                    />
                    {errors.floor && <Form.Control.Feedback type="invalid">{errors.floor}</Form.Control.Feedback>}
                  </Form.Group>
                </Col>
              )}
              {currentSellCategory.options.includes("furnished") && (
                <>
                  <Form.Label className="fs-md text-capitalize flex-fill w-100">furnished</Form.Label>
                  <Form.Group className="mb-4 d-flex flex-row gap-4">
                    <Form.Check
                      isInvalid={touched.furnished && !!errors.furnished}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      type="radio"
                      name="furnished"
                      className={`fs-md text-dark customButtonWrapper ${
                        values.furnished === "1" ? "customButtonWrapperSelected" : ""
                      } ${touched.furnished && errors.furnished && "invalidButtonWrapper"}`}
                      label="Yes"
                      value="1"
                      id="yes"
                    />
                    <Form.Check
                      isInvalid={touched.furnished && !!errors.furnished}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      type="radio"
                      name="furnished"
                      className={`fs-md text-dark customButtonWrapper ${
                        values.furnished === "0" ? "customButtonWrapperSelected" : ""
                      } ${touched.furnished && errors.furnished && "invalidButtonWrapper"}`}
                      label="No"
                      value="0"
                      id="no"
                    />
                  </Form.Group>
                </>
              )}
              {currentSellCategory.options.includes("condition") && (
                <>
                  <Form.Label className="fs-md text-capitalize flex-fill w-100">condition</Form.Label>
                  <Form.Group className="mb-4 d-flex flex-row gap-4 flex-wrap">
                    <Form.Check
                      isInvalid={touched.condition && !!errors.condition}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      type="radio"
                      name="condition"
                      className={`fs-md text-dark customButtonWrapper ${
                        values.condition === "ready" ? "customButtonWrapperSelected" : ""
                      } ${touched.condition && errors.condition && "invalidButtonWrapper"}`}
                      label="ready"
                      value="ready"
                      id="ready"
                    />
                    <Form.Check
                      isInvalid={touched.condition && !!errors.condition}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      type="radio"
                      name="condition"
                      className={`fs-md text-dark customButtonWrapper ${
                        values.condition === "under_construction" ? "customButtonWrapperSelected" : ""
                      } ${touched.condition && errors.condition && "invalidButtonWrapper"}`}
                      label="Under Construction"
                      value="under_construction"
                      id="under_construction"
                    />
                  </Form.Group>
                </>
              )}
              {currentSellCategory.property_amentities && (
                <Form.Group className="customMuiltSelectWrapper" controlId="property_amentities">
                  <Form.Label className="fs-2xl headingBorderLine p-3">Property Amentities</Form.Label>
                  {currentSellCategory.property_amentities.map(({ id, property }) => (
                    <Form.Check
                      key={`${id + property}`}
                      disabled={false}
                      className="fs-md text-dark customMuiltSelectInput"
                      type="checkbox"
                      name="property_amentities"
                      label={property}
                      value={id}
                      onChange={handleChange}
                      id={property}
                      isInvalid={!!errors.property_amentities}
                    />
                  ))}
                </Form.Group>
              )}
              {currentSellCategory.community_amentities && (
                <Form.Group className="customMuiltSelectWrapper" controlId="community_amentities">
                  <Form.Label className="fs-2xl headingBorderLine p-3">Community Amentities</Form.Label>
                  {currentSellCategory.community_amentities.map(({ id, property }) => (
                    <Form.Check
                      key={`${id + property}`}
                      disabled={false}
                      className="fs-md text-dark customMuiltSelectInput"
                      type="checkbox"
                      name="community_amentities"
                      label={property}
                      value={id}
                      onChange={handleChange}
                      id={property}
                      isInvalid={!!errors.community_amentities}
                    />
                  ))}
                </Form.Group>
              )}
              <Form.Group className="mb-3" controlId="propertyDescription">
                <Form.Label className="text-capitalize fs-md text-dark fw-normal">Description</Form.Label>
                <Form.Control
                  isInvalid={touched.desc && !!errors.desc}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  as="textarea"
                  className="fs-md px-4 py-3"
                  name="desc"
                  placeholder="Type Description"
                  rows={6}
                />
                <small className="text-primary fw-normal fs-sm mt-2 d-block">
                  Include condition, features and reason for selling
                </small>
              </Form.Group>
              <Form.Group className="mb-3" controlId="propertyPrice">
                <Form.Label className="text-capitalize fs-md text-dark fw-normal">price</Form.Label>

                <InputGroup className="mb-3">
                  <InputGroup.Text className="text-primary text-capitalize bg-transparent customGroupInputText">
                    USD
                  </InputGroup.Text>
                  <Form.Control
                    placeholder="Type Price"
                    aria-label="Type Price"
                    className="postRealStateTextInput"
                    name="price"
                    isInvalid={touched.price && !!errors.price}
                    onChange={handleChange}
                    disabled={isSubmitting}
                  />
                </InputGroup>
              </Form.Group>
              <Form.Group className="mb-5" ref={ref} controlId="location">
                <Form.Label className="text-capitalize fs-md text-dark">add location</Form.Label>
                <Form.Control
                  placeholder="type location"
                  name="location"
                  onBlur={handleBlur}
                  value={selectedLocation}
                  onChange={handleAddLocation}
                  type="text"
                  className={`${
                    !!errors.location ? "border-danger" : "border-secondary"
                  } bg-transparent border-1 shadow-none fs-sm postRealStateTextInput`}
                  aria-describedby="location-input"
                  disabled={!ready}
                  isInvalid={!!errors.location}
                />
                {errors.location && <Form.Control.Feedback type="invalid">{errors.location}</Form.Control.Feedback>}
                {status === "OK" && <ul className="list-unstyled">{renderSuggestions(setFieldValue)}</ul>}
              </Form.Group>
              <div className="mb-5 uploadRealStateImageSection">
                <Form.Label className="fs-2xl headingBorderLine p-3 text-capitalize">upload up to 15 photos</Form.Label>
                {Array.from(Array(16).keys()).map((item, index) => (
                  <div
                    className={`uploadRealStateImageWrapper ${index === 0 && "featuredUploadRealStateImageWrapper"}`}
                    key={`realstateImage${index}`}
                  >
                    {realstateImages[index] && (
                      <img
                        className="w-100 h-100 position-absolute top-0"
                        src={URL.createObjectURL(realstateImages[index])}
                        style={{ objectFit: "cover" }}
                      />
                    )}
                    <input type="file" onChange={(event) => handleImage(index, event)} />
                    <div className="uploadRealStateImageText">
                      <TbCameraPlus />
                      {index === 0 && <label className="text-capitalize fs-2xl">choose your cover photo</label>}
                    </div>
                  </div>
                ))}
              </div>
              <Form.Group>
                <Form.Label className="fs-2xl headingBorderLine p-3 text-capitalize">your deatails</Form.Label>
                <div className="seller-info">
                  <img src={user.image} alt={user.username} title={user.username} width={126} height={126} />
                  <Row className="seller-inputs">
                    <Form.Label className="fs-md p-1 ps-0 text-capitalize">Name</Form.Label>
                    <Form.Control
                      placeholder="Type Your Name"
                      onChange={handleChange}
                      name="seller_name"
                      onBlur={handleBlur}
                      value={values.seller_name}
                      aria-label="seller_name"
                      type="text"
                      className={`${
                        touched.seller_name && !!errors.seller_name ? "border-danger" : "border-secondary"
                      } bg-transparent border-1 shadow-none fs-sm postRealStateTextInput mb-3`}
                      aria-describedby="seller-name"
                      isInvalid={touched.seller_name && !!errors.seller_name}
                      disabled={isSubmitting}
                    />
                    <Form.Label className="fs-md p-1 ps-0 text-capitalize">mobile number</Form.Label>
                    <InputGroup className="px-0">
                      <InputGroup.Text className="text-primary text-capitalize bg-transparent customGroupInputText">
                        +961
                      </InputGroup.Text>
                      <Form.Control
                        isInvalid={touched.seller_phone && !!errors.seller_phone}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        placeholder="Phone Number"
                        className="postRealStateTextInput"
                        style={{ background: "#FCFCFC" }}
                        id="seller_phone"
                      />
                    </InputGroup>
                    <Form.Label className="fs-md p-1 ps-0 text-capitalize form-label mt-3">contact methode</Form.Label>
                    <Form.Group className="mb-4 d-flex flex-row gap-4 ps-0 flex-wrap">
                      <Form.Check
                        isInvalid={touched.contact_method && !!errors.contact_method}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        type="radio"
                        name="contact_method"
                        className={`fs-md text-dark customButtonWrapper ${
                          values.contact_method === "phone" ? "customButtonWrapperSelected" : ""
                        } ${touched.contact_method && errors.contact_method && "invalidButtonWrapper"}`}
                        label="Phone Number"
                        value="phone"
                        id="phone number"
                      />
                      <Form.Check
                        isInvalid={touched.contact_method && !!errors.contact_method}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        type="radio"
                        name="contact_method"
                        className={`fs-md text-dark customButtonWrapper ${
                          values.contact_method === "chat" ? "customButtonWrapperSelected" : ""
                        } ${touched.contact_method && errors.contact_method && "invalidButtonWrapper"}`}
                        label="Real State Chat"
                        value="chat"
                        id="real_state_chat"
                      />
                      <Form.Check
                        isInvalid={touched.contact_method && !!errors.contact_method}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        type="radio"
                        name="contact_method"
                        className={`fs-md text-dark customButtonWrapper ${
                          values.contact_method === "both" ? "customButtonWrapperSelected" : ""
                        } ${touched.contact_method && errors.contact_method && "invalidButtonWrapper"}`}
                        label="Both"
                        value="both"
                        id="both"
                      />
                    </Form.Group>
                  </Row>
                </div>
              </Form.Group>
            </Row>
            <Button
              className="text-white w-100 fs-md d-flex align-items-center justify-content-center gap-2"
              variant="primary"
              type="submit"
              size="lg"
              disabled={isSubmitting}
            >
              {isSubmitting && <UseAnimations animation={infinity} size={40} strokeColor="#fff" autoplay={true} />}
              Post your realstate
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default SellCategory;
