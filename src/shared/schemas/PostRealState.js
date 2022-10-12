import * as yup from "yup";

export const homeSchema = yup.object().shape({
  title: yup.string().required(),
  property: yup.string().required(),
  payment_method: yup.string().required(),
  bedrooms: yup.string().required(),
  bathrooms: yup.string().required(),
  size: yup.string().required(),
  floor: yup.string().required(),
  furnished: yup.string().required(),
  condition: yup.string().required(),
  desc: yup.string().required().min(20),
  location: yup.string().required(),
  seller_name: yup.string().required(),
  seller_phone: yup.string().required(),
  contact_method: yup.string().required(),
});
