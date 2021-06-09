import { createMuiTheme } from "@material-ui/core/styles";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";

function pxToRem(value) {
  return `${value / 16}rem`;
}

const breakpoints = createBreakpoints({});

const theme = createMuiTheme({
  breakpoints,
  overrides: {
    MuiTypography: {
      
      headline: {
        fontSize: pxToRem(12),
        [breakpoints.up("md")]: {
          fontSize: pxToRem(45)
        }
      },
      h5:{
        fontSize: "2rem",
        [breakpoints.down("xs")]: {
          fontSize: "2rem"
        }
      },
    }
  }
});



export default theme;