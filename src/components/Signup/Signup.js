import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Box, Container, Fade, Grid, InputAdornment, TextField, Typography, Button, IconButton } from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Lock from "@material-ui/icons/Lock";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

import { useStyles } from "./signup.styles";
import logo from "../../assets/osn-logo.png";
import { isAuthenticated } from "../../auth";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const classes = useStyles();
  const navigate = useNavigate();

  useEffect(() => {
    if(isAuthenticated()) navigate("/account");
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("token", "true");
    navigate("/account");
  }

  return (
    <Container className={classes.sign}>
      <Fade in={true}>
        <Grid container className={classes.signInner}>
          <Grid item>
            <img src={logo} className={classes.logo} alt="myOsn" />
          </Grid>
          <Grid item className={classes.signInnerHeader}>
              <Typography variant="h2">Sign Up</Typography>
          </Grid>
          <Grid item className={classes.signInnerBody}>
            <form onSubmit={handleSubmit}>
              <Box className={classes.formGroup}>
                <Grid container spacing={1} className={classes.field}>
                  <Grid item>
                    <AccountCircle />
                  </Grid>
                  <Grid item className={classes.fieldInput}>
                    <TextField 
                      fullWidth
                      id="input-email" 
                      label="Email"
                      type="email" 
                      variant="standard"
                      className={classes.emailInput}
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Grid>
                </Grid>
              </Box>
              <Box className={classes.formGroup}>
                <Grid container spacing={1} className={classes.field}>
                  <Grid item>
                    <Lock />
                  </Grid>
                  <Grid item className={classes.fieldInput}>
                    <TextField 
                      fullWidth
                      id="input-password" 
                      label="Password"
                      type={showPassword ? "text": "password"}
                      variant="standard"
                      className={classes.passwordInput}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}

                      InputProps={{endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={() => setShowPassword((prev) => prev ? false : true)}
                          >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      )}}
                    />
                  </Grid>
                </Grid>
              </Box>
              <Button 
                type="submit" 
                variant="contained" 
                color="primary"
                fullWidth
                className={classes.submit}
              >
                Create account
              </Button>
              <Link to="/signin" className={classes.altBtn}>
                <Button 
                  variant="outlined"
                  color="primary"
                  fullWidth
                  className={classes.submit}
                >
                  Already have an account?
                </Button>
              </Link>
            </form>
          </Grid>
        </Grid>
      </Fade>
    </Container>
  )
}

export default Signup;
