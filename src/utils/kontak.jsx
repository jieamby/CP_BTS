import { Bagian } from "../components/Footer";
import { ScrollToTopButton } from "../components/Scrolling";
import { Kontak } from "../pages/Contact";


export const Hub = () => {
    window.scrollTo(0, 0);
    return (
        <> 
        <Kontak />
        <Bagian />
        <ScrollToTopButton />
        </>
    )
}