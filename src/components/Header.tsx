import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Shield, X } from "lucide-react";
import { cn } from "@/lib/utils";
const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/contact", label: "Contact" },
];
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const NavLinks = ({ className }: { className?: string }) => (
    <nav className={cn("flex items-center gap-6 text-base font-medium", className)}>
      {navLinks.map((link) => (
        <NavLink
          key={link.href}
          to={link.href}
          onClick={() => setIsMenuOpen(false)}
          className={({ isActive }) =>
            cn(
              "text-slate-600 transition-colors hover:text-orange-500",
              isActive && "text-orange-500 font-semibold"
            )
          }
        >
          {link.label}
        </NavLink>
      ))}
    </nav>
  );
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-slate-50/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2 text-2xl font-display font-bold text-slate-800">
            <Shield className="h-7 w-7 text-orange-500" />
            <span>Maryland Guardian Pest Solutions</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <NavLinks />
            <Button asChild className="bg-orange-500 text-white hover:bg-orange-600 hover:scale-105 transition-all duration-200 ease-in-out shadow-sm hover:shadow-md">
              <Link to="/contact">Get a Free Quote</Link>
            </Button>
          </div>
          <div className="md:hidden">
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-xs bg-slate-50">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between p-4 border-b border-slate-200">
                     <Link to="/" className="flex items-center gap-2 text-xl font-display font-bold text-slate-800">
                        <Shield className="h-6 w-6 text-orange-500" />
                        <span>Maryland Guardian Pest Solutions</span>
                    </Link>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon">
                            <X className="h-6 w-6" />
                            <span className="sr-only">Close menu</span>
                        </Button>
                    </SheetTrigger>
                  </div>
                  <div className="flex-grow p-4">
                    <NavLinks className="flex-col items-start space-y-6" />
                  </div>
                   <div className="p-4 border-t border-slate-200">
                     <Button asChild className="w-full bg-orange-500 text-white hover:bg-orange-600">
                        <Link to="/contact">Get a Free Quote</Link>
                    </Button>
                   </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}