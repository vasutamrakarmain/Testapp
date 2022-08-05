import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { useNavigate } from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";
import { isSignIn, getSigninInfo } from "../services/commonService";

const pages: [] = [];

interface IAppProps {}

const Header: React.FunctionComponent<IAppProps> = (props): JSX.Element => {
  let navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  /* Model signin */
  const handleClickOpenSignin = (event: React.MouseEvent<HTMLElement>) => {
    setOpen(true);
  };
  const handleCloseSignin = () => {
    setOpen(false);
  };

  const [loginForm, setLoginForm] = React.useState<{
    email: string;
    password: string;
  }>({ email: "", password: "" });
  const [errorMSg, setErrorMSg] = React.useState<string>("");
  const signInSubmithandller = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setErrorMSg("");
    if (
      loginForm.email === "vasu1tamra@gmail.com" &&
      loginForm.password === "123456"
    ) {
      let temp = JSON.stringify(Object.assign(loginForm, { balance: 99.99 }));
      localStorage.setItem("loginUser", temp);
      setLoginForm({ email: "", password: "" });
      handleCloseSignin();
    } else {
      setErrorMSg("Invalid Credential");
    }
  };

  const onchangeHandller = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrorMSg("");
    if (e.target.name === "email") {
      setLoginForm({ ...loginForm, email: e.currentTarget.value });
    } else {
      setLoginForm({ ...loginForm, password: e.currentTarget.value });
    }
  };
  const SignOut = (): void => {
    localStorage.removeItem("loginUser");
    navigate("/");
  };
  const [userInfo, setUseInfo] = React.useState<any | null>(null);
  React.useEffect(() => {
    if (getSigninInfo() !== null) {
      setUseInfo(getSigninInfo());
    }
  }, [getSigninInfo()]);
  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              VASU TAMRAKAR
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  // <MenuItem key={page} component={Link} to={"/about"}>
                  <MenuItem key={page}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>
            {isSignIn() === true ? (
              <Box sx={{ flexGrow: 0 }}>
                {userInfo !== null ? userInfo.balance : ""}&nbsp;
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src="../../images/2.jpg" />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem>
                    <Typography textAlign="center">Profile</Typography>
                  </MenuItem>
                  <MenuItem onClick={SignOut}>
                    <Typography textAlign="center">SignOut</Typography>
                  </MenuItem>
                </Menu>
              </Box>
            ) : (
              <Box sx={{ flexGrow: 0 }}>
                <MenuItem>
                  <Typography
                    textAlign="center"
                    onClick={handleClickOpenSignin}
                  >
                    {"SignIn"}
                  </Typography>
                </MenuItem>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      <Dialog
        open={open}
        onClose={handleCloseSignin}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Sign In"}</DialogTitle>
        <form method="POST" onSubmit={signInSubmithandller}>
          <DialogContent>
            <Box
              sx={{
                width: 500,
                maxWidth: "100%",
              }}
            >
              {errorMSg !== "" && <Typography>{errorMSg}</Typography>}
              <div className="">
                <TextField
                  id="outlined-basic1"
                  name="email"
                  value={loginForm.email}
                  onChange={onchangeHandller}
                  fullWidth
                  label="Enter Email"
                  variant="outlined"
                  sx={{ margin: "20px 0px" }}
                />
              </div>
              <div className="">
                <TextField
                  id="outlined-basic2"
                  type={"password"}
                  name="password"
                  value={loginForm.password}
                  onChange={onchangeHandller}
                  fullWidth
                  label="Password"
                  variant="outlined"
                />
              </div>
            </Box>
          </DialogContent>
          <DialogActions>
            <Button type="submit" onClick={signInSubmithandller}>
              Sign In
            </Button>
            <Button onClick={handleCloseSignin}>Clsoe</Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};

export default Header;
