import React from 'react';
import { Box, Button, Divider, Grid, TextField, Typography, Tooltip } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import { useStyles } from './edit.styles';

const EditAddress = (props) => {
  const classes = useStyles();

  const { addressData, setIsEditable } = props;

  return (
    <Grid container className={classes.infoContainer}>
      <Grid item className={classes.infoHead}>
        <Typography
          noWrap
          variant="h5"
          className={classes.infoHeadTxt}
        >
          Address details
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
      {[0, 1, 2].map((item) => (
        <Grid item className={classes.infoItem} key={item}>
          <Box className={classes.infokeyBox}>
            <Typography variant="body2" className={classes.infoKey}>
              {addressData[item].key}
            </Typography>
            <Tooltip title="Not available" placement="top" enterTouchDelay={0}>
              <InfoIcon className={classes.infoIco} />
            </Tooltip>
          </Box>
          <Typography
            variant="body1"
            className={classes.infoVal}
          >
            {addressData[item].val}
          </Typography>
        </Grid>
      ))}
      <Grid item className={classes.infoItem}>
        <TextField 
          autoFocus
          fullWidth
          label="PO Box"
          type="text"
          variant="outlined"
          // value={password}
          // onChange={(e) => setPassword(e.target.value)}
        />
      </Grid>
    </Grid>
  )
}

export default EditAddress;
