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
import logo from "./logo_2.png";
import popcorn from "./popcorn_2.jpeg";
import myshow from "./myshow.png";
import gifts from "./giftsforlovers.png";
import fans from "./fans.jpeg";
import beast from "./beast.jpeg";
import valimai from "./valimai.jpeg";
import suriya from "./et2.jpeg";
import fir from "./fir.jpeg";
import don from "./don.jpeg";
import maaran from "./maaran.jpeg";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import {Link} from 'react-router-dom';


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const pages = ["Offers", "Gift", "About Us", "Contact Us"];
const settings = ["ADMIN", "USER ", "LOGOUT"];
const images = [
  {
    label: "Experience The Best",
    imgPath: myshow,
  },
  {
    label: "Share Your Snack With Us",
    imgPath: popcorn,
  },
  {
    label: "Enjoy Our Gifts",
    imgPath: gifts,
  },
  {
    label: "Come Celebrate Your Inspiration",
    imgPath: fans,
  },
];

const Homepage = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
  <>
    <Container maxWidth="xl">
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              <img class="image" src={logo} alt="my show" />
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
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            >
              <img class="image" src={logo} alt="my show" />
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                  
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  <Link to={page.split(" ").join('').toLowerCase()}>{page}</Link>
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Barath" src="/static/images/avatar/2.jpg" />
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
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">
                    <Link to={setting.split(" ").join('').toLowerCase()}>{setting}</Link>
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* ----------------------------------- END OF APP BAR --------------------------------------- */}

      <Box class="centercard">
        <Box sx={{ maxWidth: 800, flexGrow: 1 }}>
          <Paper
            square
            elevation={0}
            sx={{
              display: "flex",
              alignItems: "center",
              height: 100,
              pl: 2,
              bgcolor: "#FDFDFD",
            }}
          >
            <Typography> {images[activeStep].label} </Typography>
          </Paper>
          <AutoPlaySwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {images.map((step, index) => (
              <div key={step.label}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <Box
                    component="img"
                    sx={{
                      height: 400,
                      display: "block",
                      maxWidth: 800,
                      overflow: "hidden",
                      width: "100%",
                    }}
                    src={step.imgPath}
                    alt={step.label}
                  />
                ) : null}
              </div>
            ))}
          </AutoPlaySwipeableViews>
          <MobileStepper
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            nextButton={
              <Button
                size="small"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
              >
                Next
                {theme.direction === "rtl" ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </Button>
            }
            backButton={
              <Button
                size="small"
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                {theme.direction === "rtl" ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
                Back
              </Button>
            }
          />
        </Box>
      </Box>
      {/* ------------------------------------------END OF CAROUSEL ------------------------------------------ */}


    <Box sx={{mx:23}}>
       {/* ------------------1st card---------------- */}
      <Card sx={{ maxWidth: 345,float:"left",m:4 }}>
      <CardMedia
        component="img"
        height="140"
        image = {beast}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          BEAST 
        </Typography>
      </CardContent>
      <CardActions>
      <Button size="small">Book It</Button>
        <Button size="small">About the Movie</Button>
      </CardActions>
    </Card>
{/* ------------------2nd card---------------- */}
      <Card sx={{ maxWidth: 345,float:"left",m:4 }}>
      <CardMedia
        component="img"
        height="140"
        image = {valimai}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          VALIMAI
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Book It</Button>
        <Button size="small">About the Movie</Button>
      </CardActions>
    </Card>
    {/* ------------------3rd card---------------- */}
      <Card sx={{ maxWidth: 345,float:"left",m:4 }}>
      <CardMedia
        component="img"
        height="140"
        image = {suriya}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          ETHARKKUM THUNDHIVAN 
        </Typography>
      </CardContent>
      <CardActions>
      <Button size="small">Book It</Button>
        <Button size="small">About the Movie</Button>
      </CardActions>
    </Card>
    </Box>

    {/* --------------------------2nd row movies poster-------------------- */}

    <Box sx={{mx:23}}>
       {/* ------------------1st card---------------- */}
      <Card sx={{ maxWidth: 345,float:"left",m:4 }}>
      <CardMedia
        component="img"
        height="140"
        image = {fir}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          FIR
        </Typography>
      </CardContent>
      <CardActions>
      <Button size="small">Book It</Button>
        <Button size="small">About the Movie</Button>
      </CardActions>
    </Card>
{/* ------------------2nd card---------------- */}
      <Card sx={{ maxWidth: 345,float:"left",m:4 }}>
      <CardMedia
        component="img"
        height="140"
        image = {don}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          DON
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Book It</Button>
        <Button size="small">About the Movie</Button>
      </CardActions>
    </Card>
    {/* ------------------3rd card---------------- */}
      <Card sx={{ maxWidth: 345,float:"left",m:4 }}>
      <CardMedia
        component="img"
        height="140"
        image = {maaran}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          MAARAN
        </Typography>
      </CardContent>
      <CardActions>
      <Button size="small">Book It</Button>
        <Button size="small">About the Movie</Button>
      </CardActions>
    </Card>
    </Box>

    </Container>
  
  </>
  );
};

export default Homepage;
