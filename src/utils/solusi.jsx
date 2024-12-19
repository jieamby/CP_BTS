import { Bagian } from "../components/Footer";
import { ScrollToTopButton } from "../components/Scrolling";
import { LayananPage } from "../pages/Layanan";
import { SolusiPage } from "../pages/SolusiPage";
import BotChat from "./chat";

export const Solusi = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <SolusiPage />
      <LayananPage />
      <Bagian />
      <BotChat />
      <ScrollToTopButton />
    </>
  );
};
