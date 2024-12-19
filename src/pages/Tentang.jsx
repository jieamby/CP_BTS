import sct from "../assets/gbr/Tentang.webp";
import { useInView } from "react-intersection-observer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const Tentang = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 50 });
  });
  const options = {
    triggerOnce: true,
    threshold: 0.1,
  };

  const [ref1, inView1] = useInView(options);
  const [ref2, inView2] = useInView(options);
  const [ref3, inView3] = useInView(options);
  const [ref4, inView4] = useInView(options);
  const [ref5, inView5] = useInView(options);

  return (
    <div
      className="overflow-hidden w-full h-full bg-fixed bg-center bg-cover flex"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url(${sct})`,
      }}
    >
      <div className="flex flex-col justify-center rounded-2xl bg-putih dark:bg-hitam dark:border-hijau opacity-75 mx-4 gap-2 lg:gap-4 my-5 p-6 border-2 border-mint">
        <h2
          className="text-2xl md:text-3xl text-center lg:text-4xl font-bold text-hijau dark:text-putih pt-4"
          data-aos="flip-down"
          data-aos-duration="1000"
        >
          Mengapa Memilih Kami?
        </h2>
        <p
          className="text-hitam dark:text-putih mx-2 text-justify text-base md:text-lg lg:text-xl"
          data-aos="flip-left"
          data-aos-duration="1000"
        >
          Berkat Terang Solusindo hadir sebagai mitra terpercaya dalam
          memberikan solusi teknologi terbaik untuk bisnis Anda. Dengan fokus
          pada inovasi, efisiensi, dan hasil yang maksimal, kami berkomitmen
          membantu perusahaan di Indonesia menghadapi tantangan era digital. Tim
          kami yang berpengalaman bekerja dengan pendekatan strategis untuk
          menghadirkan layanan yang relevan dan bernilai tambah bagi bisnis
          Anda.
        </p>
        <ul className="list-disc pl-5 font-sans space-y-2 text-hitam dark:text-putih mx-2 pb-5">
          <li
            ref={ref1}
            className={`transform ${
              inView1 ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <span className="font-semibold">Pengalaman dan Keahlian:</span> Tim
            profesional kami memiliki pengalaman mendalam dalam pengembangan
            teknologi dan implementasi solusi digital.
          </li>
          <li
            ref={ref2}
            className={`transform ${
              inView2 ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            <span className="font-semibold">Solusi Inovatif:</span> Kami
            menawarkan pendekatan kreatif untuk mengatasi berbagai masalah
            bisnis dengan teknologi terbaru.
          </li>
          <li
            ref={ref3}
            className={`transform delay-200 ${
              inView3 ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <span className="font-semibold">
              Pendekatan Terukur dan Efisien:
            </span>{" "}
            Layanan kami dirancang untuk memastikan hasil terbaik dengan
            efisiensi waktu dan biaya.
          </li>
          <li
            ref={ref4}
            className={`transform delay-400 ${
              inView4 ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
            data-aos="fade-left"
            data-aos-duration="2500"
          >
            <span className="font-semibold">
              Komitmen terhadap Keamanan Data:
            </span>{" "}
            Keamanan informasi klien menjadi prioritas utama dalam setiap
            layanan yang kami tawarkan.
          </li>
          <li
            ref={ref5}
            className={`transform delay-600 ${
              inView5 ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
            data-aos="fade-right"
            data-aos-duration="3000"
          >
            <span className="font-semibold">Dukungan Komprehensif:</span> Kami
            menyediakan layanan penuh, mulai dari konsultasi hingga
            implementasi, dengan fokus pada kebutuhan unik setiap perusahaan.
          </li>
        </ul>
      </div>
    </div>
  );
};
