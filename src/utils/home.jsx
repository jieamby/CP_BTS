import { Bagian } from "../components/Footer";
import { ScrollToTopButton } from "../components/Scrolling";
import { HomePages } from "../pages/Home";
import Legalitas from "../pages/Legalitas";
import { Tentang } from "../pages/Tentang";
import BotChat from "./chat";


export const Home = () => {
    window.scrollTo(0, 0);
    return (
        <> 
        <HomePages />
        <Legalitas />
        <Tentang/>
        <Bagian />
        <BotChat />
        <ScrollToTopButton />
        </>
    )
}