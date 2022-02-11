import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff0000",
      contrastText: "#fff",
    },
    secondary: {
      main: "#ff0000",
      contrastText: "#fff",
      succ: "#eeffee",
      err: "#ffeeee",
    },
    text: {
      secondary: "#808080",
    },
  },
});

export default theme;