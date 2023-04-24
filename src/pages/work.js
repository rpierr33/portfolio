import { useState } from "react";
import {
  Grid,
  Typography,
  ButtonBase,
  Stack,
  Modal,
  Link,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { projectList } from "../utils/projectsList";
import realEstate from "../assets/images/realEstate.png";
import taxAI from "../assets/images/tax-ai.png";
import cbnbImg from "../assets/images/carebnb.png";
import retox from "../assets/images/retox-music-img.png";
import golunapark from "../assets/images/golunapark-img.png";
import fruitbonbon from "../assets/images/fruitbonbon-img.png";

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  [theme.breakpoints.down("sm")]: {
    width: "100% !important", // Overrides inline-style
    height: 100,
  },
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": {
      opacity: 0.15,
    },
    "& .MuiImageMarked-root": {
      opacity: 0,
    },
    "& .MuiTypography-root": {
      display: "none",
    },
  },
}));

const Image = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create("opacity"),
}));

const ImageMarked = styled("span")(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: "absolute",
  bottom: -2,
  left: "calc(50% - 9px)",
  transition: theme.transitions.create("opacity"),
}));

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80vw",
  bgcolor: "background.paper",
  borderRadius: "shape.borderRadius",
  boxShadow: 24,
  p: 4,
};

const Work = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [openProject, setOpenProject] = useState("");

  const getProjectImg = (projectName) => {
    return projectName === "realEstate"
      ? realEstate
      : projectName === "TaxAI"
      ? taxAI
      : projectName === "retox"
      ? retox
      : projectName === "golunapark"
      ? golunapark
      : projectName === "careBnB"
      ? cbnbImg
      : projectName === "fruitbonbon"
      ? fruitbonbon
      : null; // optional else case, in case projectName does not match any of the above conditions
  };

  return (
    <>
      <Modal
        open={open}
        onClose={() => {
          handleClose();
          setOpenProject("");
        }}
        aria-labelledby={openProject.name}
        aria-describedby={`${openProject.name} details`}
      >
        <Stack sx={modalStyle} gap={1}>
          <img
            src={`${getProjectImg(openProject.name)}`}
            width="100%"
            minwidth={250}
            height="auto"
            mb={3}
            alt=""
          />
          <Stack direction={"row"} gap={3} alignItems={"center"}>
            <Typography component={"h2"} variant={"h3"} fontSize={"2rem"}>
              {open && openProject.name}
            </Typography>
            <Link href={openProject.demo}>Demo</Link>
            <Link href={openProject.repo}>Repo</Link>
          </Stack>
          <Typography
            component={"h3"}
            variant={"subtitle1"}
            fontSize={"1rem"}
            color={"#b1bdc8"}
          >
            {open && openProject.tech.join(", ")}
          </Typography>
          <Typography component={"p"} variant={"body2"}>
            {open && openProject.description}
          </Typography>
        </Stack>
      </Modal>
      <Grid container spacing={3}>
        {projectList.map((project, index) => (
          <Grid item xs={12} md={6} key={index} height="100%">
            <ImageButton
              focusRipple
              key={project.name}
              onClick={() => {
                handleOpen();
                setOpenProject(projectList[index]);
              }}
            >
              <img
                src={`${getProjectImg(project.name)}`}
                width="100%"
                maxwidth={500}
                height="auto"
                alt=""
              />
              <ImageBackdrop className="MuiImageBackdrop-root" />
              <Image width="100%" maxwidth={500} height="inherit">
                <Typography
                  component="span"
                  variant="h2"
                  color="inherit"
                  sx={{
                    fontSize: "2rem",
                    letterSpacing: "0.1rem",
                    position: "relative",
                    px: 4,
                    pt: 2,
                    pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                  }}
                >
                  {project.name}
                  <ImageMarked className="MuiImageMarked-root" />
                </Typography>
              </Image>
            </ImageButton>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Work;
