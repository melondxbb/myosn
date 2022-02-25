import React, { useState } from 'react';
import { Box, Button, Divider, Grid, TextField, Typography, InputAdornment, IconButton, Tooltip } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

import { useStyles } from './edit.styles';

const EditAccount = (props) => {
  const classes = useStyles();
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { accountInfo, setIsEditable } = props;
  console.log(props);
  return (
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
        <Box className={classes.infokeyBox}>
          <Typography variant="body2" className={classes.infoKey}>
            {accountInfo[0].key} 
          </Typography>
          <Tooltip title="Not available">
            <InfoIcon className={classes.infoIco} />
          </Tooltip>
        </Box>
        <Typography
          variant="body1"
          className={classes.infoVal}
        >
          {accountInfo[0].val}
        </Typography>
      </Grid>
      <Grid item className={classes.infoItem}>
        <Typography variant="body2" className={classes.infoKey}>
          Change password
        </Typography>
        <TextField 
          autoFocus
          fullWidth
          id="current-password" 
          label="Current password"
          type={showPassword ? "text": "password"}
          variant="outlined"
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
        <Box className={classes.newBox}>
          <TextField 
            fullWidth
            id="new-password" 
            label="New password"
            type={showPassword ? "text": "password"}
            variant="outlined"
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
          <TextField 
            fullWidth
            id="confirm-new-password" 
            label="Confirm new password"
            type={showPassword ? "text": "password"}
            variant="outlined"
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
        </Box>
      </Grid>
      <Grid item className={classes.infoItem}>
        <Box className={classes.infokeyBox}>
          <Typography variant="body2" className={classes.infoKey}>
            {accountInfo[2].key} 
          </Typography>
          <Tooltip title="Not available">
            <InfoIcon className={classes.infoIco} />
          </Tooltip>
        </Box>
        <Typography
          variant="body1"
          className={classes.infoVal}
        >
          {accountInfo[2].val}
        </Typography>
      </Grid>
    </Grid>
  )
}

export default EditAccount;
