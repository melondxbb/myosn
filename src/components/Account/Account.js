import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Container, Fade, Slide, Grid, Paper, Typography, Divider } from '@material-ui/core';
import { useStyles } from './account.styles';
import { accountData, personalData, addressData } from "./data";

const Account = () => {
  const navigate = useNavigate();
  const classes = useStyles();
  return (
    <Container className={classes.account}>
      <Slide in={true} direction="up">
        <Paper className={classes.infoBox}>
          <Grid container className={classes.infoContainer}>
            <Grid item className={classes.infoHead}>
              <Typography
                variant="h5"
                className={classes.infoHeadTxt}
              >
                Account details
              </Typography>
              <Box>
                <Button 
                  variant="contained" 
                  color="primary"
                  className={classes.edit}
                >
                  Edit
                </Button>
              </Box>
            </Grid>
            <Divider variant="middle" className={classes.divider} />
            {accountData.map((item) => (
              <Grid item className={classes.infoItem} key={item.key}>
                <Typography variant="body2" className={classes.infoKey}>
                  {item.key}
                </Typography>
                <Typography
                  variant="body1"
                  className={classes.infoVal}
                >
                  {item.val}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Slide>

      <Slide in={true} direction="up">
        <Paper className={classes.infoBox}>
          <Grid container className={classes.infoContainer}>
            <Grid item className={classes.infoHead}>
              <Typography
                variant="h5"
                className={classes.infoHeadTxt}
              >
                Personal details
              </Typography>
              <Box>
                <Button 
                  variant="contained" 
                  color="primary"
                  className={classes.edit}
                >
                  Edit
                </Button>
              </Box>
            </Grid>
            <Divider variant="middle" className={classes.divider} />
            {personalData.map((item) => (
              <Grid item className={classes.infoItem} key={item.key}>
                <Typography variant="body2" className={classes.infoKey}>
                  {item.key}
                </Typography>
                <Typography
                  variant="body1"
                  className={classes.infoVal}
                >
                  {item.val}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Slide>

      <Slide in={true} direction="up">
        <Paper className={classes.infoBox}>
          <Grid container className={classes.infoContainer}>
            <Grid item className={classes.infoHead}>
              <Typography
                variant="h5"
                className={classes.infoHeadTxt}
              >
                Address details
              </Typography>
              <Box>
                <Button 
                  variant="contained" 
                  color="primary"
                  className={classes.edit}
                >
                  Edit
                </Button>
              </Box>
            </Grid>
            <Divider variant="middle" className={classes.divider} />
            {addressData.map((item) => (
              <Grid item className={classes.infoItem} key={item.key}>
                <Typography variant="body2" className={classes.infoKey}>
                  {item.key}
                </Typography>
                <Typography
                  variant="body1"
                  className={classes.infoVal}
                >
                  {item.val}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Slide>

      <Slide in={true} direction="up">
        <Box className={classes.logout}>
          <Button 
            variant="outlined" 
            color="primary"
            fullWidth
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/signin");
            }}
          >
            Logout
          </Button>
        </Box>
      </Slide>
    </Container>
  )
}

export default Account;
