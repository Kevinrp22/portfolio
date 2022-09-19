import { createTheme } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: "#0a192f",
      100: "#ccd6f6",
      200: "#447F91",
      300: "#8892b0",
    },
  },
});
theme = createTheme(theme, {
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        body { 
          background-color:${theme.palette.primary.main};
          color: ${theme.palette.primary[100]};
          font-family:'Montserrat', sans-serif
        }
        `,
    },
  },
  typography: {
    allVariants: {
      fontFamily: "'Montserrat', sans-serif",
    },
    fontWeightBold: "bolder",
  },
});

export default theme;
