import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const Komit = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 50 });
  });
  return (
    <div className="overflow-hidden h-auto w-auto bg-fixed bg-center bg-no-repeat bg-cover">
      <div className="container mx-auto mt-24 px-4 gap-3 flex flex-col bg-transparent">
        <h2
          className="xl:text-2xl md:text-xl font-serif text-lg pt-1 text-center underline text-putih decoration-putih"
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
          className="text-putih dark:text-putih dark:backdrop-blur-sm bg-auto rounded-lg dark:bg-kuning/15 xl:text-2xl md:text-xl md:text-center font-sans text-lg pt-1 text-left italic mb-3 "
          data-aos="zoom-out-right"
          data-aos-duration="1000"
        >
          Kami selalu siap menjadi rekan kepercayaan dalam setiap usaha anda.
        </p>
        <p
          className="text-biru xl:text-xl md:text-lg text-base rounded-3xl text-justify leading-relaxed mb-6 p-3 dark:text-mint backdrop-blur-sm bg-putih/55 dark:bg-hitam/65"
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
