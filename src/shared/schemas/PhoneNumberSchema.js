import * as yup from "yup";

export const phoneNumberSchema = yup.object().shape({
  phoneNumber: yup
    .string()
    .required("Phone number is required")
    .matches(/^[0-9]+$/, "Must be only digits")
    .test("len", "Must be exactly 9 numbers", (val) => val.length === 9),
});
