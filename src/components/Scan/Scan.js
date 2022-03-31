import React, { useEffect, useState } from 'react';
import { Container, Grid, Paper, Box, Slide, Typography, Button } from '@material-ui/core';
import { useStyles } from './scan.styles';

const Scan = () => {
  const classes = useStyles();
  // User's geolocation
  const [geo, setGeo] = useState({lat: 0, long: 0});

  const reqCam = () => {
    if("mediaDevices" in navigator && "getUserMedia" in navigator.mediaDevices){
      console.log("Ask camera access.");

      navigator.mediaDevices.getUserMedia({video: true})
      .then(() => alert("Camera Permission Granted !"))
      .catch((err) => {
        alert("Camera Permission Denied !");
        console.log(err.message);
      });
    }
  }
  
  const reqLoc = () => {
    console.log("Loc start");
    if("geolocation" in navigator && "getCurrentPosition" in navigator.geolocation){
      console.log("Ask location access.");
      
      navigator.geolocation.getCurrentPosition((pos) => {
        setGeo({
          lat: pos.coords.latitude,
          long: pos.coords.longitude
        });
        console.log("Lat: ", pos.coords.latitude);
        console.log("Long: ", pos.coords.longitude);
        
      }, (err) => {
        console.log("Location err: ", err.message);
      });

    }
  }
  

  // useEffect(() => {
  //   reqCam();
  // }, []);

  return (
    <Container className={classes.scan}>

      <Slide in={true} direction="up">
        <Paper className={classes.infoBox}>
          <Grid container className={classes.infoContainer}>
            <Grid item className={classes.infoHead}>
              <Typography
                noWrap
                variant="h5"
                className={classes.infoHeadTxt}
              >
                Ask camera permission
              </Typography>
              <Box>
                <label htmlFor="cam1">
                  <Button 
                    variant="contained" 
                    color="primary"
                    className={classes.edit}
                    component="span"
                    onClick={reqCam}
                  >
                    camera req
                  </Button>
                </label>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Slide>
      
      <Slide in={true} direction="up">
        <Paper className={classes.infoBox}>
          <Grid container className={classes.infoContainer}>
            <Grid item className={classes.infoHead}>
              <Typography
                noWrap
                variant="h5"
                className={classes.infoHeadTxt}
              >
                Lat: {geo.lat}, long: {geo.long}
              </Typography>
              <Box>
                <label htmlFor="loc1">
                  <Button 
                    variant="contained" 
                    color="primary"
                    className={classes.edit}
                    component="span"
                    onClick={reqLoc}
                  >
                    location
                  </Button>
                </label>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Slide>

      <Slide in={true} direction="up">
        <Paper className={classes.infoBox}>
          <Grid container className={classes.infoContainer}>
            <Grid item className={classes.infoHead}>
              <Typography
                noWrap
                variant="h5"
                className={classes.infoHeadTxt}
              >
                type="file"
              </Typography>
              <Box>
                <input 
                  accept="image/*"
                  className={classes.input}
                  id="input1"
                  multiple
                  type="file"
                />
                <label htmlFor="input1">
                  <Button 
                    variant="contained" 
                    color="primary"
                    className={classes.edit}
                    component="span"
                  >
                    Upload img
                  </Button>
                </label>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Slide>

      <Slide in={true} direction="up">
        <Paper className={classes.infoBox}>
          <Grid container className={classes.infoContainer}>
            <Grid item className={classes.infoHead}>
              <Typography
                noWrap
                variant="h5"
                className={classes.infoHeadTxt}
              >
                capture="camera" type="file"
              </Typography>
              <Box>
                <input 
                  accept="image/*"
                  className={classes.input}
                  id="input2"
                  type="file"
                  capture="camera"
                />
                <label htmlFor="input2">
                  <Button 
                    variant="contained" 
                    color="primary"
                    className={classes.edit}
                    component="span"
                  >
                    Camera
                  </Button>
                </label>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Slide>

      <Slide in={true} direction="up">
        <Paper className={classes.infoBox}>
          <Grid container className={classes.infoContainer}>
            <Grid item className={classes.infoHead}>
              <Typography
                noWrap
                variant="h5"
                className={classes.infoHeadTxt}
              >
                capture="user" type="file"
              </Typography>
              <Box>
                <input 
                  accept="image/*"
                  className={classes.input}
                  id="input3"
                  type="file"
                  capture="user"
                />
                <label htmlFor="input3">
                  <Button 
                    variant="contained" 
                    color="primary"
                    className={classes.edit}
                    component="span"
                  >
                    Open Camera
                  </Button>
                </label>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Slide>
      
      <Slide in={true} direction="up">
        <Paper className={classes.infoBox}>
          <Grid container className={classes.infoContainer}>
            <Grid item className={classes.infoHead}>
              <Typography
                noWrap
                variant="h5"
                className={classes.infoHeadTxt}
              >
                capture="environment" type="file"
              </Typography>
              <Box>
                <input 
                  accept="image/*"
                  className={classes.input}
                  id="input4"
                  type="file"
                  capture="environment"
                />
                <label htmlFor="input4">
                  <Button 
                    variant="contained" 
                    color="primary"
                    className={classes.edit}
                    component="span"
                  >
                    Ios Camera
                  </Button>
                </label>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Slide>

    </Container>
  )
}

export default Scan;
