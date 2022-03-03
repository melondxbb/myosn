import React from 'react';
import { Container, Grid, Paper, Box, Slide, Typography, Button } from '@material-ui/core';
import { useStyles } from './scan.styles';

const Scan = () => {
  const classes = useStyles();
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
                  multiple
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
      

    </Container>
  )
}

export default Scan;
