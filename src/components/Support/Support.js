import React from 'react';
import { Container, Grid, Typography, Box, Button, Divider, Paper, Fade, Slide, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { useStyles } from './support.styles';

const Support = () => {
  const classes = useStyles();
  return (
    <Container className={classes.support}>
      <Slide in={true} direction="up">
        <Paper className={classes.infoBox}>
          <Grid container className={classes.infoContainer}>
            <Grid item className={classes.infoHead}>
              <Typography
                variant="h5"
                className={classes.infoHeadTxt}
              >
                Need help ?
              </Typography>
              
            </Grid>
            <Divider variant="middle" className={classes.divider} />
            <Grid item className={classes.infoItem}>
              <Button 
                variant="contained" 
                color="primary"
                fullWidth
                className={classes.sendBtn}
              >
                Read our faqs
              </Button>
            </Grid>
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
                Have a signal issue?
              </Typography>
              
            </Grid>
            <Divider variant="middle" className={classes.divider} />
            <Grid item className={classes.infoItem}>
              <FormControl variant="filled" className={classes.formControl}>
                <InputLabel id="demo-simple-select-filled-label">Select your Signal</InputLabel>
                <Select
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  // value={age}
                  // onChange={handleChange}
                >
                  <MenuItem value=""><em>None</em></MenuItem>
                  <MenuItem value={10}>Code (4d) Service blocked</MenuItem>
                  <MenuItem value={20}>Reset my decoder pin</MenuItem>
                  <MenuItem value={30}>Code (4) Service blocked</MenuItem>
                  <MenuItem value={40}>Code (6) This card is not activated for use</MenuItem>
                </Select>
              </FormControl>
              
              <FormControl variant="filled" className={classes.formControl}>
                <InputLabel id="demo-simple-select-filled-label1">Select your Smartcard No</InputLabel>
                <Select
                  labelId="demo-simple-select-filled-label1"
                  id="demo-simple-select-filled1"
                  // value={age}
                  // onChange={handleChange}
                >
                  <MenuItem value=""><em>None</em></MenuItem>
                  <MenuItem value={10}>0010724656</MenuItem>
                </Select>
              </FormControl>
              <Button 
                variant="contained" 
                color="primary"
                fullWidth
                className={classes.btn}
              >
                Send signal
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Slide>

    </Container>
  )
}

export default Support;
