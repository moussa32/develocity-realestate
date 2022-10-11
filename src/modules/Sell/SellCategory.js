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
import PlacesAutocomplete, { getGeocode, getLatLng } from "use-places-autocomplete";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import { useRef, useCallback } from "react";

const SellCategory = () => {
  const { categoryName } = useParams();
  const currentSellCategory = useSelector((state) =>
    state.sell.data.data.categories.find((category) => category.name === categoryName)
  );
  console.log(categoryName, currentSellCategory);

  const handleSubmitRealState = (values, methods) => {
    console.log(values, methods);
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
          property: "",
          title: "",
          rental_duration: "",
          payment_method: "",
          bedrooms: undefined,
          bathrooms: undefined,
          size: undefined,
          floor: undefined,
          furnished: undefined,
          condition: "",
        }}
        onSubmit={handleSubmitRealState}
        validateOnChange={false}
        validateOnBlur={true}
      >
        {({ handleSubmit, handleChange, handleBlur, values, errors, isSubmitting, setFieldValue }) => (
          <Form noValidate onSubmit={handleSubmit} className="mt-5">
            <Form.Label className="text-capitalize fs-md text-dark">Property</Form.Label>
            {console.log(values)}
            <Form.Group className="mb-4 d-flex flex-row gap-4">
              <div
                className={`${values.property === "rent" ? "customButtonWrapperSelected" : null} customButtonWrapper`}
              >
                <Form.Check
                  disabled={false}
                  className="fs-md text-dark"
                  type="radio"
                  name="property"
                  label="Rent"
                  value="rent"
                  onChange={handleChange}
                  id="rent"
                  isInvalid={!!errors.property}
                />
              </div>
              <div
                className={`${values.property === "sell" ? "customButtonWrapperSelected" : null} customButtonWrapper`}
              >
                <Form.Check
                  isInvalid={!!errors.property}
                  onChange={(event) => {
                    handleChange(event);
                    setFieldValue("rental_duration", null);
                  }}
                  disabled={false}
                  type="radio"
                  name="property"
                  className="fs-md text-dark"
                  label="Sell"
                  value="sell"
                  id="sell"
                />
              </div>
              {errors.property && <Form.Control.Feedback type="invalid">{errors.property}</Form.Control.Feedback>}
            </Form.Group>
            {values.property === "rent" && (
              <>
                <Form.Label className="text-capitalize fs-md text-dark mt-4">Rental duration</Form.Label>
                <Form.Group className="mb-4 d-flex flex-row gap-4">
                  <div
                    className={`${
                      values.rental_duration === "daily" ? "customButtonWrapperSelected" : null
                    } customButtonWrapper`}
                  >
                    <Form.Check
                      disabled={false}
                      className="fs-md text-dark"
                      type="radio"
                      name="rental_duration"
                      label="Daily"
                      value="daily"
                      onChange={handleChange}
                      id="daily"
                      isInvalid={!!errors.rental_duration}
                    />
                  </div>
                  <div
                    className={`${
                      values.rental_duration === "monthly" ? "customButtonWrapperSelected" : null
                    } customButtonWrapper`}
                  >
                    <Form.Check
                      isInvalid={!!errors.rental_duration}
                      onChange={handleChange}
                      disabled={false}
                      type="radio"
                      name="rental_duration"
                      className="fs-md text-dark"
                      label="Monthly"
                      value="monthly"
                      id="monthly"
                    />
                  </div>
                  <div
                    className={`${
                      values.rental_duration === "yearly" ? "customButtonWrapperSelected" : null
                    } customButtonWrapper`}
                  >
                    <Form.Check
                      isInvalid={!!errors.rental_duration}
                      onChange={handleChange}
                      disabled={false}
                      type="radio"
                      name="rental_duration"
                      className="fs-md text-dark"
                      label="Yearly"
                      value="yearly"
                      id="yearly"
                    />
                  </div>
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
                  !!errors.title ? "border-danger" : "border-secondary"
                } bg-transparent border-1 shadow-none fs-sm postRealStateTextInput`}
                aria-describedby="email-input"
                isInvalid={!!errors.title}
                disabled={isSubmitting}
              />
              {errors.title && <Form.Control.Feedback type="invalid">{errors.title}</Form.Control.Feedback>}
            </Form.Group>
            <Form.Label className="text-capitalize fs-md text-dark">Payment method</Form.Label>
            <Form.Group className="mb-5 d-flex flex-row gap-4 flex-wrap">
              <div
                className={`${
                  values.payment_method === "cash" ? "customButtonWrapperSelected" : null
                } customButtonWrapper`}
              >
                <Form.Check
                  disabled={false}
                  className="fs-md text-dark text-capitalize"
                  type="radio"
                  name="payment_method"
                  label="Cash"
                  value="cash"
                  onChange={handleChange}
                  isInvalid={!!errors.payment_method}
                  id="cash"
                />
              </div>
              <div
                className={`${
                  values.payment_method === "cheque" ? "customButtonWrapperSelected" : null
                } customButtonWrapper`}
              >
                <Form.Check
                  isInvalid={!!errors.payment_method}
                  onChange={handleChange}
                  disabled={false}
                  type="radio"
                  name="payment_method"
                  className="fs-md text-dark text-capitalize"
                  label="cheque"
                  value="cheque"
                  id="cheque"
                />
              </div>
              <div
                className={`${
                  values.payment_method === "crypto" ? "customButtonWrapperSelected" : null
                } customButtonWrapper`}
              >
                <Form.Check
                  isInvalid={!!errors.payment_method}
                  onChange={handleChange}
                  disabled={false}
                  type="radio"
                  name="payment_method"
                  className="fs-md text-dark text-capitalize"
                  label="crypto currency"
                  value="crypto"
                  id="crypto"
                />
              </div>
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
                <Form.Group>
                  <Form.Label className="fs-md text-capitalize">furnished</Form.Label>
                  <div className="mb-5 d-flex flex-row gap-4">
                    <div
                      className={`${
                        values.furnished === "1" ? "customButtonWrapperSelected" : null
                      } customButtonWrapper`}
                    >
                      <Form.Check
                        disabled={false}
                        className="fs-md text-dark text-capitalize"
                        type="radio"
                        name="furnished"
                        label="Yes"
                        value="1"
                        onChange={handleChange}
                        isInvalid={!!errors.furnished}
                        id="yes"
                      />
                    </div>
                    <div
                      className={`${
                        values.furnished === "0" ? "customButtonWrapperSelected" : null
                      } customButtonWrapper`}
                    >
                      <Form.Check
                        isInvalid={!!errors.furnished}
                        onChange={handleChange}
                        disabled={false}
                        type="radio"
                        name="furnished"
                        className="fs-md text-dark text-capitalize"
                        label="No"
                        value="0"
                        id="no"
                      />
                    </div>
                  </div>

                  {errors.furnished && <Form.Control.Feedback type="invalid">{errors.furnished}</Form.Control.Feedback>}
                </Form.Group>
              )}
              {currentSellCategory.options.includes("condition") && (
                <Form.Group>
                  <Form.Label className="fs-md text-capitalize">condition</Form.Label>
                  <div className="mb-5 d-flex flex-row gap-4 flex-wrap">
                    <div
                      className={`${
                        values.condition === "ready" ? "customButtonWrapperSelected" : null
                      } customButtonWrapper`}
                    >
                      <Form.Check
                        disabled={false}
                        className="fs-md text-dark text-capitalize"
                        type="radio"
                        name="condition"
                        label="ready"
                        value="ready"
                        onChange={handleChange}
                        isInvalid={!!errors.condition}
                        id="ready"
                      />
                    </div>
                    <div
                      className={`${
                        values.condition === "under_construction" ? "customButtonWrapperSelected" : null
                      } customButtonWrapper`}
                    >
                      <Form.Check
                        isInvalid={!!errors.condition}
                        onChange={handleChange}
                        disabled={false}
                        type="radio"
                        name="condition"
                        className="fs-md text-dark text-capitalize"
                        label="Under Construction"
                        value="under_construction"
                        id="under_construction"
                      />
                    </div>
                  </div>

                  {errors.furnished && <Form.Control.Feedback type="invalid">{errors.furnished}</Form.Control.Feedback>}
                </Form.Group>
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
                <Form.Control as="textarea" placeholder="type Description" rows={6} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="propertyPrice">
                <Form.Label className="text-capitalize fs-md text-dark fw-normal">price</Form.Label>

                <InputGroup className="mb-3">
                  <InputGroup.Text className="text-primary text-capitalize bg-transparent">USD</InputGroup.Text>
                  <Form.Control placeholder="Type Price" aria-label="Type Price" />
                </InputGroup>
              </Form.Group>
              <div className="mapBlock"></div>
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
      {categoryName}
    </Container>
  );
};

export default SellCategory;
