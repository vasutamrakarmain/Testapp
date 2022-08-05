import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { Toolbar, Typography } from "@mui/material";

interface IAppProps {}

const Footer: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl" sx={{ textAlign: "center", color: "#fff",backgroundColor: "#1976d2"}}>
        <Toolbar disableGutters >
          <Typography textAlign="center">
          © Copyright | 2022
          </Typography>
        </Toolbar>
      </Container>
    </React.Fragment>
  );
};

export default Footer;
