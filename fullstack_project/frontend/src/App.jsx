import { Box } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom"
import { useColorModeValue } from "./components/ui/color-mode";
import { Toaster } from "./components/ui/toaster.jsx";
import CreatePage from "./pages/CreatePage.jsx";
import HomePage from "./pages/HomePage.jsx";
import Navbar from "./components/Navbar.jsx";


function App() {
  return (
    <Box minH={"100vh"} bg = {useColorModeValue("gray.100", "gray.900")}>
      <Navbar />
      <Routes>
        <Route path = "/" element = {<HomePage />} />
        <Route path = "/create" element = {<CreatePage />} />
      </Routes>
      <Toaster/>
    </Box>
  );
}

export default App;