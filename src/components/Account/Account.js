import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Container, Slide, Collapse, Grid, Paper, Typography, Divider, IconButton } from "@material-ui/core";
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore';

import { useStyles } from "./account.styles";
import { accountData, personalData, addressData } from "./data";
import EditModal from "../../core/EditModal/EditModal";
import EditAccount from "./Edit/EditAccount";

const Account = () => {
  const [accountInfo, setAccountInfo] = useState(accountData);
  const [modalBody, setModalBody] = useState(<></>);
  const [isEditable, setIsEditable] = useState(0);
  const [isDroped, setIsDroped] = useState(0);

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
          { isEditable === 0 && (
            <Collapse in={isDroped === 1} collapsedSize={collapsedSize}>
              <Grid container className={classes.infoContainer}>
                <Grid item className={classes.infoHead}>
                  <Typography
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
          <Collapse in={isDroped === 2} collapsedSize={collapsedSize}>
            <Grid container className={classes.infoContainer}>
              <Grid item className={classes.infoHead}>
                <Typography
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
        </Paper>
      </Slide>

      <Slide in={true} direction="up">
        <Paper className={classes.infoBox}>
          <Collapse in={isDroped === 3} collapsedSize={collapsedSize}>
            <Grid container className={classes.infoContainer}>
              <Grid item className={classes.infoHead}>
                <Typography
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
