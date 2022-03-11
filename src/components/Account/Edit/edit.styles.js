import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  cta: {
    marginLeft: 5,
  },
  infoBox: {
    marginBottom: 15,
  },
  infoContainer: {
    padding: 10,
  },
  infoHead: {
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
  infoHeadTxt: {
    flex: 1,
    padding: "8px 0",
    paddingLeft: 15,
  },
  divider: {
    width: "100%",
    margin: "10px 0",
  },
  infoItem: {
    padding: 15,
    width: "100%",
  },
  infoKey: {
    paddingBottom: 8,
    color: "rgba(0, 0, 0, 0.4)",
  },
  infoVal: {
    color: "#202020",
  },
  infokeyBox: {
    display: "flex",
    alignItems: "center",
  },
  infoIco: {
    marginLeft: 5,
    paddingBottom: 8,
    color: "rgba(0, 0, 0, 0.4)",
  },
  passwordInput: {
    marginTop: 10,
  },
  newBox: {
    paddingTop: 16,
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: 20,
  },
  bkFieldBoxA: {
    marginBottom: 20,
  },
  bkFieldBoxB: {
    display: "grid",
    gridTemplateColumns: "1fr 100px",
    gap: 10,
  },
  
}));