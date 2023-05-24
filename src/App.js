import './assets/css/App.css';
import { CssBaseline, Container, Box, Stack } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// fonts
import { mersad, spaceMonoBold, spaceMonoItalic, makeSansReg } from './assets/fonts'

// components
import Header from './components/header';
import Footer from './components/footer';

// pages
import About from './pages/home-about';
import Work from './pages/work';
import Contact from './pages/contact';
import Resume from './pages/resume';

const theme = createTheme({
  palette: {
    mode: "dark",
    common: {
      black: "#0e131b",
      white: "#f7f7f8",
    },
    primary: {
      main: "#6be6f5",
      light: "#a7f2fa",
      dark: "#0cbad6",
    },
    secondary: {
      main: "#c88ef2",
      light: "#ddbaf8",
      dark: "#b363e9",
    },
    error: {
      main: "#f98a70",
      light: "#fdb5a4",
      dark: "#fed4ca",
    },
    warning: {
      main: "#edb432",
      light: "#efc44b",
      dark: "#e5941b",
    },
    info: {
      main: "#eb87dd",
      light: "#f3b4eb",
      dark: "#de5fcc",
    },
    success: {
      main: "#91e4ab",
      light: "#c1f1d0",
      dark: "#33b45c",
    },
    grey: {
      50: "#f4f5f6",
      100: "#ebedef",
      200: "#dfe3e7",
      300: "#b1bdc8",
      400: "#8a99a8",
      500: "#697a8c",
      600: "#556372",
      700: "#404c59",
      800: "#323c48",
      900: "#232a34",
      A100: "#ebedef",
      A200: "#dfe3e7",
      A400: "#8a99a8",
      A700: "#404c59",
    },
    text: {
      primary: "#f7f7f8",
      secondary: "rgba(247, 247, 248, 0.7",
      disabled: "rgba(247, 247, 248, 0.7",
      icon: "rgba(247, 247, 248, 0.5",
    },
    background: {
      paper: "#0e131b",
      default: "#0e131b",
    },
  },
  typography: {
    fontFamily: [
      "Mersad",
      "Space Mono Bold",
      "Space Mono Bold Italic",
      "Make Sans",
    ],
    h1: { fontFamily: "Mersad" },
    h2: { fontFamily: "Mersad" },
    h3: { fontFamily: "Space Mono Bold" },
    h4: { fontFamily: "Space Mono Bold" },
    h5: { fontFamily: "Space Mono Bold" },
    h6: { fontFamily: "Space Mono Bold" },
    subtitle1: {
      fontFamily: "cursive",
      fontSize: "1.25rem",
    },
    subtitle2: {
      fontFamily: "ui-rounded",
      fontSize: "1rem",
    },
    body1: {
      fontFamily: "ui-rounded",
      fontSize: "1.25rem",
    },
    body2: {
      fontFamily: "ui-rounded",
      fontSize: "1rem",
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [mersad, spaceMonoBold, spaceMonoItalic, makeSansReg],
      },
    },
  },
});

function App() {
    return (
      <Box padding="2">
        <ThemeProvider theme={theme}>
          <Router basename={process.env.PUBLIC_URL}>
            <CssBaseline />
            <Stack justifyContent={"space-between"} className="App">
              <Header />

              <Container component={"main"} sx={{ py: 5 }}>
                <Routes>
                  <Route path="/" element={<About />} />
                  <Route path="/work" element={<Work />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/resume" element={<Resume />} />
                </Routes>
              </Container>

              <Footer />
            </Stack>
          </Router>
        </ThemeProvider>
      </Box>
    );
    }
    
    export default App;
