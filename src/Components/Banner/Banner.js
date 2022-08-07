import { Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Carousel from "./Carousel";

const useStyles = makeStyles(() => ({
  banner: {
    backgroundImage: "url(./Dotted.jpg)",
  },

  bannerContent: {
    height: 400,
    display: "flex",
    flexDirection: "column",
    paddingTop: 25,
    justifyContent: "space-around",
  },

  tagline: {
    display: "flex",
    height: "40%",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  },

  carousel: {
    height: "50%",
    display: "flex",
    alignItems: "center",
  },
}));

const Banner = () => {
  const classes = useStyles();
  return (
    <div className={classes.banner}>
      <Container className={classes.bannerContent}>
        <div className={classes.tagline}>
          <Typography
            variant="h2"
            style={{
              fontWeight: "bold",
              marginBottom: 15,
              fontFamily: "Montserrat",
            }}
          >
            Crypto Profile
          </Typography>
          <Typography
            variant="subtitle2"
            style={{
              color: "darkgrey",
              textTansform: "capitalize",
              fontFamily: "Montserrat",
            }}
          >
            Know all the info regarding the the Crypto Currency.
          </Typography>
        </div>
        <Carousel />
      </Container>
    </div>
  );
};

export default Banner;
