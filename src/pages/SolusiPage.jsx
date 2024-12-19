import bts2 from "../assets/gbr/conection_2.webp";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const SolusiPage = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 50 });
  }, []);

  return (
    <div
      className="overflow-hidden h-auto w-auto bg-fixed bg-center bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(${bts2})`,
        opacity: "initial",
      }}
      loading="lazy"
    >
      <div className="container pt-20 mx-auto backdrop-blur-sm bg-putih/30 dark:bg-hitam/65 text-biru dark:text-putih rounded-2xl p-4 m-2 gap-2">
        <h1
          className="text-2xl font-bold text-center mb-6"
          data-aos="flip-up"
          data-aos-duration="1000"
        >
          Layanan IT Konsultan dan Sistem Integrator Profesional
        </h1>
        <p
          className=" text-justify leading-relaxed mb-6"
          data-aos="zoom-in"
          data-aos-duration="2000"
        >
          BERKAT TERANG SOLUSINDO adalah perusahaan IT yang menawarkan layanan
          komprehensif di bidang teknologi informasi, termasuk IT konsultan,
          sistem integrator, dan implementator IT. Salah satu fokus utama kami
          adalah menangani infrastruktur IT dan pengembangan Software aplikasi,
          memberikan solusi yang tepat untuk kebutuhan teknologi informasi
          perusahaan atau kantor Anda.
        </p>
        <p
          className="text-justify leading-relaxed mb-6"
          data-aos="zoom-in"
          data-aos-duration="2500"
        >
          Dengan tim profesional dan berpengalaman, kami siap membantu Anda
          menemukan solusi terbaik untuk masa depan perusahaan. Biaya jasa IT
          konsultan yang kami tawarkan sebanding dengan kualitas layanan kami,
          mencakup perancangan sistem yang dirancang khusus untuk kebutuhan IT
          kantor Anda. Kami mengedepankan teknologi informasi yang lengkap untuk
          membantu efisiensi pengeluaran anggaran tanpa mengorbankan hasil yang
          maksimal, demi mendukung produktivitas perusahaan Anda.
        </p>
        <p
          className="text-justify leading-relaxed"
          data-aos="zoom-in"
          data-aos-duration="3000"
        >
          Sebelum melangkah ke implementasi teknologi informasi, konsultasikan
          terlebih dahulu kebutuhan Anda kepada kami. Dengan pendekatan yang
          matang dan perhitungan yang efisien, kami akan memastikan solusi TI
          yang dirancang tidak hanya mendukung kelancaran operasional, tetapi
          juga memacu pertumbuhan dan kemajuan perusahaan Anda.
        </p>
      </div>
    </div>
  );
};
