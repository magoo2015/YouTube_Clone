// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";


// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import VideoPage from "./pages/VideoPage/VideoPage";
import YouTubePage from "./pages/YouTubePage/YouTubePage";
import SearchPage from "./pages/SearchPage/SearchPage";






// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import SearchBar from "./components/SearchBar/SearchBar";


// Util Imports
import PrivateRoute from "./utils/PrivateRoute";

function App() {


  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <YouTubePage />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<YouTubePage />} />
        <Route path="/video/:videoid" element={<VideoPage />} />
        <Route path="/search/:search" element={<SearchPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
