import React from 'react';
import { Box, Button, Divider, Grid, TextField, Typography, Tooltip, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import { useStyles } from './edit.styles';

const EditPersonal = (props) => {
  const classes = useStyles();

  const { personalData, setIsEditable } = props;

  return (
    <Grid container className={classes.infoContainer}>
      <Grid item className={classes.infoHead}>
        <Typography
          noWrap
          variant="h5"
          className={classes.infoHeadTxt}
        >
          Personal details
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
            {personalData[0].key} 
          </Typography>
          <Tooltip title="Not available" placement="top" enterTouchDelay={0}>
            <InfoIcon className={classes.infoIco} />
          </Tooltip>
        </Box>
        <Typography variant="body1" className={classes.infoVal}>
          {personalData[0].val}
        </Typography>
      </Grid>
      <Grid item className={classes.infoItem}>
        <TextField 
          autoFocus
          fullWidth
          label="Greeting name"
          type="text"
          variant="outlined"
          defaultValue={personalData[1].val}
          // value={value}
          // onChange={(e) => setValue(e.target.value)}
        />
      </Grid>
      {[2].map((item) => (
        <Grid item className={classes.infoItem} key={item}>
          <Box className={classes.infokeyBox}>
            <Typography variant="body2" className={classes.infoKey}>
              {personalData[item].key}
            </Typography>
            <Tooltip title="Not available" placement="top" enterTouchDelay={0}>
              <InfoIcon className={classes.infoIco} />
            </Tooltip>
          </Box>
          <Typography
            variant="body1"
            className={classes.infoVal}
          >
            {personalData[item].val}
          </Typography>
        </Grid>
      ))}
      {["Home number", "Work number"].map((txt) => (
        <Grid item className={classes.infoItem} key={txt}>
          <TextField 
            fullWidth
            label={txt}
            type="text"
            variant="outlined"
            defaultValue={personalData[3].val}
            // value={value}
            // onChange={(e) => setValue(e.target.value)}
          />
        </Grid>
      ))}
      <Grid item className={classes.infoItem}>
        <FormControl variant="outlined" className={classes.formControl} fullWidth>
          <InputLabel id="lang-select-outlined-label">Preferred language</InputLabel>
          <Select
            labelId="lang-select-outlined-label"
            id="lang-select-outlined"
            label="Preferred language"
            defaultValue={20}
            // value={value}
            // onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>English</MenuItem>
            <MenuItem value={20}>Arabic</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item className={classes.infoItem}>
        <FormControl variant="outlined" className={classes.formControl} fullWidth>
          <InputLabel id="tvsets-select-outlined-label">Tv sets</InputLabel>
          <Select
            labelId="tvsets-select-outlined-label"
            id="tvsets-select-outlined"
            label="Tv sets"
            defaultValue={5}
            // value={value}
            // onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {["0", "1", "2", "3", "4", "5", "More than 5"].map((val) => (
              <MenuItem value={val} key={val}>{val}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item className={classes.infoItem}>
        <FormControl variant="outlined" className={classes.formControl} fullWidth>
          <InputLabel id="kids-select-outlined-label">Kids</InputLabel>
          <Select
            labelId="kids-select-outlined-label"
            id="kids-select-outlined"
            label="Kids"
            defaultValue={2}
            // value={value}
            // onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {["Not provided", "1", "2", "3", "4", "5", "More than 5", "No kids"].map((val) => (
              <MenuItem value={val} key={val}>{val}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item className={classes.infoItem}>
        <FormControl variant="outlined" className={classes.formControl} fullWidth>
          <InputLabel id="residence-select-outlined-label">Residence type</InputLabel>
          <Select
            labelId="residence-select-outlined-label"
            id="residence-select-outlined"
            label="Residence type"
            defaultValue={"Villa"}
            // value={value}
            // onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {["Palace", "Villa", "Flat"].map((val) => (
              <MenuItem value={val} key={val}>{val}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item className={classes.infoItem}>
        <FormControl variant="outlined" className={classes.formControl} fullWidth>
          <InputLabel id="nationality-select-outlined-label">Nationality</InputLabel>
          <Select
            labelId="nationality-select-outlined-label"
            id="nationality-select-outlined"
            label="Nationality"
            defaultValue={"Australia"}
            // value={value}
            // onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {["Australia", "Villa", "Flat"].map((val) => (
              <MenuItem value={val} key={val}>{val}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>

    </Grid>
  )
}

export default EditPersonal;
