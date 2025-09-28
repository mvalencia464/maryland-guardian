import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bug, Home, Rat, Bed, SprayCan, ShieldAlert, BugIcon, Dog, Droplets, Mountain } from "lucide-react";
const services = [
    { icon: Bug, title: "Ant Control Services", description: "Targeted treatments for carpenter ants, odorous house ants, and other common ant species." },
    { icon: Home, title: "Termite Inspection and Treatment", description: "Protect your biggest investment from destructive termites with our advanced solutions." },
    { icon: Rat, title: "Rodent Control and Removal", description: "Safe and effective removal of mice, rats, and other rodents, plus exclusion services." },
    { icon: Bed, title: "Bed Bug Extermination", description: "Discreet and thorough heat treatments to completely eliminate bed bugs and their eggs." },
    { icon: SprayCan, title: "Cockroach Control", description: "Comprehensive solutions for German, American, and other common cockroach infestations." },
    { icon: ShieldAlert, title: "Wasp and Hornet Removal", description: "Safe removal of nests from your property to protect your family from painful stings." },
    { icon: BugIcon, title: "Spider Control", description: "Interior and exterior treatments to create a spider-free barrier around your home." },
    { icon: Dog, title: "Flea and Tick Treatment", description: "Protect your family and pets from dangerous fleas and ticks with our yard and home treatments." },
    { icon: Droplets, title: "Mosquito Control", description: "Enjoy your yard again with our effective mosquito reduction programs for the summer." },
    { icon: Mountain, title: "Wildlife Removal Services", description: "Humane removal of raccoons, squirrels, bats, and other unwanted wildlife guests." },
];
export function ServicesPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-800">
            Our Pest Control Services
          </h1>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            We offer a comprehensive range of services to tackle any pest problem, big or small, with solutions tailored to Maryland's unique environment.
          </p>
        </div>
      </section>
      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-200 ease-in-out">
              <CardHeader>
                <CardTitle className="flex items-center gap-4">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <service.icon className="h-7 w-7 text-orange-600" />
                  </div>
                  <span className="text-xl font-display">{service.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-slate-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      {/* CTA Section */}
      <section className="bg-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
            Don't See Your Pest Problem?
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            If you're dealing with a pest not listed here, don't worry. With over 15 years of experience, we've seen it all. Contact us for a free consultation.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="bg-orange-500 text-white hover:bg-orange-600 hover:scale-105 transition-all duration-200 ease-in-out shadow-sm hover:shadow-md px-8 py-3 text-lg">
              <Link to="/contact">Get a Free Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}