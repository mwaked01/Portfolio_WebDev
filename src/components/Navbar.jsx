import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// Overiding the default colour of MUI
let theme = createTheme({
  // Theme customization goes here as usual, including tonalOffset and/or
  // contrastThreshold as the augmentColor() function relies on these
});
theme = createTheme(theme, {
  palette: {
    primary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#002884',
      focus: "ff7961",
      contrastText: '#f44336',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
    text: {
      primary: '#f44336',
      secondary: '#3f50b5',
    },
    custom: theme.palette.augmentColor({
      color: {
        main: '#3f50b5',
      },
      name: 'custom',
    }),
  },
});


const Navbar = (props) => {

  return (
    <ThemeProvider theme={theme}>
      <nav>
        <Tabs
          orientation="vertical"
          value={0}
          textColor="primary"
          indicatorColor="secondary"

        >
          <Tab label="about" value="ABOUT" />
          <Tab label="Skills" value="SKILLS" />
          <Tab label="Projects" value="PROJECTS" />
        </Tabs>
      </nav>

    </ThemeProvider>
  );
};

export default Navbar;
