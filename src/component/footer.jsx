import courseBanner from "../assets/images/Footer-banner.webp";
import foot1 from "../assets/images/foot-map.webp";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";


const Footer = () => {
  return (
    <footer
      className="bg-gradient-to-br from-[#0A0F12] via-[#0F1112] to-[#1A1E20] relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.5)), url(${courseBanner})`,
      }}
    >
      <div className="container mx-auto px-4 relative z-20">
        {/* Footer Top: Logo + Social Icons */}
        <div className="flex lg:justify-between md:justify-between sm:justify-between justify-between items-center w-full flex-wrap">
          {/* Logo */}
          <img
            src="src/assets/images/Foot-logo.webp"
            alt="Site Logo"
            className="w-32 sm:w-44 md:w-52 object-contain"
          />

          {/* Social Icons */}
          <div className="flex items-center gap-6 p-3">
            {[FaFacebookF, FaLinkedinIn, FaWhatsapp, FaInstagram].map((Icon, index) => (
              <span
                key={index}
                className="group w-9 h-9 sm:w-10 sm:h-10 rounded-[10px]  bg-[#1A1E22] flex items-center justify-center hover:bg-[#1076BC] transition-all duration-300 cursor-pointer"
              >
                <Icon className="text-[#1076BC] text-[1rem] group-hover:text-white transition-all duration-300" />
              </span>
            ))}
          </div>
        </div>


        {/* Footer Links + Map */}
        <div className="relative py-12 flex flex-col lg:flex-row items-start gap-10 lg:gap-20 border-y border-[#262A2E]">

          {/* All Link Sections */}
          <div className="flex flex-wrap gap-10 sm:gap-16 lg:gap-20">
            {/* Admission */}
            <div className="flex-1 min-w-[150px]">
              <h4 className="text-white font-poppins text-2xl font-semibold mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-gradient-to-r after:from-[#1076BC] after:to-transparent">
                Admission
              </h4>
              <ul className="space-y-4">
                {['Admission', 'Academics', 'Research', 'Administration'].map(link => (
                  <li key={link} className="flex items-center gap-2 cursor-pointer group">
                    <i className="fa-solid fa-caret-right text-blue-500 transition-transform duration-300 group-hover:rotate-90"></i>
                    <a
                      href="#"
                      className="text-white/70 uppercase tracking-wider text-base transition-all duration-300 group-hover:text-[#1076BC] group-hover:translate-x-2"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Explore */}
            <div className="flex-1 min-w-[150px]">
              <h4 className="text-white font-poppins text-2xl font-semibold mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-gradient-to-r after:from-[#1076BC] after:to-transparent">
                Explore
              </h4>
              <ul className="space-y-4">
                {['Campus Direction', 'Employment'].map(link => (
                  <li key={link} className="flex items-center gap-2 cursor-pointer group">
                    <i className="fa-solid fa-caret-right text-blue-500 transition-transform duration-300 group-hover:rotate-90"></i>
                    <a
                      href="#"
                      className="text-white/70 uppercase tracking-wider text-base transition-all duration-300 group-hover:text-[#1076BC] group-hover:translate-x-2"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Policies */}
            <div className="flex-1 min-w-[150px]">
              <h4 className="text-white font-poppins text-2xl font-semibold mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-gradient-to-r after:from-[#1076BC] after:to-transparent">
                Policies
              </h4>
              <ul className="space-y-4">
                {['FAQ', 'Contact Us', 'Privacy Policy'].map(link => (
                  <li key={link} className="flex items-center gap-2 cursor-pointer group">
                    <i className="fa-solid fa-caret-right text-blue-500 transition-transform duration-300 group-hover:rotate-90"></i>
                    <a
                      href="#"
                      className="text-white/70 uppercase tracking-wider text-base transition-all duration-300 group-hover:text-[#1076BC] group-hover:translate-x-2"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="flex-1 min-w-[150px]">
              <h4 className="text-white font-poppins text-2xl font-semibold mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-gradient-to-r after:from-[#1076BC] after:to-transparent">
                Contact Info
              </h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <i className="fas fa-map-marker-alt text-blue-500 mt-1 w-5"></i>
                  <p className="text-white/70 text-sm">
                    Main Auto Bahn Road, Latifabad Unit 3, Hyderabad, Sindh, Pakistan
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <i className="fas fa-phone text-blue-500 w-5"></i>
                  <p className="text-white/70 text-sm">(022) 6132970</p>
                </div>
                <div className="flex items-center gap-3">
                  <i className="fas fa-phone text-blue-500 w-5"></i>
                  <p className="text-white/70 text-sm">03353253513</p>
                </div>
                <div className="flex items-center gap-3">
                  <i className="fas fa-envelope text-blue-500 w-5"></i>
                  <p className="text-white/70 text-sm">info@pixxelhouse.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Image */}
          <div className="flex justify-center lg:justify-end w-full sm:w-sm md:w-md mx-auto lg:w-70 ">
            <img
              src={foot1}
              alt="Map"
              className="w-full  object-cover rounded-xl"
            />
          </div>
        </div>

        {/* Newsletter Horizontal */}
        <div className="my-10 flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-4">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <i className="fa-solid fa-envelope text-4xl text-[#1076BC]"></i>
            <h4 className="text-white font-poppins text-2xl font-semibold">
              Our Newsletter
            </h4>
          </div>

          <form className="flex flex-col sm:flex-row w-full sm:w-[60%] relative">
            <input
              type="email"
              placeholder="E-mail Address"
              className="w-full px-4 py-2 bg-[#262A2E]/20 border border-[#2A2E32] rounded-3xl text-white placeholder:text-white/50 text-base transition-all duration-300 focus:border-[#1076BC] focus:outline-none"
            />
            <button
              type="submit"
              className="mt-4 sm:mt-0 sm:absolute sm:right-0 bg-gradient-to-br from-[#1076BC] to-[#1076BC] py-2 px-6 rounded-3xl text-white font-semibold uppercase tracking-wider transition-all duration-300"
            >
              Subscribe Now
            </button>
          </form>
        </div>

        {/* Footer Bottom */}
        <div className="py-8 border-t border-[#262A2E]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-white/70">

              <span className="text-sm text-gray-400">
                &copy; {new Date().getFullYear()}{" "}
                <a
                  href="#"
                  className="text-white font-medium hover:text-blue-400 transition-colors duration-300"
                >
                  PixxelHouse
                </a>{" "}
                — All rights reserved.
              </span>

            </div>
            <div className="flex flex-wrap justify-center md:justify-end gap-4">
              {['Privacy Policy', 'SITEMAP', 'TERMS', 'Contact Us'].map(policy => (
                <a
                  key={policy}
                  href="#"
                  className="text-white/70 hover:text-[#1076BC] text-xs uppercase tracking-wider transition-colors duration-300"
                >
                  {policy}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
