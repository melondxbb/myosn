import React, { useState } from "react";
import { Container, Grid, Box, Typography, Button, Divider, Paper, Slide, Collapse, IconButton, FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';
import { useStyles } from "./support.styles";
import { appointmentsData } from "./data";
import Appointments from "./Appointments/Appointment";

const Support = () => {
  const [isDroped, setIsDroped] = useState(0);
  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState({});

  const handleClickOpen = (data) => {
    setModalData(data);
    setOpen(true);
  };

  const collapsedSize = 190;
  const classes = useStyles();
  return (
    <Container className={classes.support}>
      <Slide in={true} direction="up">
        <Paper className={classes.infoBox}>
          <Grid container className={classes.infoContainer}>
            <Grid item className={classes.infoHead}>
              <Typography
                noWrap
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
                noWrap
                variant="h5"
                className={classes.infoHeadTxt}
              >
                Have a signal issue ?
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

      <Slide in={true} direction="up">
        <Paper className={classes.infoBox}>
          <Collapse in={isDroped === 3} collapsedSize={collapsedSize}>
            <Grid container className={classes.infoContainer}>
              <Grid item className={classes.infoHead}>
                <Typography
                  noWrap
                  variant="h5"
                  className={classes.infoHeadTxt}
                >
                  Appointments
                </Typography>
                <Box>
                  <IconButton 
                    color="primary" 
                    aria-label="view more"
                    onClick={() => setIsDroped((prev) => prev === 3 ? 0 : 3)}
                  >
                    <UnfoldMoreIcon />
                  </IconButton>
                  
                </Box>
              </Grid>
              <Divider variant="middle" className={classes.divider} />
              <Grid item className={classes.infoItem}>
                <Typography variant="body2" className={classes.subHead}>
                  Completed appointments
                </Typography>
              </Grid>
              {appointmentsData.map((item) => (
                <Grid 
                  item 
                  key={item.requestNumber}
                  className={classes.pointItem}
                  onClick={() => handleClickOpen(item)}
                >
                  <Typography variant="body2" className={classes.pointTitle}>
                    {item.title}
                  </Typography>
                  <Box title={item.status}>
                    {
                      item.statusCode === 0 ? 
                      <CancelIcon title="Cancelled" className={classes.crossIco} /> : 
                      <CheckCircleIcon title="Completed" className={classes.checkIco} />
                    }
                  </Box>
                </Grid>
              ))}
              <Appointments data={modalData} open={open} onClose={setOpen} />
              <Grid item className={classes.infoItem}>
                <Button 
                  variant="contained" 
                  color="primary"
                  className={classes.cta}
                  fullWidth
                >
                  reinstall or relocate
                </Button>
              </Grid>
            </Grid>
          </Collapse>
        </Paper>
      </Slide>

    </Container>
  )
}

export default Support;
