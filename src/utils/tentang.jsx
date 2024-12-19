import { Bagian } from "../components/Footer";
import { ScrollToTopButton } from "../components/Scrolling";
import { Problem } from "../pages/problems";
import BackgroundVideo from "../pages/VideoPage";
import { VisiMisiPage } from "../pages/VisiMisi";
import BotChat from "./chat";

export const Problems = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <BackgroundVideo />
      <Problem />
      <VisiMisiPage />
      <Bagian />
      <BotChat />
      <ScrollToTopButton />
    </>
  );
};
