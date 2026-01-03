import React from "react";
import { Section_head } from "../../component/Section_head";
import InternshipFAQ from "./Internship_faq";
import Button from "../../component/Button";
import Internship_img from "../../assets/images/Internship.png";

const InternshipPage = () => {
  const roles = [
    {
      title: "Frontend Developer Intern",
      desc: "Work on real-world React & Tailwind projects and sharpen your frontend game.",
      skills: ["HTML", "CSS", "JavaScript", "React"],
    },
    {
      title: "Data Science Intern",
      desc: "Analyze data, build models, and get hands-on experience with Python & ML.",
      skills: ["Python", "Pandas", "NumPy", "Machine Learning"],
    },
    {
      title: "Marketing Intern",
      desc: "Work on branding, campaigns, and digital growth strategies.",
      skills: ["SEO", "Social Media", "Content Creation"],
    },
  ];

  const testimonials = [
    {
      name: "Ali Khan",
      role: "Frontend Intern",
      feedback: "Real projects, real learning. This internship boosted my confidence.",
    },
    {
      name: "Sara Ahmed",
      role: "Data Science Intern",
      feedback: "Great mentorship and a very supportive environment.",
    },
  ];

  return (
    <>
      <Section_head Section_head={"INTERNSHIP"} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">

        {/* HERO */}
        <section className="text-center py-20 bg-gradient-to-b from-white via-blue-50/60 to-blue-100 rounded-2xl shadow-lg text-[#1076BC] space-y-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold">
            Kickstart Your Career With Us
          </h1>
          <p className="text-xxl md:text-xxl opacity-80 max-w-3xl mx-auto">
            Gain real-world experience, build industry-ready skills, and grow with a professional team.
          </p>
          <Button />

        </section>

        {/* ABOUT */}
        <section className="grid md:grid-cols-2 gap-10 items-center">
  {/* LEFT CONTENT */}
  <div className="space-y-5 text-center md:text-left">
    <h2 className="text-3xl md:text-4xl font-bold text-[#1076BC] leading-tight">
      About the Internship
    </h2>

    <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
      Our internship program runs for <span className="font-semibold text-[#1076BC]">2–6 months</span> 
      and is designed to give you real-world exposure through hands-on projects,
      expert mentorship, and industry-level practices.
    </p>

    <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
      You won’t just learn — you’ll <span className="font-semibold">build, collaborate,</span> 
      and grow professionally. A verified internship certificate is awarded after
      successful completion.
    </p>

    <div className="flex justify-center md:justify-start gap-4 pt-2">
      <span className="px-4 py-2 rounded-full bg-[#1076BC]/10 text-[#1076BC] text-sm font-semibold">
        Real Projects
      </span>
      <span className="px-4 py-2 rounded-full bg-[#1076BC]/10 text-[#1076BC] text-sm font-semibold">
        Mentorship
      </span>
      <span className="px-4 py-2 rounded-full bg-[#1076BC]/10 text-[#1076BC] text-sm font-semibold">
        Certificate
      </span>
    </div>
  </div>

 {/* RIGHT IMAGE */}
<div>
  <img
    src={Internship_img}
    alt="Internship Experience"
    className="w-full rounded-xl object-cover"  />
</div>

</section>


        {/* ROLES */}
        <section className="space-y-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1076BC]">
            Internship Roles
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {roles.map((role, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 border-t-4 border-[#1076BC]"
              >
                <h3 className="text-xl font-bold text-[#1076BC] mb-2">
                  {role.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {role.desc}
                </p>
                <p className="font-semibold text-gray-700 mb-2">
                  Skills Required:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {role.skills.map((skill, i) => (
                    <li key={i}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* BENEFITS */}
        <section className="bg-gradient-to-b from-white via-blue-50/60 to-blue-100 rounded-2xl p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1076BC] mb-12">
            What You’ll Gain
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              "Real Project Experience",
              "Expert Mentorship",
              "Industry Exposure",
              "Internship Certificate",
              "Stipend Opportunities",
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-xl transition transform hover:-translate-y-2 border-t-4 border-[#1076BC]"
              >
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-[#1076BC]/10 text-[#1076BC] font-bold text-xl">
                  {idx + 1}
                </div>
                <p className="font-semibold text-gray-700">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* PROCESS */}
        <section className="py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1076BC] mb-14">
            Application Process
          </h2>

          <div className="max-w-4xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-10 text-center">
            {[
              { step: "01", title: "Apply Online", desc: "Submit your application and upload your CV." },
              { step: "02", title: "Interview", desc: "Shortlisted candidates are contacted for interview." },
              { step: "03", title: "Onboarding", desc: "Final selection and internship onboarding." },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2 border-b-4 border-[#1076BC]"
              >
                <div className="text-5xl font-extrabold text-[#1076BC] mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <InternshipFAQ />

        {/* TESTIMONIALS */}
        <section className="space-y-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1076BC]">
            What Our Interns Say
          </h2>

          <div className="grid sm:grid-cols-2 gap-8">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="bg-[#1076BC]/5 p-6 rounded-2xl shadow-md hover:shadow-lg transition"
              >
                <p className="text-gray-700 italic text-lg">
                  “{t.feedback}”
                </p>
                <p className="mt-4 font-bold text-gray-900">
                  {t.name}
                </p>
                <p className="text-[#1076BC]">
                  {t.role}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="text-center py-16 bg-gradient-to-b from-white via-blue-50/60 to-blue-100 rounded-2xl shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1076BC] mb-6">
            Ready to Apply?
          </h2>
          <Button />
        </section>

      </div>
    </>
  );
};

export default InternshipPage;
