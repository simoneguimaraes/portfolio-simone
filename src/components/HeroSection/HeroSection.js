import ReactPlayer from "react-player";
import heroVideo from "../assets/video/hero-video.mp4";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import "./HeroSection.css";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100vh",
    position: "relative",
    "& video": {
      objectFit: "cover",
    },
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  title: {
    paddingBottom: theme.spacing(4),
  },
}));

function HeroSection() {
  const classes = useStyles();
  return (
    <section className={classes.root}>
      <ReactPlayer
        url={heroVideo}
        playing
        loop
        muted
        width="100%"
        height="100%"
      />
      <div className={classes.overlay}>
        <Box
          height="100%"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          color="#fff"
        >
          <div>
            <span className="logo">sg</span>
          </div>
          <div className="typewriter">
            <h1>Hello, I'm Simone</h1>
          </div>
          <div className="text-hero-page">
            <span>
              I am a <strong>full-stack web developer</strong> with UI/UX design experience.
            </span>
            <span>
              I am passionate about technology and how it can be used to <strong>improve people's lives</strong>.
            </span>
            <span>
            I am a problem solver and love <strong>learning</strong> new technologies!
            </span>
          </div>
        </Box>
      </div>
    </section>
  );
}

export default HeroSection;
