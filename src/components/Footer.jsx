import "react";
import { Link } from "react-router-dom";
import Logo from "../assets/gbr/LOGO2_1.webp";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const Bagian = () => {
  const yearNow = new Date().getFullYear();

  useEffect(() => {
    AOS.init({
      offset: 50, // Jarak dari atas saat animasi dimulai
      duration: 800, // Durasi animasi
      once: true, // Animasi hanya muncul sekali
    });
  }, []);

  return (
    <footer className="pb-0 bg-biru border-hijau dark:bg-hitam dark:border-putih w-full border-t-2 overflow-hidden flex-col flex">
      <div className="flex flex-col md:flex-row lg:flex-row gap-4 lg:gap-10 md:px-6 px-2 py-2">
        <div className="m-2 lg:m-6 flex flex-col gap-2 md:w-2/3">
          <Link to="/" className="flex-row flex items-center gap-2">
            <img
              src={Logo}
              alt="BTS"
              className="rounded-full w-16 h-16 bg-mint/80 dark:bg-putih shadow-xl"
              loading="lazy"
              data-aos="flip-left"
              data-aos-duration="1000"
            />
            <div className="flex flex-col font-sans text-mint dark:text-putih">
              <span
                className="lg:text-lg text-base font-medium"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                BERKAT
              </span>
              <span
                className="lg:text-lg text-base font-medium"
                data-aos="fade-left"
                data-aos-duration="1500"
              >
                TERANG
              </span>
              <span
                className="lg:text-lg text-base font-medium"
                data-aos="fade-left"
                data-aos-duration="2000"
              >
                SOLUSINDO
              </span>
            </div>
          </Link>
          <h1
            className="lg:text-2xl text-lg mt-3 text-putih"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            Kami merupakan solusi yang tepat untuk
            <span className="hover:text-kuning cursor-pointer">
              {" "}
              Jasa Telekomunikasi,
            </span>{" "}
            <span className="hover:text-kuning cursor-pointer">
              {" "}
              Jasa Perdagangan
            </span>{" "}
            &amp;
            <span className="hover:text-kuning cursor-pointer">
              {" "}
              Konsultasi IT
            </span>{" "}
            perusahaan anda.
          </h1>
          <div
            className="flex flex-row gap-2 items-center"
            data-aos="fade-right"
            data-aos-duration="2500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 text-mint dark:text-putih"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
            <a
              href="mailto:info@berkatterangsolusindo.com"
              className="cursor-pointer lg:text-xl text-base pt-2 text-mint dark:text-putih"
            >
              info@berkatterangsolusindo.com
            </a>
          </div>
          <hr
            className="h-px rounded my-1 w-full bg-kuning dark:bg-mint border-0"
            data-aos="fade-left"
            data-aos-duration="1000"
          ></hr>
          <div
            className="flex flex-row gap-2 items-center mb-4"
            data-aos="fade-right"
            data-aos-duration="3000"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-mint dark:text-putih"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 5h2a2 2 0 012 2v2a2 2 0 01-.582 1.416l-1.5 1.5a16.018 16.018 0 006.585 6.585l1.5-1.5A2 2 0 0115 17h2a2 2 0 012 2v2a2 2 0 01-2 2h-1C7.163 21 3 16.837 3 11V10a2 2 0 012-2z"
              />
            </svg>

            <a
              href="tel:+6281808102191"
              className="cursor-pointer lg:text-xl text-base text-mint dark:text-putih"
            >
              +62-818-0810-2191
            </a>
          </div>
        </div>
        <div className="m-2 lg:m-6 md:w-2/6">
          <h2
            className="lg:text-2xl text-xl font-bold text-putih"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            Jelajahi Kami
          </h2>
          <hr className="h-px rounded my-2 w-full bg-kuning border-0 dark:bg-mint"></hr>
          <ul className="lg:text-xl text-base mt-3 text-mint dark:text-putih">
            <li className="mb-4" data-aos="fade-up" data-aos-duration="1000">
              <Link to="/about" className=" hover:underline">
                Tentang Kami
              </Link>
            </li>
            <li className="mb-4" data-aos="fade-up" data-aos-duration="1000">
              <Link to="/client" className="hover:underline">
                Mitra Kami
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-putih dark:bg-abu dark:border-putih border-t-2 border-kuning px-4 py-6 md:flex md:items-center md:gap-2 md:justify-between">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <span className="text-biru dark:text-putih font-kanit font-light">
            &copy; {yearNow}{" "}
            <Link
              to="/about"
              className="text-biru hover:text-hijau dark:text-putih dark:hover:text-kuning"
            >
              PT Berkat Terang Solusindo
            </Link>
            . All Rights Reserved
          </span>
        </div>
        <div className="flex mt-4 space-x-6 justify-center font-kanit font-light md:mt-0">
          <a
            href="#"
            className="text-biru dark:text-putih dark:hover:text-kuning hover:text-hijau"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clipRule="evenodd"
              />
            </svg>
            <span className="sr-only">Facebook page</span>
          </a>
          <a
            href="#"
            className="text-biru hover:text-hijau dark:text-putih dark:hover:text-kuning"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="sr-only">Instagram page</span>
          </a>
          <a
            href="#"
            className="text-biru hover:text-hijau dark:text-putih dark:hover:text-kuning"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 8c0 .557-.447 1.008-1 1.008s-1-.45-1-1.008c0-.557.447-1.008 1-1.008s1 .452 1 1.008zm0 2h-2v6h2v-6zm3 0h-2v6h2v-2.861c0-1.722 2.002-1.881 2.002 0v2.861h1.998v-3.359c0-3.284-3.128-3.164-4-1.548v-1.093z"
                clipRule="evenodd"
              />
            </svg>
            <span className="sr-only">Twitter page</span>
          </a>
        </div>
      </div>
    </footer>
  );
};
