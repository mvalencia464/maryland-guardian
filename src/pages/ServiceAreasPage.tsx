import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Check } from "lucide-react";
const frederickCountyAreas = [
  "Frederick (Primary)", "Urbana", "New Market", "Middletown"
];
const montgomeryCountyAreas = [
  "Gaithersburg", "Germantown", "Silver Spring", "Rockville", "Bethesda", "Damascus"
];
export function ServiceAreasPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
          <MapPin className="h-16 w-16 text-orange-500 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-800">
            Our Service Areas
          </h1>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            We proudly provide expert pest control services to homes and businesses throughout Frederick and Montgomery Counties.
          </p>
        </div>
      </section>
      {/* Areas List Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {/* Frederick County */}
          <div>
            <h2 className="text-3xl font-display font-bold text-slate-800 border-b-2 border-orange-500 pb-2 mb-6">
              Frederick County
            </h2>
            <ul className="space-y-4">
              {frederickCountyAreas.map((area) => (
                <li key={area} className="flex items-center gap-3">
                  <Check className="h-6 w-6 text-green-600 flex-shrink-0" />
                  <span className="text-lg text-slate-700">{area}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* Montgomery County */}
          <div>
            <h2 className="text-3xl font-display font-bold text-slate-800 border-b-2 border-orange-500 pb-2 mb-6">
              Montgomery County
            </h2>
            <ul className="space-y-4">
              {montgomeryCountyAreas.map((area) => (
                <li key={area} className="flex items-center gap-3">
                  <Check className="h-6 w-6 text-green-600 flex-shrink-0" />
                  <span className="text-lg text-slate-700">{area}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-16 text-center bg-slate-100 p-8 rounded-lg border border-slate-200">
            <p className="text-lg text-slate-700">
                Don't see your town listed? We serve many surrounding areas as well.
                <br />
                Give us a call to see if we service your neighborhood!
            </p>
        </div>
      </section>
      {/* CTA Section */}
      <section className="bg-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
            Ready for Local, Reliable Pest Control?
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            Contact Maryland Guardian Pest Solutions today for your free, no-obligation inspection and quote.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="bg-orange-500 text-white hover:bg-orange-600 hover:scale-105 transition-all duration-200 ease-in-out shadow-sm hover:shadow-md px-8 py-3 text-lg">
              <Link to="/contact">Schedule My Inspection</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}