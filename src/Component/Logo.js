import logo from "./logo.jpeg";

export const Logo = () => {
  return (
    <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "flex-end" }}>
      <img src={logo} alt="logo" width="100px" />
    </div>
  );
};
