import { FiPhone } from "react-icons/fi";
import { MdOutlineAlternateEmail } from "react-icons/md";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-gray-800 py-12 border-t border-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-8">
          {/* Company Info */}
          <div className="space-y-6 flex flex-col items-start flex-[2]">
            <p className="text-sm text-gray-600 min-w-[400px]">
              Hi, I am Alex. I provide reliable handyman services focused on
              quality and precision. From fixing minor issues to handling larger
              maintenance projects, I ensure every job is completed with care
              and attention to detail.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex-1 min-w-[200px]">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {["services", "about", "contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/#${item}`}
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex-1 min-w-[200px]">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <a
                href="tel:+16195101998"
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                <FiPhone className="w-4 h-4" />
                <span>+1 (619) 510-1998</span>
              </a>
              <a
                href="mailto:service@alxhandyman.com"
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                <MdOutlineAlternateEmail className="w-4 h-4" />
                <span>service@alxhandyman.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-4 px-4 sm:px-6 lg:px-8 mt-6">
        <p className="text-xs text-gray-500">© 2025 All Rights Reserved</p>
        <div className="flex items-center gap-4 text-xs text-gray-500">
          <Link
            href="/privacypolicy"
            className="hover:text-gray-900 transition-colors"
          >
            Privacy Policy
          </Link>
          <span>•</span>
          <Link
            href="/termsofuse"
            className="hover:text-gray-900 transition-colors"
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
