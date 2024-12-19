import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/gbr/LOGO2_1.webp";
import AOS from "aos";
import "aos/dist/aos.css";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode") === "true";
    setIsDarkMode(savedDarkMode);
    if (savedDarkMode) {
      document.documentElement.classList.add("dark"); // Aktifkan dark mode
    } else {
      document.documentElement.classList.remove("dark"); // Nonaktifkan dark mode
    }

    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };
    AOS.init({ duration: 800, offset: 50, once: true });

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    // Simpan preferensi dark mode di localStorage
    localStorage.setItem("darkMode", newMode);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-putih dark:bg-hitam/80 shadow-xl"
          : "bg-putih/70 dark:bg-hitam/70 backdrop-brightness-100 shadow-xl"
      }`}
    >
      <div className="container mx-auto flex flex-row justify-between items-center py-2 px-5">
        <Link to="/" className="flex-row flex items-center gap-1">
          <img
            src={Logo}
            alt="BTS"
            width="50"
            height="50"
            data-aos="flip-up"
            data-aos-duration="2000"
          />
          <div
            className="flex flex-col justify-between"
            data-aos="zoom-in-down"
            data-aos-duration="2000"
          >
            <span
              className={`text-sm font-bold ${
                scrolled
                  ? "text-biru dark:text-putih"
                  : "text-hijau dark:text-mint"
              }`}
            >
              BERKAT
            </span>
            <span
              className={`text-sm font-bold ${
                scrolled
                  ? "text-biru dark:text-putih"
                  : "text-hijau dark:text-mint"
              }`}
            >
              TERANG
            </span>
            <span
              className={`text-sm font-bold ${
                scrolled
                  ? "text-biru dark:text-putih"
                  : "text-hijau dark:text-mint"
              }`}
            >
              SOLUSINDO
            </span>
          </div>
        </Link>
        <button
          onClick={toggleDarkMode}
          className={`p-2 rounded-full transition-all duration-300 ${
            scrolled ? "text-mint" : "text-putih"
          }`}
        >
          {isDarkMode ? "🌙" : "🌞"}
        </button>
        <div className="hidden md:flex space-x-8 font-sans font-bold text-base">
          <Link
            to="/"
            className={`hover:text-hijau/75 transition font-sans ${
              isActive("/")
                ? "text-biru dark:text-mint"
                : scrolled
                ? "text-biru dark:text-mint"
                : "text-hijau dark:text-putih"
            }`}
            data-aos="zoom-in-down"
            data-aos-duration="2000"
          >
            Home
          </Link>
          <Link
            to="/layanan"
            className={`hover:text-hijau/75 transition font-sans ${
              isActive("/layanan")
                ? "text-biru dark:text-mint"
                : scrolled
                ? "text-biru dark:text-mint"
                : "text-hijau dark:text-putih"
            }`}
            data-aos="zoom-in-down"
            data-aos-duration="2000"
          >
            Solusi
          </Link>
          <Link
            to="/about"
            className={`hover:text-hijau/75 font-sans transition ${
              isActive("/about")
                ? "text-biru dark:text-mint"
                : scrolled
                ? "text-biru dark:text-mint"
                : "text-hijau dark:text-putih"
            }`}
            data-aos="zoom-in-down"
            data-aos-duration="2000"
          >
            Tentang
          </Link>
          <Link
            to="/client"
            className={`hover:text-hijau/75 font-sans transition ${
              isActive("/client")
                ? "text-biru dark:text-mint"
                : scrolled
                ? "text-biru dark:text-mint"
                : "text-hijau dark:text-putih"
            }`}
            data-aos="zoom-in-down"
            data-aos-duration="2000"
          >
            Mitra
          </Link>
          <Link
            to="/contact"
            className={`hover:text-hijau/75 font-sans transition ${
              isActive("/contact")
                ? "text-biru dark:text-mint"
                : scrolled
                ? "text-biru dark:text-mint"
                : "text-hijau dark:text-putih"
            }`}
            data-aos="zoom-in-down"
            data-aos-duration="2000"
          >
            Kontak
          </Link>
        </div>
        <button
          className="md:hidden text-hijau dark:text-putih focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 transition-all duration-300 ${
                scrolled
                  ? "text-biru dark:text-mint"
                  : "text-hijau dark:text-putih"
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 transition-all duration-300 ${
                scrolled
                  ? "text-biru dark:text-mint"
                  : "text-hijau dark:text-putih"
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
          <ul
            className={`lg:flex lg:items-center lg:space-x-6 rounded-lg lg:static absolute top-14 right-0 w-2/5 bg-putih dark:bg-hitam/90 lg:bg-transparent lg:shadow-none shadow-xl transition-all duration-300 ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <li className="py-2 lg:py-0">
              <Link
                to="/"
                className={`block text-left px-4 lg:inline-block font-sans font-bold text-base ${
                  isActive("/")
                    ? "text-biru dark:text-mint"
                    : scrolled
                    ? "text-biru dark:text-putih"
                    : "text-hijau dark:text-putih"
                }`}
              >
                Home
              </Link>
            </li>
            <li className="py-2 lg:py-0">
              <Link
                to="/layanan"
                className={`block text-left px-4 lg:inline-block font-sans font-bold text-base ${
                  isActive("/layanan")
                    ? "text-biru dark:text-mint"
                    : scrolled
                    ? "text-biru dark:text-putih"
                    : "text-hijau dark:text-putih"
                }`}
              >
                Solusi
              </Link>
            </li>
            <li className="py-2 lg:py-0">
              <Link
                to="/about"
                className={`block text-left px-4 lg:inline-block font-sans font-bold text-base ${
                  isActive("/about")
                    ? "text-biru dark:text-mint"
                    : scrolled
                    ? "text-biru dark:text-putih"
                    : "text-hijau dark:text-putih"
                }`}
              >
                Tentang Kami
              </Link>
            </li>
            <li className="py-2 lg:py-0">
              <Link
                to="/client"
                className={`block text-left px-4 lg:inline-block font-sans font-bold text-base ${
                  isActive("/client")
                    ? "text-biru dark:text-mint"
                    : scrolled
                    ? "text-biru dark:text-putih"
                    : "text-hijau dark:text-putih"
                }`}
              >
                Mitra
              </Link>
            </li>
            <li className="py-2 lg:py-0">
              <Link
                to="/contact"
                className={`block text-left px-4 lg:inline-block font-sans font-bold text-base ${
                  isActive("/contact")
                    ? "text-biru dark:text-mint"
                    : scrolled
                    ? "text-biru dark:text-putih"
                    : "text-hijau dark:text-putih"
                }`}
              >
                Kontak
              </Link>
            </li>
          </ul>
        </button>
      </div>
    </nav>
  );
};
