import videoSrc from "../assets/gbr/videobg.mp4";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const BackgroundVideo = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 50 });
  });
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content Layer */}
      <div className="mx-auto px-4 gap-3 flex-col relative z-0 flex items-center justify-center h-full bg-black bg-opacity-50">
        <h2
          className="xl:text-2xl md:text-xl font-serif text-lg md:pt-1 pt-16 text-center underline text-putih decoration-putih"
          data-aos="zoom-in-right"
          data-aos-duration="1000"
        >
          PT. BERKAT TERANG SOLUSINDO
        </h2>
        <h1
          className="xl:text-4xl md:text-3xl text-xl font-bold pt-2 text-center text-kuning dark:text-putih"
          data-aos="zoom-in-left"
          data-aos-duration="1500"
        >
          Integritas, Kerendahan hati, &amp; Komitmen
        </h1>
        <p
          className="text-putih dark:text-mint dark:backdrop-blur-sm bg-auto rounded-lg xl:text-2xl md:text-xl md:text-center font-sans text-lg pt-1 text-left italic mb-3 "
          data-aos="zoom-out-right"
          data-aos-duration="1000"
        >
          Kami selalu siap menjadi rekan kepercayaan dalam setiap usaha anda.
        </p>
        <p
          className="text-kuning xl:text-xl md:text-lg text-base rounded-3xl text-justify leading-relaxed mb-6 p-3 dark:text-mint"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          Kami berkomitmen membantu bisnis Anda tumbuh lebih cepat melalui
          transformasi digital dengan teknologi inovatif. Kami fokus
          meningkatkan efisiensi operasional, kualitas layanan, dan memperluas
          jangkauan pasar. Dengan solusi yang terukur dan keamanan data yang
          kuat, kami memastikan bisnis Anda terlindungi sekaligus mampu
          menghadapi tantangan kompleks. Didukung oleh nilai integritas,
          kerendahan hati, dan komitmen, kami menghadirkan inovasi berkelanjutan
          untuk mendukung perjalanan transformasi digital Anda menuju
          pertumbuhan yang lebih stabil dan berkelanjutan.
        </p>
      </div>
    </div>
  );
};

export default BackgroundVideo;
