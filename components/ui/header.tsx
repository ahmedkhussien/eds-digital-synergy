import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  return (
    <header className="fixed top-2 z-30 w-full md:top-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-white px-3 shadow-md shadow-black/[0.08] backdrop-blur-sm border border-gray-200/80">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#services" className="text-sm font-bold text-gray-600 hover:text-primary transition-colors duration-150">
              Services
            </a>
            <a href="#methodology" className="text-sm font-bold text-gray-600 hover:text-primary transition-colors duration-150">
              Methodology
            </a>
            <a href="#consultation" className="text-sm font-bold text-gray-600 hover:text-primary transition-colors duration-150">
              Contact NOC
            </a>
          </nav>

          {/* Desktop sign in links */}
          <ul className="flex flex-1 items-center justify-end gap-3">
            <li>
              <Link
                href="/signin"
                className="btn-sm bg-white text-gray-800 shadow-sm hover:bg-gray-50 transition duration-150"
              >
                Login
              </Link>
            </li>
            <li>
              <a
                href="#consultation"
                className="btn-sm bg-blue-600 text-white shadow-sm hover:bg-blue-700 transition duration-150"
              >
                Book Consultation
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
