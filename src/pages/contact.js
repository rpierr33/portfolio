import {
  Button,
  FormControl,
  Grid,
  FormHelperText,
  TextField,
  Typography,
  Link,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";

const CustomTextField = styled((props) => <TextField {...props} />)(() => ({
  "& .MuiFilledInput-root": {
    borderBottom: "1px solid #ebedef",
    overflow: "hidden",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    background: "rgba(235, 237, 239, 0.1)",
  },
  "& .MuiInputBase-input": {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 8,
    paddingBottom: 8,
  },
}));

const Contact = () => {
  // state for name-input
  const [nameInput, setNameInput] = useState("");

  // state for email-input
  const [emailInput, setEmailInput] = useState("");

  // state for msg-input
  const [msgInput, setMsgInput] = useState("");

  return (
    <>
      <Typography component={"h2"} variant={"h2"} gutterBottom>
        Get in Touch!
      </Typography>
      <form id={"contact-form"} aria-label={"the form to send Ralph a message"}>
        <Grid container spacing={3} alignItems={"center"} px={8}>
          <Grid item xs={12} md={6} mx={0} mb={0}>
            <FormControl fullWidth>
              <CustomTextField
                id="name-input"
                variant="filled"
                placeholder="Jane Doe"
                required
                onChange={(e) => {
                  setNameInput(e.target.value);
                }}
              />
              <FormHelperText align={"left"}>
                First and Last Name
              </FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6} mx={0}>
            <FormControl fullWidth>
              <CustomTextField
                id="email-input"
                variant="filled"
                placeholder="myname@email.com"
                required
                onChange={(e) => {
                  setEmailInput(e.target.value);
                }}
              />
              <FormHelperText align={"left"}>Email Address</FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <CustomTextField
                id="msg-input"
                variant="filled"
                placeholder="This form is currently in development. If you'd like to get in touch, please use one of the options on the left. Thanks!"
                multiline
                minRows={5}
                maxRows={8}
                required
                onChange={(e) => {
                  setMsgInput(e.target.value);
                }}
              />
              <FormHelperText align={"left"}>
                Your Message to Ralph
              </FormHelperText>
            </FormControl>
          </Grid>
          <Grid container item xs={12} md={6} justifyContent={"flex-start"}>
            <Button
              variant="contained"
              startIcon={<FontAwesomeIcon icon={faPaperPlane} size={"1x"} />}
              size={"large"}
            >
              Send&nbsp;
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default Contact;
