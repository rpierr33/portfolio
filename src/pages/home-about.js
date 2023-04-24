import { Stack, Typography, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { styled } from "@mui/material/styles";

const About = () => {
  return (
    <Stack align={"center"} alignItems={"center"}>
      <Typography component={"h1"} variant={"h1"} className={"linear-wipe"}>
        Ralph Pierre
      </Typography>
      <Typography
        component={"h2"}
        variant={"subtitle1"}
        mb={3}
        sx={{ fontSize: "1.5rem", color: "#63ace5" }}
      >
        Full-Stack Developer | Technical Project Manager
      </Typography>
      <Typography
        component={"p"}
        variant={"body1"}
        id={"about-text"}
        width={"60%"}
        aria-label={"about Ralph text"}
        sx={{ color: "#63ace5" }}
        px={5}
      >
        I'm a full-stack web developer and technical project manager, that loves
        working end-to-end on creative projects and problem-solving.
        <br></br>
        In 2019, I decided to change my life and transitioned into web
        development.
        <br></br>
        Since then, I have been working as a freelancer, technical project
        manager, <br></br>and instructor for a full stack web development
        bootcamp.
      </Typography>
    </Stack>
  );
};

export default About;
