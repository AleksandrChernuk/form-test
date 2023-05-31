import { Formik, Form, Field, ErrorMessage } from "formik";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import s from "./Form.module.css";
import * as Yup from "yup";

const schema = Yup.object().shape({
  firstName: Yup.string().required("Поле обязательное!!"),
  lastName: Yup.string().required("Поле обязательное!!"),
  streetAddress: Yup.string(),
  streetAddressL2: Yup.string(),
  email: Yup.string().email("Введите Email верно!"),
  phone: Yup.string().min(10, "Введите верно  номер").max(10, "Введите верно  номер").required("Поле обязательное!!"),
  postal: Yup.string().min(2),
  city: Yup.string(),
  state: Yup.string(),
});

const initialValues = {
  firstName: "",
  lastName: "",
  streetAddress: "",
  streetAddressL2: "",
  city: "",
  state: "",
  email: "",
  phone: "",
  postal: "",
};

const MyForm = () => {
  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={schema}>
      <Form className={s.form}>
        <div>
          <Typography variant="h5" component="h5" gutterBottom>
            Full Name<span style={{ color: "red" }}>*</span>
          </Typography>
          <div className={s.smallWrapper}>
            <Field
              as={TextField}
              label="First Name"
              type="text"
              name="firstName"
              helperText={<ErrorMessage name="firstName" component="span" style={{ color: "red" }} />}
              required
            />
            <Field
              as={TextField}
              label="Last Name"
              type="text"
              name="lastName"
              helperText={<ErrorMessage name="lastName" component="span" style={{ color: "red" }} />}
              required
            />
          </div>
        </div>

        <div>
          <Typography variant="h5" component="h5" gutterBottom>
            Address<span style={{ color: "red" }}>*</span>
          </Typography>

          <div className={s.adressWrapper}>
            <Field as={TextField} label="Street Address" type="text" name="streetAddress" required />
            <Field as={TextField} label="Street Address L2" type="text" name="streetAddressL2" />
            <div className={s.smallWrapper}>
              <Field as={TextField} label="City" type="text" name="city" />
              <ErrorMessage name="city" />
              <Field as={TextField} label="State Province" type="text" name="state" />
            </div>
            <Field as={TextField} label="Postal" type="text" name="postal" />
          </div>
        </div>

        <div className={s.smallWrapperBottom}>
          <Typography variant="h5" component="h5" gutterBottom>
            Phone number<span style={{ color: "red" }}>*</span>
          </Typography>
          <Field
            as={TextField}
            label="Phone Number"
            type="tel"
            name="phone"
            placeholder="(000)000-00-00"
            required
            helperText={<ErrorMessage name="phone" component="span" style={{ color: "red" }} />}
          />
        </div>

        <div className={s.smallWrapperBottom}>
          <Typography variant="h5" component="h5" gutterBottom>
            Email
          </Typography>
          <Field
            as={TextField}
            label="E-mail"
            type="email"
            name="email"
            placeholder="email@yahoo.com"
            helperText={<ErrorMessage name="email" component="span" style={{ color: "red" }} />}
          />
        </div>
        <div className={s.buttonWrapp}>
          <Button type="submit" color="success" variant="outlined" style={{ width: "200px" }}>
            Submit
          </Button>
        </div>
      </Form>
    </Formik>
  );
};

export default MyForm;
