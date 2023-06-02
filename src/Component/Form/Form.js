import { Formik, Form, Field, ErrorMessage } from "formik";
import { Container, Typography, TextField, Button, Grid } from "@mui/material";
import { schema } from "../services/schems";

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
    <Container maxWidth="md" pa>
      <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={schema}>
        <Form>
          <Grid container rowSpacing={4} alignItems={"center"} justifyContent="center">
            <Grid item md={12} sm={12} xs={12}>
              <Typography variant="h5" component="h5" gutterBottom>
                Full Name<span style={{ color: "red" }}>*</span>
              </Typography>
              <Grid item>
                <Grid container spacing={2}>
                  <Grid item md={6} sm={6} xs={12}>
                    <Field
                      as={TextField}
                      label="First Name"
                      type="text"
                      name="firstName"
                      helperText={<ErrorMessage name="firstName" component="span" style={{ color: "red" }} />}
                      required
                      fullWidth
                    />
                  </Grid>
                  <Grid item md={6} sm={6} xs={12}>
                    <Field
                      as={TextField}
                      label="Last Name"
                      type="text"
                      name="lastName"
                      helperText={<ErrorMessage name="lastName" component="span" style={{ color: "red" }} />}
                      required
                      fullWidth
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <Grid item md={12} sm={12} xs={12}>
              <Typography variant="h5" component="h5" gutterBottom>
                Address<span style={{ color: "red" }}>*</span>
              </Typography>

              <Grid container rowSpacing={2}>
                <Grid item md={12} sm={12} xs={12}>
                  <Field
                    as={TextField}
                    label="Street Address"
                    type="text"
                    name="streetAddress"
                    helperText={<ErrorMessage name="streetAddress" component="span" style={{ color: "red" }} />}
                    required
                    fullWidth
                  />
                </Grid>
                <Grid item md={12} sm={12} xs={12}>
                  <Field as={TextField} label="Street Address L2" type="text" name="streetAddressL2" fullWidth />
                </Grid>
                <Grid item md={12} sm={12} xs={12}>
                  <Grid container spacing={2}>
                    <Grid item md={6} sm={6} xs={12}>
                      <Field
                        as={TextField}
                        label="City"
                        type="text"
                        name="city"
                        helperText={<ErrorMessage name="city" />}
                        fullWidth
                      />
                    </Grid>

                    <Grid item md={6} sm={6} xs={12}>
                      <Field as={TextField} label="State Province" type="text" name="state" fullWidth />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item md={12} sm={12} xs={12}>
                  <Field as={TextField} label="Postal" type="text" name="postal" fullWidth />
                </Grid>
              </Grid>
            </Grid>

            <Grid item md={12} sm={12} xs={12}>
              <Typography variant="h5" component="h5" gutterBottom>
                Phone number<span style={{ color: "red" }}>*</span>
              </Typography>

              <Grid container>
                <Grid item md={6} sm={6} xs={12}>
                  <Field
                    as={TextField}
                    label="Phone Number"
                    type="tel"
                    name="phone"
                    placeholder="(000)000-00-00"
                    required
                    fullWidth
                    helperText={<ErrorMessage name="phone" component="span" style={{ color: "red" }} />}
                  />
                </Grid>
              </Grid>
            </Grid>

            <Grid item md={12} sm={12} xs={12}>
              <Typography variant="h5" component="h5" gutterBottom>
                Email
              </Typography>
              <Grid container>
                <Grid item md={6} sm={6} xs={12}>
                  <Field
                    as={TextField}
                    label="E-mail"
                    type="email"
                    name="email"
                    placeholder="email@yahoo.com"
                    fullWidth
                    helperText={<ErrorMessage name="email" component="span" style={{ color: "red" }} />}
                  />
                </Grid>
              </Grid>
            </Grid>

            <Grid item md={12} sm={12} xs={12}>
              <Grid container style={{ paddingTop: "40px", borderTop: "1px solid teal" }}>
                <Grid item>
                  <Button type="submit" color="success" variant="outlined" style={{ minWidth: "200px" }}>
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Form>
      </Formik>
    </Container>
  );
};

export default MyForm;
