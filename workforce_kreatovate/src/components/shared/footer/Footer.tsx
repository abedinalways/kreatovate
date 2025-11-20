"use client";

import Link from "next/link";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { FaDiscord, FaThreads } from "react-icons/fa6";

import Logo from "../Logo";
import { smoothScrollTo } from "@/lib/smoothScroll";

const XIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5"
    aria-hidden="true"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export default function Footer() {
  return (
    <footer
      id="footer"
      className="relative w-full text-white overflow-hidden bg-black"
    >
      {/* Content */}
      <div className="relative z-20 py-16 px-6 sm:px-12 md:px-20 lg:px-36">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-16">
          {/* Brand Section */}
          <div className="space-y-4">
            <Logo />

            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Our AI-powered Marketing Platform gives you an affordable
              enterprise digital marketing and advertising solution that does
              all the heavy lifting.
            </p>

            <div className="flex gap-3 pt-2">
              <Link
                href="https://www.facebook.com/kreatovate/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 btn-gradient rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.instagram.com/kreatovate?igsh=MWl1Y29rcXJlM3V2bg%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 btn-gradient rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="https://x.com/kreatovate?s=21/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 btn-gradient rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <XIcon />
              </Link>
              <Link
                href="https://www.linkedin.com/company/kreatovate-marketing-consultings/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 btn-gradient rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.threads.com/@kreatovate?igshid=NTc4MTIwNjQ2YQ==/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 btn-gradient rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <FaThreads className="w-5 h-5" />
              </Link>
              <Link
                href="https://discord.gg/kmECdpsdK"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 btn-gradient rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <FaDiscord className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#home"
                  onClick={(e) => smoothScrollTo(e, "#home")}
                  className="text-gray-400 hover:text-white"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#about_us"
                  onClick={(e) => smoothScrollTo(e, "#about_us")}
                  className="text-gray-400 hover:text-white"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#our_solutions"
                  onClick={(e) => smoothScrollTo(e, "#our_solutions")}
                  className="text-gray-400 hover:text-white"
                >
                  Our Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="#testimonial"
                  onClick={(e) => smoothScrollTo(e, "#testimonial")}
                  className="text-gray-400 hover:text-white"
                >
                  Testimonial
                </Link>
              </li>
              <li>
                <Link
                  href="#contact_us"
                  onClick={(e) => smoothScrollTo(e, "#contact_us")}
                  className="text-gray-400 hover:text-white"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div>
                <p className="text-gray-500 text-sm mb-1">Email:</p>
                <Link
                  href="mailto:consulting@kreatovate.com"
                  className="text-gray-400 hover:text-white"
                >
                  consulting@kreatovate.com
                </Link>
              </div>
              <div>
                <p className="text-gray-500 text-sm mb-1">Phone:</p>
                <Link
                  href="tel:+18668792929"
                  className="text-gray-400 hover:text-white"
                >
                  +1 (866) 879-2929
                </Link>
              </div>
            </div>
          </div>

          {/* Legals */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legals</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-gray-400 hover:text-white"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-services"
                  className="text-gray-400 hover:text-white"
                >
                  Terms of Services
                </Link>
              </li>
              <li>
                <Link
                  href="/conditions"
                  onClick={(e) => e.preventDefault()}
                  className="text-gray-400 hover:text-white"
                >
                  Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/cookies"
                  onClick={(e) => e.preventDefault()}
                  className="text-gray-400 hover:text-white"
                >
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[rgba(237,28,36,0.2)] mt-10 pt-6">
          <p className="text-center text-gray-500 text-sm">
            © 2025 — Kreatovate. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
