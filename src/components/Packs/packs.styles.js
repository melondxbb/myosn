import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  packs: {
    padding: 20,
    maxWidth: "80%",
    "@media (max-width: 768px)": {
      maxWidth: "100%",
    },
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
    // padding: 10,

  },
  infoHeadTxt: {
    flex: 1,
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
  cardHead: {
    width: "100%",
  },
  cardAction: {
    marginTop: 0,
  },
  avatar: {
    borderRadius: 0,
    width: 50,
    height: 50,
  },
  
}));