import { ShieldCheck, Award, Users, UserCircle, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
const credentials = [
  { icon: ShieldCheck, text: "Maryland Dept. of Agriculture License #MD-2847" },
  { icon: ShieldCheck, text: "EPA Certified Pesticide Applicator" },
  { icon: ShieldCheck, text: "National Pest Management Association Member" },
];
const awards = [
  { icon: Award, text: "Better Business Bureau A+ Rating" },
  { icon: Award, text: "Angie's List Super Service Award (2019, 2021, 2023)" },
  { icon: Award, text: "Home Advisor Screened & Approved" },
  { icon: Award, text: "Frederick Chamber of Commerce Small Business of the Year (2022)" },
  { icon: Award, text: "NextDoor Neighborhood Favorite (4 years running)" },
];
export function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-800">
            Your Local Maryland Pest Experts
          </h1>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            Learn about our story, our commitment to the community, and why we're the most trusted pest control service in the Frederick area.
          </p>
        </div>
      </section>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-16 md:space-y-24">
        {/* Our Story Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="prose prose-lg prose-slate max-w-none">
            <h2 className="font-display">Our Story: From a Neighbor's Problem to a Community's Trust</h2>
            <p>
              Maryland Guardian Pest Solutions wasn't born in a boardroom. It started in a garage in 2009, right here in Frederick. Our founder, Mike Chen, was working as an environmental specialist at Fort Detrick at the time. One weekend, his neighbor on Elm Street discovered a serious termite problem that had already spread to two other houses.
            </p>
            <p>
              Mike used his expertise to help his neighbors develop a plan and eradicate the termites. Word spread quickly through the community. What began as weekend help for friends and neighbors soon grew into a full-time mission. Today, we are proud to be Maryland's most trusted local pest control service, but we've never forgotten our roots: we're just neighbors helping neighbors.
            </p>
          </div>
          <div className="bg-slate-100 p-8 rounded-lg border border-slate-200">
            <div className="flex flex-col items-center text-center">
              <UserCircle className="h-24 w-24 text-orange-500 mb-4" />
              <h3 className="text-2xl font-bold font-display text-slate-800">Meet Our Founder</h3>
              <p className="font-semibold text-orange-600">Mike Chen</p>
              <p className="mt-2 text-slate-600">
                With over 18 years of experience and a background as a Fort Detrick environmental specialist, Mike brings military precision and a deep understanding of local pest ecology to every job.
              </p>
            </div>
          </div>
        </section>
        {/* Mission and Values Section */}
        <section className="text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-800">Our Mission & Values</h2>
            <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
                "We treat every home like it's our own family's home. That means honest assessments, fair pricing, and solutions that actually work long-term."
            </p>
        </section>
        {/* Credentials & Awards Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-800">Fully Licensed, Certified, and Recognized</h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              We hold ourselves to the highest standards of professionalism and excellence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="shadow-sm hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl font-display">
                  <ShieldCheck className="h-8 w-8 text-orange-500" />
                  <span>Our Credentials</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {credentials.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-slate-700">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="shadow-sm hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl font-display">
                  <Award className="h-8 w-8 text-orange-500" />
                  <span>Awards & Recognition</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {awards.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-slate-700">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
        {/* Community Involvement Section */}
        <section className="bg-slate-50 p-8 md:p-12 rounded-lg border border-slate-200">
          <div className="text-center">
            <Users className="h-12 w-12 text-orange-500 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-800">Community Focused</h2>
            <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
              Being a local business means more than just serving customers; it means being part of the community. We're proud to give back to the neighborhoods we call home.
            </p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
                <div className="bg-white p-6 rounded-md shadow-sm">
                    <h3 className="font-semibold text-slate-800">Frederick Keys Youth Baseball</h3>
                    <p className="text-sm text-slate-600">Proud sponsors, helping kids stay active.</p>
                </div>
                <div className="bg-white p-6 rounded-md shadow-sm">
                    <h3 className="font-semibold text-slate-800">Carroll Creek Cleanup Events</h3>
                    <p className="text-sm text-slate-600">Volunteering to keep our city beautiful.</p>
                </div>
                <div className="bg-white p-6 rounded-md shadow-sm">
                    <h3 className="font-semibold text-slate-800">Habitat for Humanity</h3>
                    <p className="text-sm text-slate-600">Providing free termite inspections for new builds.</p>
                </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}