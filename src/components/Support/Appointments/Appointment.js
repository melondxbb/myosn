import { Dialog, DialogTitle, DialogActions, Button, Grid, Typography } from "@material-ui/core";
import { useStyles } from "./appointments.styles";

function Appointments({ onClose, open, data }) {
  const classes = useStyles();

  const handleClose = () => {
    onClose(false);
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="dialog-title" open={open} fullWidth maxWidth="xs">
      <DialogTitle id="dialog-title">Appointment overview</DialogTitle>
      <Grid container className={classes.apMain}>
        <Grid item className={classes.apItem}>
          <Typography variant="body2" className={classes.apKey}>
            Request name
          </Typography>
          <Typography
            variant="body1"
            className={classes.apVal}
          >
            {data.title}
          </Typography>
        </Grid>
        <Grid item className={classes.apItem}>
          <Typography variant="body2" className={classes.apKey}>
            Request number
          </Typography>
          <Typography
            variant="body1"
            className={classes.apVal}
          >
            {data.requestNumber}
          </Typography>
        </Grid>
        <Grid item className={classes.apItem}>
          <Typography variant="body2" className={classes.apKey}>
            Created on
          </Typography>
          <Typography
            variant="body1"
            className={classes.apVal}
          >
            {data.createdAt}
          </Typography>
        </Grid>
        {data.statusCode === 0 ? (
          <>
            <Grid item className={classes.apItem}>
              <Typography variant="body2" className={classes.apKey}>
                Cancelled on
              </Typography>
              <Typography
                variant="body1"
                className={classes.apVal}
              >
                {data.cancelledDt}
              </Typography>
            </Grid>
            <Grid item className={classes.apItem}>
              <Typography variant="body2" className={classes.apKey}>
                Reason for cancelling
              </Typography>
              <Typography
                variant="body1"
                className={classes.apVal}
              >
                {data.cancelReason}
              </Typography>
            </Grid>
          </>
        ) : (
          <Grid item className={classes.apItem}>
            <Typography variant="body2" className={classes.apKey}>
              Completed on
            </Typography>
            <Typography
              variant="body1"
              className={classes.apVal}
            >
              {data.completedDt}
            </Typography>
          </Grid>
        )}
        <Grid item className={classes.apItem}>
          <Typography variant="body2" className={classes.apKey}>
            Status
          </Typography>
          <Typography
            variant="body1"
            className={data.statusCode === 0 ? classes.apNo : classes.apYes}
          >
            {data.status}
          </Typography>
        </Grid>
      </Grid>
      <DialogActions>
        <Button onClick={handleClose} color="primary" autoFocus>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}

// Appointments.propTypes = {
//   onClose: PropTypes.func.isRequired,
//   open: PropTypes.bool.isRequired,
//   selectedValue: PropTypes.string.isRequired,
// };

export default Appointments;