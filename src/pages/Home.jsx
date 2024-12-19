import { Link } from "react-router-dom";
import back from "../assets/gbr/sct.webp";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const HomePages = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 50 });
  }, []);

  return (
    <>
      <div className="flex flex-col -z-50 overflow-hidden">
        <div className="bg-abu/35 dark:bg-abu/55">
          <div className="cover relative px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 overflow-hidden flex items-center justify-center max-w-screen min-h-screen">
            <div className="w-full h-full absolute top-0 left-0 z-0">
              <img
                src={back}
                alt="Berkat Terang"
                className="w-full h-full object-cover opacity-30"
                loading="lazy"
              />
            </div>
            <div className="lg:w-3/4 xl:h-2/4 relative z-0 text-center">
              <div className="flex flex-col gap-4">
                <h1
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-7xl font-bold leading-tight bg-gradient-to-b from-biru to-hijau bg-clip-text text-transparent"
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                >
                  Sukses Bersama Kami
                </h1>
                <Link
                  to="/about"
                  className="lg:text-xl md:text-lg sm:text-base font-semibold font-mono underline bg-gradient-to-l from-abu to-hitam bg-clip-text text-transparent"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  Selamat Datang di Berkat Terang Solusindo
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          className="bg-gradient-to-r from-biru/85 to-hijau h-32 md:h-44 lg:h-52 flex flex-col gap-2 justify-center items-center animate-gradient-move bg-[length:200%_200%]"
          data-aos="flip-left"
          data-aos-duration="1000"
        >
          <h2
            className="xl:text-4xl md:text-3xl text-xl text-mint text-center mx-3 font-bold"
            data-aos="zoom-in-left"
            data-aos-duration="1500"
          >
            Satu Mitra untuk Semua Solusi Teknologi Anda
          </h2>
          <p
            className="text-putih text-xs sm:text-sm md:text-base lg:text-xl mx-3 text-center font-sans"
            data-aos="zoom-in-right"
            data-aos-duration="2000"
          >
            Konsultasikan kebutuhan Anda, dan kami wujudkan dengan software
            terbaik yang di desain khusus hanya untuk Anda
          </p>
        </div>
      </div>
    </>
  );
};
