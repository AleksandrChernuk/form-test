import { useState } from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import s from "./Form.module.css";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [streetAddressL2, setStreetAddressL2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [postal, setPostal] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      firstName,
      lastName,
      streetAddress,
      streetAddressL2,
      city,
      state,
      email,
      phone,
      postal,
    };

    console.log(formData);
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    switch (name) {
      case "firstName":
        return setFirstName(value);

      case "lastName":
        return setLastName(value);

      case "streetAddress":
        return setStreetAddress(value);

      case "streetAddressL2":
        return setStreetAddressL2(value);

      case "city":
        return setCity(value);

      case "state":
        return setState(value);

      case "email":
        return setEmail(value);

      case "phone":
        return setPhone(value);

      case "postal":
        return setPostal(value);

      default:
        return;
    }
  };

  return (
    <div>
      <h3 className={s.title}>Form-Test</h3>
      <form className={s.form} onSubmit={handleSubmit}>
        <div>
          <Typography variant="h5" component="h5" gutterBottom>
            Full Name <span style={{ color: "red" }}>*</span>
          </Typography>
          <div className={s.smallWrapper}>
            <TextField
              required
              type="text"
              label="First Name"
              name="firstName"
              value={firstName}
              onChange={handleChange}
            />
            <TextField
              required
              type="text"
              label="Last Name"
              name="lastName"
              value={lastName}
              onChange={handleChange}
            />
          </div>
        </div>

        <div>
          <Typography variant="h5" component="h5" gutterBottom>
            Address <span style={{ color: "red" }}>*</span>
          </Typography>
          <div className={s.adressWrapper}>
            <TextField
              required
              variant="outlined"
              type="text"
              label="Street address"
              fullWidth
              value={streetAddress}
              name="streetAddress"
              onChange={handleChange}
            />
            <TextField
              required
              type="text"
              value={streetAddressL2}
              name="streetAddressL2"
              onChange={handleChange}
              label="Street address L2"
              className={s.inputBig}
            />

            <div className={s.smallWrapper}>
              <TextField required type="text" value={city} name="city" onChange={handleChange} label="City" />
              <TextField
                required
                type="text"
                value={state}
                name="state"
                onChange={handleChange}
                label="State / Province"
              />
            </div>

            <TextField
              type="number"
              required
              label="Postal / Zip Code"
              name="postal"
              value={postal}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className={s.smallWrapperBottom}>
          <Typography variant="h5" component="h5" gutterBottom>
            Phone number <span style={{ color: "red" }}>*</span>
          </Typography>
          <TextField
            required
            type="tel"
            label="Phone number"
            name="phone"
            value={phone}
            onChange={handleChange}
            placeholder="(000)000-00-00"
          />
        </div>

        <div className={s.smallWrapperBottom}>
          <Typography variant="h5" component="h5" gutterBottom>
            Email <span style={{ color: "red" }}>*</span>
          </Typography>
          <TextField
            required
            type="email"
            label="Email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="email@yahoo.com"
          />
        </div>
        <div className={s.buttonWrapp}>
          <Button type="submit" color="success" variant="outlined" style={{ width: "200px" }}>
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Form;
