import * as yup from "yup";

const loginSchema = yup.object().shape({
  email: yup.string().email().required().email("Please enter valid email"),
  password: yup.string().required(),
});

export default loginSchema;
