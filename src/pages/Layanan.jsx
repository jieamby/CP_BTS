import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

export const LayananPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-mint dark:bg-hitam">
      <div className="container mx-auto py-12 px-6">
        <section data-aos="fade-up" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-biru dark:text-putih text-center md:text-left">
            Solusi untuk Perusahaan Anda
          </h2>
          <div className="space-y-6">
            <div className="p-6 bg-putih rounded-lg shadow-lg hover:border-hijau border-2 transition-transform transform hover:scale-105 dark:hover:border-biru dark:bg-abu">
              <h3 className="text-xl font-bold text-hijau text-center md:text-left dark:text-putih">
                Sistem Manajemen Proyek Terintegrasi
              </h3>
              <p className="m-1 text-justify text-abu hover:text-hitam dark:hover:text-mint dark:text-putih">
                Pelacakan tugas real-time, manajemen sumber daya manusia, dan
                integrasi dengan tools populer untuk memastikan proyek selesai
                tepat waktu.
              </p>
            </div>
            <div className="p-6 bg-putih rounded-lg shadow-lg hover:border-hijau border-2 transition-transform transform hover:scale-105 dark:hover:border-biru dark:bg-abu">
              <h3 className="text-xl font-bold text-hijau text-center md:text-left dark:text-putih">
                Pengembangan Produk Digital
              </h3>
              <p className="m-1 text-justify text-abu hover:text-hitam dark:text-putih dark:hover:text-mint">
                Pengembangan aplikasi web dan mobile dengan teknologi terkini
                seperti AI, blockchain, dan IoT untuk memberikan pengalaman
                terbaik.
              </p>
            </div>
            <div className="p-6 bg-putih rounded-lg shadow-lg hover:border-hijau border-2 transition-transform transform hover:scale-105 dark:hover:border-biru dark:bg-abu">
              <h3 className="text-xl font-bold text-hijau text-center md:text-left dark:text-putih">
                Keamanan Data dan Infrastruktur Cloud
              </h3>
              <p className="m-1 text-justify text-abu hover:text-hitam dark:text-putih dark:hover:text-mint">
                Implementasi standar keamanan ISO 27001 dan hosting cloud yang
                aman dan scalable untuk melindungi data klien.
              </p>
            </div>
          </div>
        </section>

        <section data-aos="fade-up" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-biru text-center md:text-left dark:text-putih">
            Solusi untuk Layanan Notaris
          </h2>
          <div className="space-y-6">
            <div className="p-6 bg-putih rounded-lg shadow-lg hover:border-hijau border-2 transition-transform transform hover:scale-105 dark:hover:border-biru dark:bg-abu">
              <h3 className="text-xl font-bold text-hijau text-center md:text-left dark:text-putih">
                Digitalisasi Dokumen
              </h3>
              <p className="m-1 text-justify text-abu hover:text-hitam dark:text-putih dark:hover:text-mint">
                Pemindaian dokumen dengan OCR, penyimpanan digital yang aman,
                dan akses mudah untuk mempercepat proses kerja.
              </p>
            </div>
            <div className="p-6 bg-putih rounded-lg shadow-lg hover:border-hijau border-2 transition-transform transform hover:scale-105 dark:hover:border-biru dark:bg-abu">
              <h3 className="text-xl font-bold text-hijau text-center md:text-left dark:text-putih">
                Sistem Manajemen Layanan Klien
              </h3>
              <p className="m-1 text-justify text-abu hover:text-hitam dark:text-putih dark:hover:text-mint">
                Pendaftaran layanan online dan pemberitahuan otomatis untuk
                meningkatkan pengalaman pelanggan dan efisiensi.
              </p>
            </div>
            <div className="p-6 bg-putih rounded-lg shadow-lg hover:border-hijau border-2 transition-transform transform hover:scale-105 dark:hover:border-biru dark:bg-abu">
              <h3 className="text-xl font-bold text-hijau text-center md:text-left dark:text-putih">
                Keamanan dan Kepatuhan Hukum
              </h3>
              <p className="m-1 text-justify text-abu hover:text-hitam dark:text-putih dark:hover:text-mint">
                Sistem tanda tangan digital dan enkripsi dokumen untuk
                memastikan semua proses sesuai dengan regulasi yang berlaku.
              </p>
            </div>
          </div>
        </section>

        <section data-aos="fade-up" className="justify-between">
          <h2 className="text-2xl font-semibold mb-4 text-center text-hijau dark:text-putih">
            Keuntungan Bermitra dengan Kami
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li className="text-base font-sans text-hitam dark:text-putih">
              <strong className="text-biru dark:text-mint">Pengalaman:</strong>{" "}
              Tim ahli dengan teknologi terkini dan regulasi hukum.
            </li>
            <li className="text-base font-sans text-hitam dark:text-putih">
              <strong className="text-biru dark:text-mint">
                Solusi Custom:
              </strong>{" "}
              Layanan dirancang untuk kebutuhan spesifik Anda.
            </li>
            <li className="text-base font-sans text-hitam dark:text-putih">
              <strong className="text-biru dark:text-mint">
                Dukungan Berkelanjutan:
              </strong>{" "}
              Pelatihan, pemeliharaan, dan pembaruan sistem secara berkala.
            </li>
            <li className="text-base font-sans text-hitam dark:text-putih">
              <strong className="text-biru dark:text-mint">
                Konsultasi IT & Kenotarisan:
              </strong>{" "}
              Memberikan panduan teknis serta solusi hukum yang relevan untuk
              bisnis Anda.
            </li>
            <li className="text-base font-sans text-hitam dark:text-putih">
              <strong className="text-biru dark:text-mint">
                Analisis Data:
              </strong>{" "}
              Menggunakan data untuk menghasilkan wawasan strategis yang
              meningkatkan efisiensi dan pertumbuhan bisnis Anda.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};
