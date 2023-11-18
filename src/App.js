import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

function App() {
  // const theme = createTheme({
  //   palette: {
  //     type: "dark",
  //   },
  // });
  return (
    // <ThemeProvider theme={theme}>
    //   <CssBaseline />
      <div className="app">
        <header>
          <Header />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </div>
    // </ThemeProvider>
  );
}

export default App;
