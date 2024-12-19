import "./index.css";
import { Navbar } from "./components/Navbar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home } from "./utils/home";
import { Problems } from "./utils/tentang";
import { Solusi } from "./utils/solusi";
import { Hub } from "./utils/kontak";
import NotFound from "./components/NotFound";
import { useEffect, useState } from "react";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode") === "true";
    setIsDarkMode(savedDarkMode);
    if (savedDarkMode) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    const newMode = !isDarkMode;
    if (newMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    // Simpan preferensi dark mode ke localStorage
    localStorage.setItem("darkMode", newMode);
  };

  return (
    <Router>
      <div>
        <Navbar toggleDarkMode={toggleDarkMode} />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Problems />} />
        <Route path="/layanan" element={<Solusi />} />
        <Route path="/contact" element={<Hub />} />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
