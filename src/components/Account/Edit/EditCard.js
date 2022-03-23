import React from 'react';
import { Box, Button, Divider, Grid, TextField, Typography } from '@material-ui/core';
import { useStyles } from './edit.styles';

const EditCard = (props) => {
  const classes = useStyles();

  const { paymentData, setIsEditable } = props;

  const months = {
    jan: "01",
    feb: "02",
    mar: "03",
    apr: "04",
    may: "05",
    jun: "06",
    jul: "07",
    aug: "08",
    sep: "09",
    oct: "10",
    nov: "11",
    dec: "12",
  };

  const expMonth = paymentData[2].val.split(", ")[0];
  const expYear = paymentData[2].val.split(", ")[1].substr(2, 4);
  const exp = months[expMonth.toLowerCase()] + "/" + expYear;

  return (
    <Grid container className={classes.infoContainer}>
      <Grid item className={classes.infoHead}>
        <Typography
          noWrap
          variant="h5"
          className={classes.infoHeadTxt}
        >
          Payment details
        </Typography>
        <Box>
          <Button 
            variant="outlined" 
            color="primary"
            className={classes.cancel}
            onClick={() => setIsEditable(0)}
          >
            Cancel
          </Button>
          <Button 
            variant="contained" 
            color="primary"
            className={classes.cta}
            onClick={() => setIsEditable(0)}
          >
            Save
          </Button>
        </Box>
      </Grid>
      <Divider variant="middle" className={classes.divider} />
      <Grid item className={classes.infoItem}>
        <Grid container justifyContent="center" className={classes.bkContainer}>
          <Grid item xs={12} className={classes.bkFieldBoxA}>
            <TextField 
              autoFocus
              fullWidth
              label="Card Number"
              variant="outlined"
              defaultValue={paymentData[0].val}
            />
          </Grid>
          <Grid item xs={12} className={classes.bkFieldBoxA}>
            <TextField 
              fullWidth
              label="Cardholder name"
              variant="outlined"
              defaultValue={paymentData[1].val}
            />
          </Grid>
          <Grid item xs={12} className={classes.bkFieldBoxB}>
            <TextField 
              label="Valid Thru (MM/YY)"
              variant="outlined"
              defaultValue={exp}
            />
            <TextField 
              label="CVV"
              variant="outlined"
              defaultValue="***"
            />
          </Grid>

        </Grid>
      </Grid>
    </Grid>
  )
}

export default EditCard;
