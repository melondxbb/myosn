import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Receipt from "@material-ui/icons/Receipt";
import Category from "@material-ui/icons/Category";
import Help from "@material-ui/icons/Help";
import { useStyles } from "./bottomBar.styles";

const BottomBar = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if(location.pathname === "/account") return setValue(0);
    if(location.pathname === "/bills") return setValue(1);
    if(location.pathname === "/packs") return setValue(2);
    if(location.pathname === "/support") return setValue(3);

    setValue(0);
    
  }, [location])

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
        if(newValue === 0) navigate("/account");
        if(newValue === 1) navigate("/bills");
        if(newValue === 2) navigate("/packs");
        if(newValue === 3) navigate("/support");
      }}
      showLabels
      className={classes.bottomBar}
    >
      <BottomNavigationAction label="Account" icon={<AccountCircle />} />
      <BottomNavigationAction label="Bills" icon={<Receipt />} />
      <BottomNavigationAction label="Packs" icon={<Category />} />
      <BottomNavigationAction label="Support" icon={<Help />} />
    </BottomNavigation>
  );
}

export default BottomBar;
