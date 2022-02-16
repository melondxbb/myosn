import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  sign: {
    display: "flex",
    alignItems: "center"
  },
  signInner: {
    maxWidth: 370,
    margin: "0 auto",
    flexDirection: "column",
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#fff",
    boxShadow: "rgb(0 0 0 / 8%) 0px 0px 18px",
  },
  logo: {
    display: "block",
    width: "auto",
    height: 36,
    margin: "0 auto",
  },
  signInnerHeader: {
    textAlign: "center",
  },
  formGroup: {
    marginBottom: 20,
    display: "flex",
    flexDirection: "column",
  },
  field: {
    alignItems: "flex-end",
  },
  fieldInput: {
    flex: 1,
  },
  submit: {
    marginTop: 15,
  },
  altBtn: {
    textDecoration: "none",
  },
  links: {
    marginTop: 5,
    textAlign: "right",
  },
  link: {
    textDecoration: "none",
    color: "#000",
    fontSize: 14,
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
  
}));
