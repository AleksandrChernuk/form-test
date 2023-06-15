import Form from "./Component/Form/Form";
import { Logo } from "./Component/Logo";
import { Container } from "@mui/material";

function App() {
  return (
    <Container maxWidth="md" style={{ marginTop: "20px" }}>
      <Logo />
      <Form />
    </Container>
  );
}

export default App;
