import React from "react";
import { Container, Slide, Divider, Grid, Typography, Button, Paper, Box, CardHeader, Avatar, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

import { useStyles } from "./packs.styles";
import homeLogo from "../../assets/home-logo.png";
import artLogo from "../../assets/art-logo.png";
import pinoyLogo from "../../assets/pinoy-logo.jpg";
import alfaLogo from "../../assets/alfa-logo.png";

const Packs = () => {
  const classes = useStyles();
  return (
    <Container className={classes.packs}>
      <Slide in={true} direction="up">
        <Paper className={classes.infoBox}>
          <Grid container className={classes.infoContainer}>
            <Grid item className={classes.infoHead}>
              <Typography
                noWrap
                variant="h5"
                className={classes.infoHeadTxt}
              >
                My packs
              </Typography>
              <Box>
                <Button 
                  variant="contained" 
                  color="primary"
                  className={classes.edit}
                >
                  renew
                </Button>
              </Box>
            </Grid>
            <Divider variant="middle" className={classes.divider} />
            <CardHeader
              avatar={
                <Avatar aria-label="logo" classes={{ root: classes.avatar}} src={homeLogo} />
              }
              action={
                <IconButton aria-label="settings">
                  <DeleteIcon />
                </IconButton>
              }
              classes={{
                root: classes.cardHead,
                action: classes.cardAction
              }}
              title="OSN Home"
              subheader="AED 1300.00 per year"
            />
            <CardHeader
              avatar={
                <Avatar aria-label="logo" classes={{ root: classes.avatar}} src={artLogo} />
              }
              action={
                <IconButton aria-label="settings">
                  <DeleteIcon />
                </IconButton>
              }
              classes={{
                root: classes.cardHead,
                action: classes.cardAction
              }}
              title="Art OptIn"
              subheader="AED 120.00 per year"
            />
          </Grid>
        </Paper>
      </Slide>

      <Slide in={true} direction="up">
        <Paper className={classes.infoBox}>
          <Grid container className={classes.infoContainer}>
            <Grid item className={classes.infoHead}>
              <Typography
                noWrap
                variant="h5"
                className={classes.infoHeadTxt}
              >
                Add more packs
              </Typography>
              <Box>
                <Button 
                  variant="contained" 
                  color="primary"
                  className={classes.edit}
                >
                  Add all
                </Button>
              </Box>
            </Grid>
            <Divider variant="middle" className={classes.divider} />
            <CardHeader
              avatar={
                <Avatar aria-label="logo" classes={{ root: classes.avatar}} src={pinoyLogo} />
              }
              action={
                <IconButton aria-label="settings">
                  <AddShoppingCartIcon />
                </IconButton>
              }
              classes={{
                root: classes.cardHead,
                action: classes.cardAction
              }}
              title="Pinoy Plus Extra"
              subheader="AED 1296.00 per year"
            />
            <CardHeader
              avatar={
                <Avatar aria-label="logo" classes={{ root: classes.avatar}} src={alfaLogo} />
              }
              action={
                <IconButton aria-label="settings">
                  <AddShoppingCartIcon />
                </IconButton>
              }
              classes={{
                root: classes.cardHead,
                action: classes.cardAction
              }}
              title="Alfa Add-On"
              subheader="AED 740.00 per year"
            />
          </Grid>
        </Paper>
      </Slide>

    </Container>
  )
}

export default Packs;
