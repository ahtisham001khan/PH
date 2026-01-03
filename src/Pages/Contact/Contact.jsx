import React, { useState } from "react";
import Button from "../../component/Button";
import { Section_head } from '../../component/Section_head'


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);

    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });

    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <main className="bg-gradient-to-b from-white via-blue-50/50 to-blue-100 min-h-screen">

      {/* HERO */}
<Section_head Section_head={"Contact US"} />

      {/* MAIN SECTION */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-20 py-12 grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* CONTACT FORM */}
        <div className="bg-white/60 backdrop-blur-sm shadow-lg rounded-2xl p-8 md:p-12 hover:shadow-2xl transition-all">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Get In Touch
          </h2>

          {submitted && (
            <div className="mb-6 text-green-600 font-medium animate-fade-in">
              Message sent successfully!
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="max-w-2xl mx-auto flex flex-col gap-5 text-left"
          >

            {/* Name */}
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-[#1076BC]/40 rounded-lg px-4 py-3 bg-white/60 placeholder-gray-500 text-gray-800 outline-none focus:ring-2 focus:ring-[#1076BC] transition"
              />
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-[#1076BC]/40 rounded-lg px-4 py-3 bg-white/60 placeholder-gray-500 text-gray-800 outline-none focus:ring-2 focus:ring-[#1076BC] transition"
              />
            </div>

            {/* Subject */}
            <div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full border border-[#1076BC]/40 rounded-lg px-4 py-3 bg-white/60 placeholder-gray-500 text-gray-800 outline-none focus:ring-2 focus:ring-[#1076BC] transition"
              />
            </div>

            {/* Message */}
            <div>
              <textarea
                name="message"
                placeholder="Your Message..."
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full border border-[#1076BC]/40 rounded-lg px-4 py-3 bg-white/60 placeholder-gray-500 text-gray-800 outline-none focus:ring-2 focus:ring-[#1076BC] transition resize-none"
              ></textarea>
            </div>

            {/* Button */}
            <div className="text-center mt-4">
              <Button text="Send Message" type="submit" />
            </div>
          </form>

        </div>

        {/* CONTACT INFO */}
        <div className="flex flex-col justify-center gap-6">

          <div className="bg-white/60 backdrop-blur-sm shadow-lg rounded-2xl p-6 md:p-8 text-gray-700">
            <ul className="space-y-5">

              {/* Address */}
              <li className="flex items-start gap-4">
                <i class="text-[25px] text-[#1076BC] fa-solid fa-location-dot"></i>
                <div>
                  <p className="font-medium text-gray-900">Address</p>
                  <p>Main Auto Bahn Road, Latifabad Unit 3,</p>
                  <p>Hyderabad, Sindh, Pakistan</p>
                </div>
              </li>

              {/* Phone */}
              <li className="flex items-start gap-4">
                <i class="text-[25px] text-[#1076BC] fa-solid fa-phone"></i>
                <div>
                  <p className="font-medium text-gray-900">Phone</p>
                  <p>(022) 3821470</p>
                  <p>0335 3253513</p>
                </div>
              </li>

              {/* Email */}
              <li className="flex items-start gap-4">
                <i class="text-[25px] text-[#1076BC] fa-solid fa-envelope"></i>
                <div>
                  <p className="font-medium text-gray-900">Email</p>
                  <p>
                    <a
                      href="mailto:info@pixxelhouse.com"
                      className="text-blue-600 hover:underline"
                    >
                      info@pixxelhouse.com
                    </a>
                  </p>
                </div>
              </li>

            </ul>
          </div>

          {/* MAP OR IMAGE BOX */}
          <div className="bg-white/60 backdrop-blur-sm shadow-lg rounded-2xl h-64 md:h-80 flex items-center justify-center overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2849.157021616541!2d68.33888727416048!3d25.375866124442982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394c7132dc31258f%3A0xb6578e25de0cbcd4!2sInstitute%20of%20pixxel%20house!5e1!3m2!1sen!2s!4v1763211630042!5m2!1sen!2s"
              className="w-full h-full rounded-2xl"
              loading="lazy"
              allowFullScreen=""
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>
      </section>
    </main>
  );
};

export default Contact;
