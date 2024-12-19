import icon3 from "../assets/icons/Icon1.webp";
import icon4 from "../assets/icons/Icon2.webp";
import icon5 from "../assets/icons/Icon3.webp";
import conct from "../assets/gbr/bg-map-1.webp";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const Problem = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 50 });
  }, []);

  return (
    <>
      <div className="overflow-hidden">
        <div
          className="max-w-full max-h-auto"
          style={{ backgroundImage: `url(${conct})` }}
          loading="lazy"
        >
          <div className="container mx-auto px-4 lg:pt-20 pt-16 justify-items-center">
            <div className="flex flex-wrap text-abu dark:text-putih">
              <div
                className="md:pt-10 w-full pt-6 md:w-4/12 px-4 text-center items-start"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <div className="relative flex flex-col min-w-0 break-words bg-mint dark:bg-hitam w-full mb-8 shadow-md rounded-lg">
                  <div className="px-4 py-5 flex-auto font-sans">
                    <div className="p-3 text-center inline-flex animate-bounce items-center justify-center w-14 h-14 bg-putih dark:bg-mint dark:shadow-hijau dark:border-hijau mb-5 shadow-2xl shadow-kuning rounded-full border border-kuning">
                      <img
                        alt="BTS tepat waktu"
                        src={icon5}
                        loading="lazy"
                        className="lg:w-full w-9/12 align-middle"
                      />
                    </div>
                    <h6 className="lg:text-lg text-sm font-semibold leading-relaxed">
                      Ketepatan{" "}
                      <span className="animate-pulse text-hijau font-serif dark:text-mint">
                        {" "}
                        Waktu
                      </span>
                    </h6>
                    <p className="lg:text-base text-xs leading-relaxed mt-4 mb-2">
                      Kami bekerja sesuai dengan waktu yang telah disepakati
                      bersama
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="w-full md:w-4/12 px-4 text-center"
                data-aos="fade-down"
                data-aos-duration="2000"
              >
                <div className="relative flex flex-col min-w-0 break-words bg-mint dark:bg-hitam w-full mb-8 shadow-md rounded-lg">
                  <div className="px-4 py-5 flex-auto font-sans">
                    <div className="p-3 text-center inline-flex animate-bounce items-center justify-center w-14 h-14 bg-putih mb-5 shadow-2xl shadow-kuning rounded-full border border-kuning dark:bg-mint dark:shadow-hijau dark:border-hijau">
                      <img
                        alt="BTS Profesional"
                        src={icon4}
                        loading="lazy"
                        className="lg:w-full w-9/12 align-middle"
                      />
                    </div>
                    <h6 className="lg:text-lg text-sm font-semibold leading-relaxed">
                      Kami{" "}
                      <span className="text-hijau font-serif animate-pulse dark:text-mint">
                        {" "}
                        Profesional
                      </span>
                    </h6>
                    <p className="lg:text-base text-xs leading-relaxed mt-4 mb-2">
                      Kualitas, Mutu dan Kesopanan hal yang kami utamakan
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="md:pt-6 pt-1 w-full md:w-4/12 px-4 text-center"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                <div className="relative flex flex-col min-w-0 break-words bg-mint dark:bg-hitam w-full mb-8 shadow-md rounded-lg">
                  <div className="px-4 py-5 flex-auto font-sans">
                    <div className="p-3 text-center inline-flex animate-bounce items-center justify-center w-14 h-14 bg-putih mb-5 shadow-2xl shadow-kuning rounded-full border border-kuning dark:bg-mint dark:shadow-hijau dark:border-hijau">
                      <img
                        alt="BTS Kualitas"
                        src={icon3}
                        loading="lazy"
                        className="lg:w-full w-9/12 align-middle"
                      />
                    </div>
                    <h6 className="lg:text-lg text-sm font-semibold leading-relaxed">
                      Kualitas Jasa &amp;{" "}
                      <span className="text-hijau font-serif animate-pulse dark:text-mint">
                        Barang
                      </span>
                    </h6>
                    <p className="lg:text-base text-xs leading-relaxed mt-4 mb-2">
                      Menjaga kualitas jasa dan barang adalah pedoman Kami
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
