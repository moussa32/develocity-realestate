import * as yup from "yup";

const signupSchema = yup.object().shape({
  email: yup.string().email().required().email("Please enter valid email"),
  password: yup.string().required().min(6),
  username: yup.string().required(),
});

export default signupSchema;
