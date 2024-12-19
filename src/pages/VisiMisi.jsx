import AOS from "aos";
import { useEffect } from "react";
import icon1 from "../assets/icons/icon6.webp";
import icon2 from "../assets/icons/icon7.webp";

export const VisiMisiPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div className="flex flex-col h-full w-full overflow-hidden bg-hijau dark:bg-hitam">
      <div className="bg-hijau text-putih text-center my-2 dark:bg-hitam">
        <h1 className="text-4xl font-semibold">Visi &amp; Misi Perusahaan</h1>
        <p className="mt-2 text-lg">
          Menciptakan masa depan yang lebih baik bersama
        </p>
      </div>
      <div className="flex flex-col bg-mint dark:bg-hitam">
        <section className="gap-2 pt-4" data-aos="fade-up">
          <div className="container mx-auto text-center px-6">
            <div className="flex flex-col gap-1 items-center">
              <div className="rounded-full border-2 w-12 md:w-16 lg:w-20 h-12 md:h-16 lg:h-20 border-hijau m-4 bg-putih dark:border-biru">
                <img
                  src={icon1}
                  alt="Visi Perusahaan"
                  loading="lazy"
                  className="rounded-lg shadow-lg p-1"
                />
              </div>
              <h2 className="text-3xl font-bold text-biru dark:text-mint mb-4">
                Visi
              </h2>
            </div>
            <p className="text-lg text-hitam dark:text-mint max-w-2xl mx-auto">
              Menjadi mitra terpercaya dalam menyediakan solusi inovatif di
              bidang teknologi informasi yang mendukung perkembangan global dan
              berkelanjutan.
            </p>
          </div>
        </section>
        <section
          className="gap-2 py-4 bg-mint dark:bg-hitam"
          data-aos="fade-up"
        >
          <div className="container mx-auto text-center px-6">
            <div className="flex flex-col gap-1 items-center">
              <div className="rounded-full border-2 w-12 md:w-16 lg:w-20 h-12 md:h-16 lg:h-20 border-hijau m-4 bg-putih dark:border-biru">
                <img
                  src={icon2}
                  alt="Visi Perusahaan"
                  loading="lazy"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <h2 className="text-3xl font-bold text-biru mb-8 dark:text-mint">
                Misi
              </h2>
            </div>
            <div className="grid grid-flow-row-2 gap-8">
              <div className="p-8 rounded-lg shadow-lg hover:border-hijau bg-putih dark:bg-abu dark:hover:border-biru border-2 transition-transform transform hover:scale-105">
                <h3 className="text-xl font-semibold text-hijau dark:text-mint mb-4">
                  Inovasi Berkelanjutan
                </h3>
                <p className="text-abu hover:text-hitam dark:text-putih dark:hover:text-mint">
                  Menciptakan produk dan layanan dengan teknologi terbaru yang
                  mendukung perkembangan industri dan masyarakat secara
                  berkelanjutan.
                </p>
              </div>
              <div className="bg-putih p-8 rounded-lg shadow-lg hover:border-hijau border-2 transition-transform transform hover:scale-105 dark:bg-abu dark:hover:border-biru">
                <h3 className="text-xl font-semibold text-hijau mb-4 dark:text-mint">
                  Kualitas Terbaik
                </h3>
                <p className="text-abu hover:text-hitam dark:text-putih dark:hover:text-mint">
                  Memberikan layanan dan produk dengan kualitas terbaik untuk
                  memenuhi harapan dan kepuasan pelanggan.
                </p>
              </div>
              <div className="bg-putih p-8 rounded-lg shadow-lg hover:border-hijau border-2 transition-transform transform hover:scale-105 dark:bg-abu dark:hover:border-biru">
                <h3 className="text-xl font-semibold text-hijau mb-4 dark:text-mint">
                  Berorientasi Pelanggan
                </h3>
                <p className="text-abu hover:text-hitam dark:text-putih dark:hover:text-mint">
                  Selalu berfokus pada kebutuhan dan keinginan pelanggan untuk
                  membangun hubungan jangka panjang yang saling menguntungkan.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
