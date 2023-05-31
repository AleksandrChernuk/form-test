import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

const Form = () => {
  return (
    <div>
      <h3>Form</h3>
      <form>
        <Box>
          <Typography variant="h5">Full Name</Typography>
          <Box>
            <TextField required type="text" label="First Name" />
            <TextField required type="text" label="Last Name" />
          </Box>
        </Box>
        <Box>
          <Typography variant="h5">Address</Typography>
          <TextField type="text" label="Street address" size={{ width: "100%" }} />
          <TextField type="text" label="Street address L2" />
        </Box>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
