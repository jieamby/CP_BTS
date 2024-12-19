import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const legalServices = [
  "PENDIRIAN PT PERORANGAN",
  "PENDIRIAN PT BADAN (MIKRO)",
  "PENDIRIAN PT BADAN (KECIL)",
  "PENDIRIAN PT BADAN (BESAR/PMA)",
  "PENDIRIAN PERSEKUTUAN KOMANDITER (CV)",
  "PERNGURUSAN SERTIFIKAT (BALIK NAMA)",
  "PERUBAHAN PT (ANGGARAN DASAR, DATA PERSEROAN)",
  "PERUBAHAN PERSEKUTUAN KOMANDITER (CV & FIRMA)",
  "PENDIRIAN FIRMA",
  "PENDIRIAN YAYASAN",
  "PENDIRIAN PERKUMPULAN",
  "AKTA-AKTA KHUSUS",
  "AKTA CABANG",
  "LEGALISASI",
  "WAARMEKING",
  "PEMBUBARAN PERSEROAN",
  "NIB PRIBADI",
  "VERIFIKASI SERTIFIKAT STANDAR",
  "VERIFIKASI KKPR",
  "SPPIRT",
  "RESET AKUN OSS (HILANG)",
  "PETA POLYGON",
  "HAK MEREK (HAKI)",
];

const digitalSolutions = [
  "Digital Fidusia",
  "HRIS",
  "ERP",
  "E-Learning",
  "Work Task Manager",
  "Payroll outsourcing / E-Slip Salary",
  "Custom IT/Aplication/otomatisasi",
  "Vokasi Bisa - link/match lulusan SMK dengan industri/talent management",
];

const Legalitas = () => {
  const [activeTab, setActiveTab] = useState("digital");
  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 50 });
  });

  return (
    <div className="h-auto max-w-screen bg-putih text-hijau dark:bg-abu dark:text-putih py-10 px-5 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <h1
          className="text-4xl font-bold text-center mb-8 space-y-2]"
          data-aos="fade-down"
          data-aos-anchor-placement="top-bottom"
        >
          Layanan Kami
        </h1>

        <div className="flex justify-center mb-8">
          <button
            className={`border-hijau dark:border-mint border px-4 py-2 rounded-l-lg ${
              activeTab === "digital"
                ? "bg-mint dark:bg-biru"
                : "bg-hijau/60 text-putih border-hitam dark:bg-biru/50"
            }`}
            onClick={() => setActiveTab("digital")}
            data-aos="fade-right"
            data-aos-anchor-placement="top-bottom"
          >
            Digital Solutions
          </button>
          <button
            className={`border-hijau dark:border-mint border px-4 py-2 rounded-r-lg ${
              activeTab === "legal"
                ? " bg-mint dark:bg-biru"
                : "bg-hijau/60 text-putih border-hitam dark:bg-biru/50"
            }`}
            onClick={() => setActiveTab("legal")}
            data-aos="fade-left"
            data-aos-anchor-placement="top-bottom"
          >
            Legal Services
          </button>
        </div>

        {activeTab === "legal" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {legalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-mint p-4 border-hijau dark:bg-biru dark:border-putih border-2 rounded-2xl shadow-xl cursor-pointer"
              >
                <p
                  className="lg:text-xl md:text-lg sm:text-base text-base text-center"
                  data-aos="flip-down"
                  data-aos-duration="1000"
                >
                  {service}
                </p>
              </motion.div>
            ))}
          </div>
        )}

        {activeTab === "digital" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {digitalSolutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-mint p-4 border-hijau dark:bg-biru dark:border-putih border-2 rounded-2xl shadow-xl cursor-pointer"
              >
                <p
                  className="lg:text-xl md:text-lg sm:text-base text-base font-sans text-center"
                  data-aos="flip-down"
                  data-aos-duration="1000"
                >
                  {solution}
                </p>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Legalitas;
