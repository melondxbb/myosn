import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Container, Slide, Grid, Paper, Typography, Divider } from "@material-ui/core";
import { useStyles } from "./account.styles";
import { accountData, personalData, addressData } from "./data";
import EditModal from "../../core/EditModal/EditModal";

const Account = () => {
  const [accountInfo, setAccountInfo] = useState(accountData);
  const [modalBody, setModalBody] = useState(<></>);
  const [isEditable, setIsEditable] = useState(false);

  // console.log(accountInfo);
  const handleEdit = () => {
    setAccountInfo((prev) => {
      return prev;
    });
    
  }
  
  const navigate = useNavigate();
  const classes = useStyles();
  return (
    <Container className={classes.account}>
      <Slide in={true} direction="up">
        <Paper className={classes.infoBox}>
          { !isEditable && (
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
                    variant="contained" 
                    color="primary"
                    className={classes.cta}
                    onClick={() => setIsEditable(true)}
                  >
                    Edit
                  </Button>
                  
                </Box>
              </Grid>
              <Divider variant="middle" className={classes.divider} />
              {accountInfo.map((item) => (
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
          )}
          { isEditable && (
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
                    onClick={() => setIsEditable(false)}
                  >
                    Cancel
                  </Button>
                  <Button 
                    variant="contained" 
                    color="primary"
                    className={classes.cta}
                    onClick={() => setIsEditable(false)}
                  >
                    Save
                  </Button>
                  
                </Box>
              </Grid>
              <Divider variant="middle" className={classes.divider} />
              {accountInfo.map((item) => (
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
          )}
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
                Personal details
              </Typography>
              <Box>
                <Button 
                  variant="contained" 
                  color="primary"
                  className={classes.cta}
                >
                  Edit
                </Button>
              </Box>
            </Grid>
            <Divider variant="middle" className={classes.divider} />
            {personalData.map((item) => (
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
                Address details
              </Typography>
              <Box>
                <Button 
                  variant="contained" 
                  color="primary"
                  className={classes.cta}
                >
                  Edit
                </Button>
              </Box>
            </Grid>
            <Divider variant="middle" className={classes.divider} />
            {addressData.map((item) => (
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
        <Box className={classes.logout}>
          <Button 
            variant="outlined" 
            color="primary"
            fullWidth
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/signin");
            }}
          >
            Logout
          </Button>
        </Box>
      </Slide>
      <>
        { modalBody }
      </>
    </Container>
  )
}

export default Account;
