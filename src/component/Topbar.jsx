import {
  FaPhoneAlt,
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Topbar() {
  const socials = [
    { Icon: FaFacebookF, link: "#" },
    { Icon: FaLinkedinIn, link: "#" },
    { Icon: FaWhatsapp, link: "#" },
    { Icon: FaInstagram, link: "#" },
  ];

  return (
    <div className="text-[#1076BC] border-b border-gray-200 bg-white/90 backdrop-blur-md">
      <div className="max-w-[90rem] mx-auto px-3 sm:px-5 md:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center h-auto sm:h-12 py-3 sm:py-0 gap-3 sm:gap-0 text-center sm:text-left">

          {/* Left - Contact Info */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-[#1076BC] text-lg sm:text-xl md:text-[1.1rem]" />
              <span className="font-semibold text-[12px] sm:text-[13px] md:text-[14px] tracking-wide">
                0335-3253513
              </span>
            </div>
            <div className="flex items-center gap-2">
              <MdEmail className="text-[#1076BC] text-lg sm:text-xl md:text-[1.1rem]" />
              <span className="font-semibold text-[12px] sm:text-[13px] md:text-[14px] tracking-wide">
                pixxel.house2004@gmail.com
              </span>
            </div>
          </div>

          {/* Right - Blue Glow Social Buttons */}
          <div className="flex items-center gap-2 sm:gap-2 md:gap-2">
            {socials.map(({ Icon, link }, i) => (
              <a
                key={i}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center justify-center 
      w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 
      rounded-[10px]
     hover:bg-gradient-to-br hover:from-[#1076BC] hover:to-blue-600
      transition-all duration-500 group"
              >

                {/* Icon container */}
                <span className="relative flex items-center justify-center w-full h-full rounded-full transition-all duration-500">
                  <Icon className=" text-[1rem] sm:text-[1rem] md:text-[1.1rem] text-[#1076BC] group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                </span>
              </a>
            ))}
          </div>


        </div>
      </div>
    </div>
  );
}
