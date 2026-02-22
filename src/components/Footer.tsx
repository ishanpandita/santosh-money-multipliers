import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white mt-20 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              

              <h3 className="text-xl font-bold">
                Santosh Money Multiplier
              </h3>
            </div>

            <p className="text-slate-400 mb-4">
              Your trusted partner for comprehensive financial solutions and insurance services.
            </p>

            <p className="text-sm text-slate-500">
              LIC | Car Insurance | Health Insurance | Mutual Funds
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-slate-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#about-section" className="text-slate-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#services-section" className="text-slate-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/#contact-section" className="text-slate-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Get In Touch</h4>
            <ul className="space-y-3">
              
              {/* Calendly */}
              <li>
                <a
                  href="https://calendly.com/team-santoshmoneymultiplier/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors inline-flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Book Consultation
                </a>
              </li>

              {/* ✅ ADDED INSTAGRAM */}
              <li>
                <a
                  href="https://instagram.com/santosh__money_multiplier"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-pink-500 transition-colors inline-flex items-center gap-2"
                >
                  <FaInstagram className="w-4 h-4" />
                  Instagram
                </a>
              </li>

            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Santosh Money Multiplier. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}