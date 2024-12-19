import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import btncon from "../assets/icons/icon8.webp";

const BtnChatbot = ({ isOpen, toggleChatbot }) => {
  const [autoOpenTriggered, setAutoOpenTriggered] = useState(false); // Mencegah auto open berulang
  const [inactivityTimer, setInactivityTimer] = useState(null); // Timer untuk mendeteksi ketidakaktifan

  // Membuka chatbot otomatis setelah 3 detik
  useEffect(() => {
    if (!autoOpenTriggered) {
      const openTimer = setTimeout(() => {
        if (!isOpen) {
          toggleChatbot(); // Membuka chatbot
        }
        setAutoOpenTriggered(true);
      }, 5000);

      return () => clearTimeout(openTimer); // Membersihkan timer
    }
  }, [isOpen, toggleChatbot, autoOpenTriggered]);

  // Menutup chatbot otomatis setelah 20 detik ketidakaktifan
  useEffect(() => {
    const resetInactivityTimer = () => {
      if (inactivityTimer) clearTimeout(inactivityTimer);
      if (isOpen) {
        const timer = setTimeout(() => {
          if (isOpen) {
            toggleChatbot(); // Menutup chatbot
          }
        }, 20000); // 20 detik
        setInactivityTimer(timer);
      }
    };

    // Set ulang timer saat tombol diklik
    resetInactivityTimer();

    return () => {
      if (inactivityTimer) clearTimeout(inactivityTimer);
    };
  }, [isOpen, toggleChatbot]);

  return (
    <div className="fixed bottom-14 right-6">
      <button
        onClick={toggleChatbot}
        className={`flex w-auto items-center flex-row gap-2 h-auto px-2 py-2 transition-colors text-hijau dark:text-mint duration-300 ${
          isOpen
            ? "bg-putih dark:bg-abu justify-between pl-4 pr-8 border-2 border-t-0 border-hijau dark:border-putih rounded-b-3xl"
            : "bg-putih dark:bg-abu border-2 border-hijau dark:border-putih rounded-full"
        }`}
      >
        <span className="items-center">
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
              />
            </svg>
          ) : (
            <img
              src={btncon}
              alt="Admin Icon"
              loading="lazy"
              className="w-7 h-7 rounded-b-full"
            />
          )}
        </span>
        {isOpen ? "Tutup" : "Buka"}
      </button>
    </div>
  );
};

// Menambahkan validasi properti
BtnChatbot.propTypes = {
  isOpen: PropTypes.bool.isRequired, // Properti isOpen harus boolean dan wajib
  toggleChatbot: PropTypes.func.isRequired, // Properti toggleChatbot harus fungsi dan wajib
};

export default BtnChatbot;
