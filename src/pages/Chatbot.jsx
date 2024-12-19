import { useState, useRef, useEffect } from "react";
import cs from "../assets/icons/icon8.webp";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false); // State untuk kontrol chatbot
  const messagesEndRef = useRef(null);
  const inactivityTimeoutRef = useRef(null);

  // Fungsi untuk mendapatkan respons bot
  const getBotResponse = (input) => {
    const responses = {
      Mitra:
        "Berkat Terang Solusindo hadir sebagai mitra terpercaya dalam memberikan solusi teknologi terbaik untuk bisnis Anda.",
      Solusi:
        "Kami menawarkan berbagai solusi baik produk digital maupun produk non-digital.",
      "Hubungi Admin": (
        <span>
          Untuk terhubung dengan tim marketing kami, Anda dapat mengirimkan
          email ke{" "}
          <a
            href="mailto:info@berkatterangsolusindo.com"
            target="_blank"
            className="text-primary underline font-semibold"
          >
            info@berkatterangsolusindo.com
          </a>{" "}
          atau hubungi kami melalui Whatsapp di{" "}
          <a
            href="https://wa.me/6281808102191"
            target="_blank"
            className="text-primary underline font-semibold"
          >
            +6281808102191
          </a>
          .
        </span>
      ),
      Keuntungan:
        "Tentu saja! Kami telah bekerja sama dengan berbagai mitra, membantu mereka menemukan solusi terbaik serta menyediakan produk digital maupun non-digital yang sesuai dengan kebutuhan mereka. Kami siap mendengarkan dan memberikan solusi untuk kebutuhan Anda. Apa yang ingin Anda konsultasikan lebih lanjut?",
      default:
        "Maaf, saya tidak mengerti. Bisakah Anda menjelaskan lebih lanjut?",
    };

    return responses[input] || responses.default;
  };

  // Fungsi untuk meng-scroll otomatis ke bawah
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Mengatur scroll otomatis jika ada pesan baru
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Menangani klik tombol opsi
  const handleOptionClick = (option) => {
    const currentTime = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    setMessages((prev) => [
      ...prev,
      { sender: "user", text: option, time: currentTime },
    ]);

    setTimeout(() => {
      const botResponse = getBotResponse(option);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: botResponse, time: currentTime },
      ]);
    }, 1000);

    resetInactivityTimeout(); // Reset timer setelah ada aktivitas
  };

  // Membuka chatbot dan menyapa pengguna setelah 3 detik
  useEffect(() => {
    const openChatbotTimeout = setTimeout(() => {
      setIsChatbotOpen(true);
      const currentTime = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });

      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Halo! Ada yang bisa saya bantu?",
          time: currentTime,
        },
      ]);
    });

    return () => clearTimeout(openChatbotTimeout); // Membersihkan timeout
  }, []);

  // Menutup chatbot setelah 20 detik tanpa aktivitas
  const resetInactivityTimeout = () => {
    if (inactivityTimeoutRef.current) {
      clearTimeout(inactivityTimeoutRef.current);
    }

    inactivityTimeoutRef.current = setTimeout(() => {
      setIsChatbotOpen(false);
    }, 20000);
  };

  useEffect(() => {
    // Mulai timer ketika chatbot dibuka
    if (isChatbotOpen) {
      resetInactivityTimeout();
    }

    return () => {
      if (inactivityTimeoutRef.current) {
        clearTimeout(inactivityTimeoutRef.current);
      }
    };
  }, [isChatbotOpen]);

  return isChatbotOpen ? (
    <div className="bg-putih dark:bg-hitam shadow-lg rounded-br-none rounded-3xl w-72 lg:w-96 h-72 lg:h-96 z-50 flex flex-col border-hijau dark:border-putih border-2">
      {/* Header */}
      <div className="bg-mint text-hitam dark:bg-abu dark:text-putih px-4 pt-3 py-1 flex items-center rounded-t-3xl gap-3 border-b-2 border-kuning dark:border-mint">
        <img
          src={cs}
          alt="Admin Icon"
          className="w-8 h-8 rounded-b-full"
          loading="lazy"
        />
        <span className="font-sans text-lg">BTS Support</span>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 p-4 overflow-y-auto space-y-3">
        <div className="text-sm text-abu dark:text-mint text-center mb-4 underline-offset">
          --- New ---
        </div>
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex gap-1 ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            {msg.sender === "bot" && (
              <img
                src={cs}
                alt="Admin Icon"
                loading="lazy"
                className="w-6 h-6 rounded-b-full"
              />
            )}
            <div
              className={`p-1 text-xs lg:text-sm font-sans rounded-lg shadow ${
                msg.sender === "user"
                  ? "bg-biru text-putih dark:bg-putih dark:text-hitam rounded-br-none"
                  : "bg-mint text-hitam dark:bg-hijau dark:text-putih rounded-bl-none"
              }`}
            >
              <div>{msg.text}</div>
              <div className="text-xs font-sans">{msg.time}</div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Quick Options */}
      <div className="flex gap-2 flex-wrap text-center border-t-2 border-kuning dark:border-mint py-2 mx-2">
        {["Mitra", "Solusi", "Keuntungan", "Hubungi Admin"].map(
          (option, index) => (
            <button
              key={index}
              onClick={() => handleOptionClick(option)}
              className="px-4 hover:rounded-3xl hover:text-putih text-hitam hover:bg-hijau dark:hover:text-putih dark:text-mint dark:hover:bg-biru justify-between shadow text-xs lg:text-sm font-sans"
            >
              {option}
            </button>
          )
        )}
      </div>
    </div>
  ) : null;
};

export default Chatbot;
