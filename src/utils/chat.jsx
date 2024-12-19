import { useState, lazy, Suspense } from "react";

const Chat = lazy(() => import("../pages/Chatbot")); // Import Chatbot
const BtnChatbot = lazy(() => import("../components/btnChat")); // Import Button Chatbot

const BotChat = () => {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false); // Kelola state buka/tutup di sini

  const toggleChatbot = () => {
    setIsChatbotOpen((prev) => !prev);
  };

  return (
    <div className="relative">
      <Suspense
        fallback={
          <div className="bg-putih p-4 rounded-lg shadow-lg">Loading...</div>
        }
      >
        {/* Tombol Chatbot */}
        <BtnChatbot isOpen={isChatbotOpen} toggleChatbot={toggleChatbot} />

        {/* Chatbot */}
        {isChatbotOpen && (
          <div className="fixed bottom-24 right-6 z-50">
            <Chat toggleChatbot={toggleChatbot} />
          </div>
        )}
      </Suspense>
    </div>
  );
};

export default BotChat;
