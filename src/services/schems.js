import * as Yup from "yup";

export const schema = Yup.object().shape({
  firstName: Yup.string().required("Поле обязательное!!"),
  lastName: Yup.string().required("Поле обязательное!!"),
  streetAddress: Yup.string().required("Поле обязательное!!"),
  streetAddressL2: Yup.string(),
  email: Yup.string().email("Введите Email верно!"),
  phone: Yup.string()
    .min(10, "Введите верно  номер")
    .max(10, "Введите верно  номер, без +38")
    .required("Поле обязательное!!"),
  postal: Yup.string(),
  city: Yup.string(),
  state: Yup.string(),
});
