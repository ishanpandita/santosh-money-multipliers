"use client";

 import { useState } from "react";
import ServiceCard from "@/components/ServiceCard";
import PartnerLogos from "@/components/PartnerLogos";


export default function HomePage() {
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

   const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    }

    setLoading(false);
  };
  
  return (
    <main>
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-teal-700 via-teal-1000 to-emerald-700 text-white py-16 md:py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-4">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            Secure Your Financial Future Today
          </h1>
          <p className="text-lg md:text-xl text-teal-100 mb-6 max-w-3xl mx-auto">
            Expert guidance for LIC, Car Insurance, Health Insurance & Mutual Funds
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact-section"
              className="bg-white text-teal-800 px-7 py-3.5 rounded-lg font-semibold hover:bg-teal-50 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT US SECTION */}
      <section
        id="about-section"
        className="scroll-mt-24 py-14 md:py-16 px-4 sm:px-6 lg:px-8 bg-slate-50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-semibold mb-5">
              <span className="w-2 h-2 bg-teal-700 rounded-full"></span>
              About Santosh Money Multiplier
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-4">
              Helping you move towards{" "}
              <span className="text-teal-700">Financial Independence</span>
            </h2>

            <p className="text-base md:text-lg text-slate-700 leading-relaxed mb-5">
              Santosh Money Multiplier provides trusted financial and insurance
              guidance across life goals, protection planning, and wealth
              creation. Our approach is simple: understand your needs, explain
              options clearly, and help you choose the right plan with
              confidence.
            </p>

            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-7">
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Areas we help with
              </h3>
              <div className="grid sm:grid-cols-2 gap-2.5">
                {[
                  "Children Higher Education Fund",
                  "Life Goals Planning",
                  "Children Marriage Planning",
                  "Money Tree / Wealth Building",
                  "Health Insurance Planning",
                  "Property & Assets Protection",
                  "Vehicle Insurance",
                  "Home Insurance",
                  "Mutual Funds",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-2 text-slate-700"
                  >
                    <svg
                      className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-sm md:text-base">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section
        id="services-section"
        className="scroll-mt-24 py-14 md:py-16 px-4 sm:px-6 lg:px-8 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
              Services We Provide
            </h2>
            <p className="text-base text-slate-600 max-w-2xl mx-auto">
              Comprehensive financial solutions tailored to your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              title="Life Insurance (LIC)"
              description="Secure your family's future with trusted LIC policies designed to protect your loved ones."
              icon="shield"
            />
            <ServiceCard
              title="Car & Vehicle Insurance"
              description="Protect your vehicles with comprehensive insurance coverage and hassle-free claims."
              icon="car"
            />
            <ServiceCard
              title="Health Insurance"
              description="Stay financially secure during medical emergencies with comprehensive health coverage."
              icon="health"
            />
            <ServiceCard
              title="Mutual Funds"
              description="Grow your wealth through smart investment planning and diversified portfolios."
              icon="chart"
            />
            <ServiceCard
              title="Children Education Planning"
              description="Plan your child's higher education goals wisely with structured investment plans."
              icon="education"
            />
            <ServiceCard
              title="Property & Asset Insurance"
              description="Protect your home and valuable assets with comprehensive property insurance."
              icon="home"
            />
          </div>
        </div>
      </section>

      {/* PARTNER LOGOS */}
      <PartnerLogos />

      {/* CONTACT SECTION */}
      <section
        id="contact-section"
        className="scroll-mt-24 bg-gradient-to-br from-slate-50 to-teal-50 py-14 md:py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">Submit Your Details</h2>
            <p className="text-base text-slate-600">
              Lets make your personalized financial plan
            </p>
          </div>
          <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-lg p-6 md:p-8 space-y-4"
        >
          <input
            id="name"
            value={formData.name}
            onChange={handleChange}
            type="text"
            placeholder="Your Name"
            required
            className="w-full p-2 border rounded-lg"
          />

          <input
            id="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder="Your Email"
            required
            className="w-full p-2 border rounded-lg"
          />

          <input
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            type="tel"
            placeholder="Phone Number"
            required
            className="w-full p-2 border rounded-lg"
          />

          <select
            id="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-lg"
          >
            <option value="">Select Service</option>
            <option>Children Higher Education Fund</option>
            <option>Life Goals Planning</option>
            <option>Children Marriage Planning</option>
            <option>Money Tree / Wealth Building</option>
            <option>Health Insurance Planning</option>
            <option>Property & Assets Protection</option>
            <option>Vehicle Insurance</option>
            <option>Home Insurance</option>
            <option>Mutual Funds</option>
          </select>

          <textarea
            id="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows={4}
            className="w-full p-2 border rounded-lg"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-teal-700 text-white py-3 rounded-lg"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>

          <p className="text-center text-sm text-slate-500">
            Submit form for faster call back
          </p>

          {success && (
            <p className="text-center text-green-600 font-semibold">
              Thank you! We will contact you soon.
            </p>
          )}
        </form>


        </div>
      </section>

      {/* FOUNDER SECTION */}
      <section className="py-12 md:py-14 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 md:p-8">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-14 h-14 bg-gradient-to-br from-teal-700 to-emerald-700 rounded-2xl flex items-center justify-center shadow-lg">
                  <svg
                    className="w-7 h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Founder / Advisor</p>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Sanjay Gupta & Reema Gupta
                  </h3>
                  <p className="text-slate-600 mt-1">
                    Santosh Money Multiplier
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                  {/* Combined Phones & Emails - Single Compact Box */}
                  <div className="p-6 rounded-xl border border-teal-200 bg-gradient-to-r from-teal-50 to-blue-50">
                    <div className="grid grid-cols-2 gap-6">
                      
                      {/* Left Column - Phones */}
                      <div className="space-y-3">
                        <div className="flex items-center gap-3 p-3 bg-white/80 backdrop-blur-sm rounded-lg border border-teal-100 hover:border-teal-200 transition-all">
                          <div className="w-10 h-10 rounded-lg bg-teal-100 flex items-center justify-center flex-shrink-0">
                            <svg className="w-5 h-5 text-teal-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                          </div>
                          <div>
                            <a href="tel:+919419208738" className="font-semibold text-slate-900 hover:text-teal-700 block">+91 9419208738</a>
                            <p className="text-xs text-slate-500">Primary</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 p-3 bg-white/80 backdrop-blur-sm rounded-lg border border-teal-100 hover:border-teal-200 transition-all">
                          <div className="w-10 h-10 rounded-lg bg-teal-100 flex items-center justify-center flex-shrink-0">
                            <svg className="w-5 h-5 text-teal-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                          </div>
                          <div>
                            <a href="tel:+919112233445" className="font-semibold text-slate-900 hover:text-teal-700 block">+91 9419188064</a>
                            <p className="text-xs text-slate-500">Secondary</p>
                          </div>
                        </div>
                      </div>

                      {/* Right Column - Emails */}
                      <div className="space-y-3">
                        <div className="flex items-center gap-3 p-3 bg-white/80 backdrop-blur-sm rounded-lg border border-teal-100 hover:border-teal-200 transition-all">
                          <div className="w-10 h-10 rounded-lg bg-teal-100 flex items-center justify-center flex-shrink-0">
                            <svg className="w-5 h-5 text-teal-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 8h18a2 2 0 002-2V8a2 2 0 00-2-2H3a2 2 0 00-2 2v6a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <div>
                            <a href="mailto:sanjay.gupta666@yahoo.com" className="font-semibold text-slate-900 hover:text-teal-700 block">sanjay.gupta666@yahoo.com</a>
                            <p className="text-xs text-slate-500">Primary</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 p-3 bg-white/80 backdrop-blur-sm rounded-lg border border-teal-100 hover:border-teal-200 transition-all">
                          <div className="w-10 h-10 rounded-lg bg-teal-100 flex items-center justify-center flex-shrink-0">
                            <svg className="w-5 h-5 text-teal-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 8h18a2 2 0 002-2V8a2 2 0 00-2-2H3a2 2 0 00-2 2v6a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <div>
                            <a href="mailto:vatsalg340@gmail.com" className="font-semibold text-slate-900 hover:text-teal-700 block">vatsalg340@gmail.com</a>
                            <p className="text-xs text-slate-500">Secondary</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Address Section */}
                  <div className="flex items-start gap-3 p-4 rounded-xl border border-slate-200">
                    <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center mt-1">
                      <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Address</p>
                      <p className="font-semibold text-slate-900 leading-relaxed">
                        7B/C Gandhi Nagar Jammu 180004
                      </p>
                      <br />
                      <p className="font-semibold text-slate-900 leading-relaxed">
                        Opp. Shree Ram Sharnam Ashram, Near Eden Garden Shanti Nagar, Jammu - 180001
                      </p>
                    </div>
                  </div>
                </div>


              <div className="mt-6">
                <a
                  href="https://calendly.com/team-santoshmoneymultiplier/30min"
                  target="_blank"
                  className="inline-flex items-center justify-center gap-2 w-full bg-emerald-600 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-emerald-700 shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  Book Free Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
