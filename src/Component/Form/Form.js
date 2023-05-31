import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import s from "./Form.module.css";

const Form = () => {
  return (
    <div>
      <h3 className={s.title}>Form-Test</h3>
      <form className={s.form} autoComplete="off">
        <div>
          <Typography variant="h5" component="h5" gutterBottom>
            Full Name <span style={{ color: "red" }}>*</span>
          </Typography>
          <div className={s.smallWrapper}>
            <TextField required type="text" label="First Name" />
            <TextField required type="text" label="Last Name" />
          </div>
        </div>

        <div>
          <Typography variant="h5" component="h5" gutterBottom>
            Address <span style={{ color: "red" }}>*</span>
          </Typography>
          <div className={s.adressWrapper}>
            <TextField variant="outlined" type="text" label="Street address" fullWidth />
            <TextField type="text" label="Street address L2" className={s.inputBig} />

            <div className={s.smallWrapper}>
              <TextField type="text" label="City" />
              <TextField type="text" label="State / Province" />
            </div>

            <TextField type="text" label="Postal / Zip Code" />
          </div>
        </div>

        <div className={s.smallWrapperBottom}>
          <Typography variant="h5" component="h5" gutterBottom>
            Phone number <span style={{ color: "red" }}>*</span>
          </Typography>
          <TextField type="text" label="Phone number" />
        </div>

        <div className={s.smallWrapperBottom}>
          <Typography variant="h5" component="h5" gutterBottom>
            Email <span style={{ color: "red" }}>*</span>
          </Typography>
          <TextField type="text" label="Email" />
        </div>
        <div className={s.buttonWrapp}>
          <Button type="submit" color="success" variant="outlined" elementType="button" style={{ width: "200px" }}>
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Form;
