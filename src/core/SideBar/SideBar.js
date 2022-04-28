import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Receipt from "@material-ui/icons/Receipt";
import Category from "@material-ui/icons/Category";
import Help from "@material-ui/icons/Help";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import CameraAltIcon from '@material-ui/icons/CameraAlt';

import { useStyles } from "./sideBar.styles";
import { isAuthenticated } from "../../auth";
import logo from "../../assets/myosn-logo.png";

const SideBar = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.pathname);

  const drawer = (
    <div className={classes.drawerContent}>
      <Box className={classes.logoContainer}>
        <Box className={classes.logo}>
          <img src={logo} className={classes.logoImg} alt="myOsn" />
        </Box>
        <Box>
          <Typography variant="caption" gutterBottom>
            Smart card
          </Typography>
          <Typography variant="subtitle2">
            0015323215
          </Typography>
        </Box>
      </Box>
      <Divider />
      <List>
        <ListItem 
          button 
          classes={{ root: classes.listItem}}
          selected={location.pathname === "/account"}
          onClick={() => navigate("/account")}
        >
          <ListItemIcon>{<AccountCircle />}</ListItemIcon>
          <ListItemText primary={"My Account"} />
        </ListItem>
        <ListItem 
          button
          classes={{ root: classes.listItem}} 
          selected={location.pathname === "/bills"}
          onClick={() => navigate("/bills")}
        >
          <ListItemIcon>{<Receipt />}</ListItemIcon>
          <ListItemText primary={"Bills"} />
        </ListItem>
        <ListItem 
          button
          classes={{ root: classes.listItem}} 
          selected={location.pathname === "/packs"}
          onClick={() => navigate("/packs")}
        >
          <ListItemIcon>{<Category />}</ListItemIcon>
          <ListItemText primary={"Packs"} />
        </ListItem>
        <ListItem 
          button
          classes={{ root: classes.listItem}} 
          selected={location.pathname === "/support"}
          onClick={() => navigate("/support")}
        >
          <ListItemIcon>{<Help />}</ListItemIcon>
          <ListItemText primary={"Support"} />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem 
          button
          classes={{ root: classes.listItem}} 
          selected={location.pathname === "/scan"} 
          onClick={() => navigate("/scan")} 
        >
          <ListItemIcon>{<CameraAltIcon />}</ListItemIcon>
          <ListItemText primary={"Camera"} />
        </ListItem>
        {["FAQs", "Renew", "Sign out"].map((text, index) => (
          <ListItem button key={text} onClick={() => {
            localStorage.removeItem("token");
            navigate("/signin");
          }}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <>
      { isAuthenticated() &&
        <div className={classes.root}>
          <nav className={classes.drawer} aria-label="Left sidebar">
            
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
              anchor="left"
            >
              {drawer}
            </Drawer>
          </nav>
        </div>
      }
    </>
  )
}

export default SideBar;
