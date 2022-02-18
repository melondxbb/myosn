import React from "react";
import { Container, Slide, Paper, Grid, Typography, Button, Divider, Box, LinearProgress } from "@material-ui/core";
import { useStyles } from "./bills.styles";
import { billsData, historyBillData, creditData } from "./data";

const Bills = () => {
  const classes = useStyles();
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

    </Container>
  )
}

export default Bills;
