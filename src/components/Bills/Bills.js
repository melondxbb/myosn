import React from "react";
import { Container, Slide, Paper, Grid, Typography, Button, Divider, Box, LinearProgress } from "@material-ui/core";
import { KeyboardDatePicker } from "@material-ui/pickers";
import NotInterestedIcon from '@material-ui/icons/NotInterested';

import { useStyles } from "./bills.styles";
import { billsData, historyBillData, creditData } from "./data";

const Bills = () => {
  const classes = useStyles();
  const [startDate, setStartDate] = React.useState(null);
  const [endDate, setEndDate] = React.useState(null);

  return (
    <Container className={classes.bills}>
      <Slide in={true} direction="up">
        <Paper className={classes.infoBox}>
          <Grid container className={classes.infoContainer}>
            <Grid item className={classes.infoHead}>
              <Typography
                variant="h5"
                className={classes.infoHeadTxt}
              >
                My bills
              </Typography>
              <Box>
                <Button 
                  variant="contained" 
                  color="primary"
                  className={classes.edit}
                >
                  Pay
                </Button>
              </Box>
            </Grid>
            <Divider variant="middle" className={classes.divider} />
            {billsData.map((item) => (
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
            <Grid item className={classes.infoItem}>
              <LinearProgress 
                title="231 days left"
                variant="determinate" 
                value={70} 
                classes={{
                  root: classes.lineRoot,
                  bar: classes.bar,
                }}
              />
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
                Bill history
              </Typography>
              <Box>
                <Button 
                  variant="contained" 
                  color="primary"
                  className={classes.edit}
                >
                  View summary
                </Button>
              </Box>
            </Grid>
            <Divider variant="middle" className={classes.divider} />
            {historyBillData.map((item) => (
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
                OSN Credit
              </Typography>
              <Box>
                <Button 
                  variant="contained" 
                  color="primary"
                  className={classes.edit}
                >
                  Add credit
                </Button>
              </Box>
            </Grid>
            <Divider variant="middle" className={classes.divider} />
            {creditData.map((item) => (
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
                Find invoices
              </Typography>
              <Box>
                <Button 
                  variant="contained" 
                  color="primary"
                  className={classes.edit}
                  disabled={(startDate === null) || (endDate === null)}
                >
                  find
                </Button>
              </Box>
            </Grid>
            <Divider variant="middle" className={classes.divider} />
            <Grid item className={classes.dateContainer}>
              <Box className={classes.dateBox}>
                <KeyboardDatePicker 
                  inputVariant="outlined"
                  id="date-picker-start"
                  label="Start date"
                  format="MM/dd/yyyy"
                  value={startDate}
                  onChange={(dt) => setStartDate(dt)}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />
                <KeyboardDatePicker 
                  inputVariant="outlined"
                  id="date-picker-end"
                  label="End date"
                  format="MM/dd/yyyy"
                  value={endDate}
                  onChange={(dt) => setEndDate(dt)}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />
              </Box>
            </Grid>
            <Grid item className={classes.resultNA}>
              <Typography variant="h6" className={classes.resultTxt}>
                No available invoices.
              </Typography>
              <NotInterestedIcon color="primary" />
            </Grid>
          </Grid>
        </Paper>
      </Slide>

    </Container>
  )
}

export default Bills;
