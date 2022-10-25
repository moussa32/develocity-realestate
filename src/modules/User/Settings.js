import { useState } from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { IoCamera } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { authentcatedInstance } from "../../api/constants";
import { setUser } from "../../redux/features/UserSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Settings = () => {
  const userdata = useSelector((state) => state.user);
  const [imagePreview, setImagePreview] = useState("");
  const [updatedInfo, setUpdatedInfo] = useState({ username: userdata.username, email: userdata.email });
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const handleUpdateProfile = (event) => {
    const { name, value, type } = event.target;
    if (type !== "file") {
      setUpdatedInfo({ ...updatedInfo, [name]: value });
    } else {
      const photo = event.target.files[0];
      setImagePreview(URL.createObjectURL(photo));
      setUpdatedInfo({ ...updatedInfo, image: photo });
    }
  };

  const updateProfile = () => {
    console.log(updatedInfo);
    setIsLoading(true);
    authentcatedInstance
      .post("/user/profile/update", updatedInfo, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        const { data } = res.data;
        const { user } = data;
        dispatch(setUser(user));
        console.log(user);
        toast.success("Data has been updated successfully", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setIsLoading(false);
      });
  };

  return (
    <Container fluid className="mt-5">
      <h2 className="headingBorderLine fs-2xl px-3 py-4 fw-normal text-capitalize">Edit Profile</h2>
      <Form.Group className="mt-4">
        <Form.Label className="text-capitalize text-dark fs-md">User name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Type username"
          value={updatedInfo.username}
          name="username"
          onChange={handleUpdateProfile}
          className="postRealStateTextInput fs-md text-dark"
        />
      </Form.Group>
      <Form.Group className="mt-4 mb-5">
        <Form.Label className="text-capitalize text-dark fs-md">User Photo</Form.Label>
        <div className="customUpdateProfileImage">
          <div className="customUpdateProfileImageLabel">
            <p className="mb-0">Change Photo</p>
            <IoCamera />
          </div>
          <Form.Control type="file" name="image" onChange={handleUpdateProfile} className="fs-md text-dark" />
          {updatedInfo.image && <img className="customUpdateProfileImagePreview" src={imagePreview} />}
        </div>
      </Form.Group>
      <h2 className="headingBorderLine fs-2xl px-3 py-4 fw-normal text-capitalize">contact information</h2>
      <Row>
        <Col md={6}>
          <Form.Group className="mt-4">
            <Form.Label className="text-capitalize text-dark fs-md">mobile number</Form.Label>
            <InputGroup className="mb-3">
              <InputGroup.Text className="text-primary bg-transparent border-1 rounded border-end-0 rounded-0 rounded-start formIcon fs-sm">
                +961
              </InputGroup.Text>
              <Form.Control
                placeholder="Phone Number"
                onChange={handleUpdateProfile}
                name="phone"
                aria-label="Phone Number"
                type="text"
                className="bg-transparent border-start-0 border-1 shadow-none fs-sm formInput"
                aria-describedby="phoneNumber-input"
              />
            </InputGroup>
          </Form.Group>
        </Col>
        <Col md={4} style={{ alignSelf: "end", marginBottom: "1rem" }}>
          <p className="mb-0 text-primary fs-sm text-capitalize">
            *this number for byers contacts,reminders and other notifications
          </p>
        </Col>
        <Col md={6}>
          <Form.Group className="mt-4">
            <Form.Label className="text-capitalize text-dark fs-md">email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Type email"
              value={updatedInfo.email}
              name="email"
              onChange={handleUpdateProfile}
              className="postRealStateTextInput fs-md text-dark"
            />
          </Form.Group>
        </Col>
        <Col md={4} style={{ alignSelf: "end", marginBottom: "1rem" }}>
          <p className="mb-0 text-primary fs-sm text-capitalize">
            *we won’t reavel your eamil to anyone else nor use it to send you spam
          </p>
        </Col>
      </Row>
      <h2 className="headingBorderLine fs-2xl px-3 py-4 fw-normal text-capitalize mt-4">Change Password</h2>
      <Row>
        <Col md={6}>
          <Form.Group className="mt-4">
            <Form.Label className="text-capitalize text-dark fs-md">new password</Form.Label>
            <Form.Control
              type="text"
              placeholder="enter new password"
              value={updatedInfo.password}
              name="password"
              onChange={handleUpdateProfile}
              className="postRealStateTextInput fs-md text-dark"
            />
          </Form.Group>
        </Col>
        <Col md={3} style={{ alignSelf: "end", marginBottom: "1rem" }}>
          <p className="mb-0 text-primary fs-sm text-capitalize">
            *use minimum 6 characters , and at least one letter and one number
          </p>
        </Col>
        <Col md={6}>
          <Form.Group className="mt-4">
            <Form.Label className="text-capitalize text-dark fs-md">confirm password</Form.Label>
            <Form.Control
              type="text"
              placeholder="confirm new password"
              value={updatedInfo.password_confirmation}
              name="password_confirmation"
              onChange={handleUpdateProfile}
              className="postRealStateTextInput fs-md text-dark"
            />
          </Form.Group>
        </Col>
      </Row>
      <Button
        disabled={isLoading}
        className="text-white submitUpdateProfile fs-lg text-center mx-auto mt-5 d-block"
        onClick={updateProfile}
      >
        Save Changes
      </Button>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Container>
  );
};

export default Settings;
