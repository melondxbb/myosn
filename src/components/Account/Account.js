import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Container, Slide, Collapse, Grid, Paper, Typography, Switch, Avatar, Divider, IconButton } from "@material-ui/core";
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore';

import { useStyles } from "./account.styles";
import { accountData, personalData, addressData, paymentData } from "./data";
import EditModal from "../../core/EditModal/EditModal";
import EditAccount from "./Edit/EditAccount";
import EditAddress from "./Edit/EditAddress";
import EditPersonal from "./Edit/EditPersonal";
import cardLogo from "../../assets/icon-mastercard.svg";

const Account = () => {
  const [accountInfo, setAccountInfo] = useState(accountData);
  const [modalBody, setModalBody] = useState(<></>);
  const [isEditable, setIsEditable] = useState(0);
  const [isDroped, setIsDroped] = useState(0);

  const [contactWay, setContactWay] = useState({
    sms1: true,
    email1: true,
    bmail1: true,
    sms2: false,
    email2: true,
    bmail2: true,
  });

  const handleSwitch = (event) => {
    setContactWay({ ...contactWay, [event.target.name]: event.target.checked });
  };

  const handleEnableAll = () => {
    setContactWay({
      sms1: true,
      email1: true,
      bmail1: true,
      sms2: true,
      email2: true,
      bmail2: true,
    });
  }
  

  const collapsedSize = 190;

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
          { isEditable !== 1 && (
            <Collapse in={isDroped === 1} collapsedSize={collapsedSize}>
              <Grid container className={classes.infoContainer}>
                <Grid item className={classes.infoHead}>
                  <Typography
                    noWrap
                    variant="h5"
                    className={classes.infoHeadTxt}
                  >
                    Account details
                  </Typography>
                  <Box>
                    <IconButton 
                      color="primary" 
                      aria-label="view more"
                      onClick={() => setIsDroped((prev) => prev === 1 ? 0 : 1)}
                    >
                      <UnfoldMoreIcon />
                    </IconButton>
                    <Button 
                      variant="contained" 
                      color="primary"
                      className={classes.cta}
                      onClick={() => setIsEditable(1)}
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
            </Collapse>
          )}
          { isEditable === 1 && (
            <>
              <EditAccount 
                accountInfo={accountInfo} 
                setIsEditable={setIsEditable} 
              />
            </>
          )}
        </Paper>
      </Slide>

      <Slide in={true} direction="up">
        <Paper className={classes.infoBox}>
          { isEditable !== 2 && (

            <Collapse in={isDroped === 2} collapsedSize={collapsedSize}>
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
                    <IconButton 
                      color="primary" 
                      aria-label="view more"
                      onClick={() => setIsDroped((prev) => prev === 2 ? 0 : 2)}
                    >
                      <UnfoldMoreIcon />
                    </IconButton>  
                    <Button 
                      variant="contained" 
                      color="primary"
                      className={classes.cta}
                      onClick={() => setIsEditable(2)}
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
            </Collapse>
          )}
          { isEditable === 2 && (
            <>
            <EditPersonal 
              personalData={personalData} 
              setIsEditable={setIsEditable} 
            />
            </>
          )}
        </Paper>
      </Slide>

      

      <Slide in={true} direction="up">
        <Paper className={classes.infoBox}>
          { isEditable !== 3 && (
            <Collapse in={isDroped === 3} collapsedSize={collapsedSize}>
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
                    <IconButton 
                      color="primary" 
                      aria-label="view more"
                      onClick={() => setIsDroped((prev) => prev === 3 ? 0 : 3)}
                    >
                      <UnfoldMoreIcon />
                    </IconButton>
                    <Button 
                      variant="contained" 
                      color="primary"
                      className={classes.cta}
                      onClick={() => setIsEditable(3)}
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
            </Collapse>
          )}
          { isEditable === 3 && (
            <EditAddress 
              addressData={addressData}
              setIsEditable={setIsEditable} 
            />
          )}
        </Paper>
      </Slide>

      <Slide in={true} direction="up">
        <Paper className={classes.infoBox}>
            <Collapse in={isDroped === 4} collapsedSize={collapsedSize}>
            <Grid container className={classes.infoContainer}>
                <Grid item className={classes.infoHead}>
                  <Typography
                    noWrap
                    variant="h5"
                    className={classes.infoHeadTxt}
                  >
                    Contact preferences
                  </Typography>
                  <Box>
                    <IconButton 
                      color="primary" 
                      aria-label="view more"
                      onClick={() => setIsDroped((prev) => prev === 4 ? 0 : 4)}
                    >
                      <UnfoldMoreIcon />
                    </IconButton>
                    <Button 
                      variant="contained" 
                      color="primary"
                      className={classes.cta}
                      onClick={handleEnableAll}
                    >
                      Enable all
                    </Button>
                  </Box>
                </Grid>
                <Divider variant="middle" className={classes.divider} />
                <Grid item className={classes.infoItem}>
                  <Typography variant="body2" className={classes.infoKey}>
                    Recommend me new movies, series and events
                  </Typography>
                  <Box className={classes.optItem}>
                    <Typography
                      variant="body1"
                      className={classes.optVal}
                    >
                      Via SMS
                    </Typography>
                    <Switch
                      checked={contactWay.sms1}
                      onChange={handleSwitch}
                      color="primary"
                      name="sms1"
                      inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                  </Box>
                  <Divider variant="middle" className={classes.divider} />
                  <Box className={classes.optItem}>
                    <Typography
                      variant="body1"
                      className={classes.optVal}
                    >
                      Via Email
                    </Typography>
                    <Switch
                      checked={contactWay.email1}
                      onChange={handleSwitch}
                      color="primary"
                      name="email1"
                      inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                  </Box>
                  <Divider variant="middle" className={classes.divider} />
                  <Box className={classes.optItem}>
                    <Typography
                      variant="body1"
                      className={classes.optVal}
                    >
                      Via Bmail
                    </Typography>
                    <Switch
                      checked={contactWay.bmail1}
                      onChange={handleSwitch}
                      color="primary"
                      name="bmail1"
                      inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                  </Box>
                </Grid>
                <Grid item className={classes.infoItem}>
                  <Typography variant="body2" className={classes.infoKey}>
                    Inform me about promotions and competitions
                  </Typography>
                  <Box className={classes.optItem}>
                    <Typography
                      variant="body1"
                      className={classes.optVal}
                    >
                      Via SMS
                    </Typography>
                    <Switch
                      checked={contactWay.sms2}
                      onChange={handleSwitch}
                      color="primary"
                      name="sms2"
                      inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                  </Box>
                  <Divider variant="middle" className={classes.divider} />
                  <Box className={classes.optItem}>
                    <Typography
                      variant="body1"
                      className={classes.optVal}
                    >
                      Via Email
                    </Typography>
                    <Switch
                      checked={contactWay.email2}
                      onChange={handleSwitch}
                      color="primary"
                      name="email2"
                      inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                  </Box>
                  <Divider variant="middle" className={classes.divider} />
                  <Box className={classes.optItem}>
                    <Typography
                      variant="body1"
                      className={classes.optVal}
                    >
                      Via Bmail
                    </Typography>
                    <Switch
                      checked={contactWay.bmail2}
                      onChange={handleSwitch}
                      color="primary"
                      name="bmail2"
                      inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Collapse>
        </Paper>
      </Slide>

      <Slide in={true} direction="up">
        <Paper className={classes.infoBox}>
          <Collapse in={isDroped === 5} collapsedSize={collapsedSize}>
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
                  <IconButton 
                    color="primary" 
                    aria-label="view more"
                    onClick={() => setIsDroped((prev) => prev === 5 ? 0 : 5)}
                  >
                    <UnfoldMoreIcon />
                  </IconButton>
                  <Button 
                    variant="contained" 
                    color="primary"
                    className={classes.cta}
                    // onClick={handleEnableAll}
                  >
                    Edit
                  </Button>
                </Box>
              </Grid>
              <Divider variant="middle" className={classes.divider} />
              <Grid item className={classes.cardBox}>
                <Box className={classes.cardItem}>
                  <Typography
                    variant="body1"
                    className={classes.cardVal}
                  >
                    Card ending in
                  </Typography>
                  <Typography
                    variant="body1"
                    className={classes.cardEnd}
                  >
                    2155
                  </Typography>
                  <Avatar aria-label="logo" title="mastercard" className={classes.cardLogo} src={cardLogo} />
                </Box>
              </Grid>
              <Divider variant="middle" className={classes.divider} />
              {paymentData.map((item) => (
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
          </Collapse>
        </Paper>
      </Slide>

      <Slide in={true} direction="up">
        <Box className={classes.logout}>
          <Button 
            variant="outlined" 
            color="primary"
            fullWidth
            onClick={() => navigate("/scan")}
            className={classes.scan}
          >
            Camera
          </Button>

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
