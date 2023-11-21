import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import Home from "./pages/Home";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef } from "react";
import "locomotive-scroll/dist/locomotive-scroll.css";
import "@fontsource/kaushan-script";
import "@fontsource/sirin-stencil";
import { AnimatePresence } from "framer-motion";

function App() {
  const containerRef = useRef(null);
  const theme = createTheme({
    palette: {
      type: "dark",
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <LocomotiveScrollProvider
        options={{
          smooth: true,
          // ... all available Locomotive Scroll instance options
        }}
        watch={
          [
            //..all the dependencies you want to watch to update the scroll.
            //  Basicaly, you would want to watch page/location changes
            //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
          ]
        }
        containerRef={containerRef}
      >
        <AnimatePresence>
          <div className="app" data-scroll-container ref={containerRef}>
            <header>
              <Header />
            </header>
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
            </main>
          </div>
        </AnimatePresence>
      </LocomotiveScrollProvider>
    </ThemeProvider>
  );
}

export default App;
