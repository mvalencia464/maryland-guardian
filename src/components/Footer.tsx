import { Link } from "react-router-dom";
import { Shield, Phone, Mail, MapPin } from "lucide-react";
export function Footer() {
  const serviceAreas = [
    "Frederick, MD", "Gaithersburg, MD", "Germantown, MD", "Silver Spring, MD",
    "Rockville, MD", "Bethesda, MD", "Damascus, MD", "Urbana, MD",
    "New Market, MD", "Middletown, MD"
  ];
  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Our Services" },
    { href: "/service-areas", label: "Service Areas" },
    { href: "/contact", label: "Contact Us" },
  ];
  return (
    <footer className="bg-slate-800 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 text-2xl font-display font-bold text-white">
              <Shield className="h-7 w-7 text-orange-500" />
              <span>Maryland Guardian Pest Solutions</span>
            </Link>
            <p className="text-sm text-slate-400">
              Protecting Maryland Homes Since 2009. Your local, trusted pest control experts.
            </p>

          </div>
          {/* Service Areas */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Service Areas</h3>
            <ul className="space-y-2 grid grid-cols-2 gap-x-4">
              {serviceAreas.map((area) => (
                <li key={area}>
                  <Link to="/service-areas" className="text-sm text-slate-400 hover:text-orange-500 transition-colors">{area}</Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-slate-400 hover:text-orange-500 transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                <span className="text-slate-400">1247 Monocacy Boulevard, Frederick, MD 21701</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-orange-500" />
                <a href="tel:301-555-7378" className="text-slate-400 hover:text-orange-500 transition-colors">(301) 555-PEST (7378)</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-orange-500" />
                <a href="mailto:info@mdguardianpest.com" className="text-slate-400 hover:text-orange-500 transition-colors">info@mdguardianpest.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-slate-900 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Maryland Guardian Pest Solutions. All Rights Reserved.</p>
          <p className="mt-1">Built with ❤️ at Cloudflare</p>
        </div>
      </div>
    </footer>
  );
}