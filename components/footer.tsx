import { Building2 } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "HVAC", href: "/hvac" },
    { label: "Building Materials", href: "/building-materials" },
    { label: "Contact", href: "/contact" }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Navigation */}
          <div>
            <div className="flex items-center space-x-2 mb-8">
              <Building2 className="h-8 w-8" />
              <span className="font-bold text-xl">Al Egaby Gen. Tr. (L.L.C)</span>
            </div>
            <nav className="grid grid-cols-2 gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Company Info */}
          <div className="text-gray-400">
            <p className="mb-4">
              BuildTech Solutions is your trusted partner in construction and HVAC solutions.
              Building tomorrow's infrastructure today with innovation and excellence.
            </p>
            <p>&copy; {new Date().getFullYear()} BuildTech Solutions. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}