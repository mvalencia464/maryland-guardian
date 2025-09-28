import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Star, ShieldCheck, Truck, Users, Wrench } from "lucide-react";
const services = [
    { title: "Ant Control Services", description: "Targeted treatments for carpenter ants, odorous house ants, and more." },
    { title: "Termite Inspection and Treatment", description: "Protect your biggest investment from destructive termites." },
    { title: "Rodent Control and Removal", description: "Safe and effective removal of mice, rats, and other rodents." },
    { title: "Bed Bug Extermination", description: "Discreet and thorough heat treatments to eliminate bed bugs." },
    { title: "Cockroach Control", description: "Comprehensive solutions for German and American cockroaches." },
    { title: "Wasp and Hornet Removal", description: "Safe removal of nests from your property to protect your family." },
    { title: "Spider Control", description: "Interior and exterior treatments to keep spiders out." },
    { title: "Flea and Tick Treatment", description: "Protect your family and pets from dangerous fleas and ticks." },
    { title: "Mosquito Control", description: "Enjoy your yard again with our effective mosquito reduction programs." },
    { title: "Wildlife Removal Services", description: "Humane removal of raccoons, squirrels, and other unwanted wildlife." },
];
const stats = [
    { icon: Users, value: "8,500+", label: "Satisfied Customers" },
    { icon: Wrench, value: "25,000+", label: "Completed Jobs" },
    { icon: Truck, value: "15+", label: "Years of Experience" },
    { icon: ShieldCheck, value: "A+", label: "BBB Rating" },
];
export function HomePage() {
    return (
        <div className="bg-slate-50 text-slate-800">
            {/* Hero Section */}
            <section className="relative bg-white overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200 opacity-50"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
                    <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-800 text-balance">
                        The Pest Control Frederick, MD Families Trust
                    </h1>
                    <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-3xl mx-auto text-balance">
                        Same-day service from a local, family-owned team that knows Maryland pests. Protecting homes in Frederick, Gaithersburg, and beyond since 2009.
                    </p>
                    <div className="mt-10 flex justify-center gap-4">
                        <Button asChild size="lg" className="bg-orange-500 text-white hover:bg-orange-600 hover:scale-105 transition-all duration-200 ease-in-out shadow-sm hover:shadow-md px-8 py-6 text-lg">
                            <Link to="/contact">Get a Free Inspection</Link>
                        </Button>
                        <Button asChild size="lg" variant="outline" className="px-8 py-6 text-lg border-2 border-slate-300 hover:bg-slate-100 hover:border-slate-400 transition-all duration-200">
                            <a href="tel:301-555-7378">Call (301) 555-PEST</a>
                        </Button>
                    </div>
                </div>
            </section>
            {/* Stats Section */}
            <section className="bg-slate-100 border-y border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {stats.map((stat) => (
                            <div key={stat.label} className="flex flex-col items-center">
                                <stat.icon className="h-10 w-10 text-orange-500 mb-2" />
                                <p className="text-3xl font-bold text-slate-800">{stat.value}</p>
                                <p className="text-sm text-slate-600">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-16 md:space-y-24">
                {/* Intro Content */}
                <section>
                    <div className="max-w-3xl mx-auto prose prose-lg prose-slate">
                        <p>Last spring, half of downtown Frederick called us when carpenter ants started swarming near the Carroll Creek Park area. It felt like the whole city was under attack overnight. That's the thing about pests in Maryland—they don't wait for a convenient time. We're Mike Chen and the team at Maryland Guardian Pest Solutions, and we've been solving problems like that for our neighbors in Frederick, Gaithersburg, Germantown, and Silver Spring for over 15 years. We started this company out of a garage on Elm Street because we saw our friends and neighbors struggling with pest control companies that didn't understand our local problems. We do.</p>
                    </div>
                </section>

                {/* Detailed Content Sections */}
                <div className="max-w-3xl mx-auto prose prose-lg prose-slate space-y-12">
                    <section>
                        <h2>Exterminator</h2>
                        <p>When you have a serious pest invasion, you don't just need a "pest guy"—you need an expert exterminator. Our licensed technicians use a systematic approach learned from years of experience, including Mike's background as an environmental specialist at Fort Detrick. We don't just spray and pray. We identify the source, create a targeted elimination plan, and implement preventative measures to keep them from coming back. We handle everything from fall rodent intrusion in Urbana to summer wasp nests in New Market.</p>
                    </section>
                    <section>
                        <h2>Ant Control Services</h2>
                        <p>Seeing a few ants is one thing, but finding a trail marching across your kitchen counter is another. We specialize in Ant Control Services for all the common Maryland culprits, from tiny sugar ants to the destructive carpenter ants we see every spring around the Historic Downtown Frederick area. We'll find the colony and stop them at the source.</p>
                    </section>
                    <section>
                        <h2>Termite Control Service</h2>
                        <p>Did you know termite swarms are a huge issue in Frederick County every spring? A small problem can become a catastrophe fast. Our Termite Inspection and Treatment services are designed to find termites before they cause thousands in damage. We use state-of-the-art thermal imaging and moisture meters to detect hidden colonies. If we find them, we provide effective treatment options, including eco-friendly solutions, to protect your home's structure and value.</p>
                    </section>
                    <section>
                        <h2>Rodent Control and Removal</h2>
                        <p>As soon as the weather gets cold, mice and rats start looking for a warm place to spend the winter. Often, that's your house. Our Rodent Control and Removal team is expert at finding entry points and sealing them up for good. We offer safe and effective removal for homes from Gaithersburg to Silver Spring.</p>
                    </section>
                    <section>
                        <h2>Bed Bug Extermination</h2>
                        <p>There's nothing worse than the thought of bed bugs. Our Bed Bug Extermination service is discreet and highly effective. We use advanced heat treatments that kill bed bugs and their eggs without damaging your belongings, so you can sleep soundly again.</p>
                    </section>
                    <section>
                        <h2>Cockroach Control</h2>
                        <p>Cockroaches are not just unsettling; they can carry diseases. Our Cockroach Control methods are designed for complete elimination, targeting the German and American cockroaches common in our area. We'll treat your home and show you how to prevent them from returning.</p>
                    </section>
                    <section>
                        <h2>Wasp and Hornet Removal</h2>
                        <p>A wasp or hornet nest near your home is a safety hazard. Don't risk getting stung. Our Wasp and Hornet Removal service safely and completely removes nests from eaves, decks, and trees so your family can enjoy your yard without fear.</p>
                    </section>
                    <section>
                        <h2>Spider Control</h2>
                        <p>From harmless house spiders to venomous species, we handle them all. Our Spider Control includes interior and exterior treatments to create a barrier that keeps spiders out of your living spaces.</p>
                    </section>
                    <section>
                        <h2>Flea and Tick Treatment</h2>
                        <p>With so many beautiful parks near Frederick, fleas and ticks are a constant concern for pet owners. Our Flea and Tick Treatment protects your family and pets by treating your home and yard, breaking the lifecycle of these dangerous pests.</p>
                    </section>
                    <section>
                        <h2>Mosquito Control</h2>
                        <p>Enjoy your summer evenings again. Our Mosquito Control programs significantly reduce the mosquito population in your yard, targeting breeding grounds and creating a more comfortable outdoor space for your family.</p>
                    </section>
                    <section>
                        <h2>Wildlife Control Service</h2>
                        <p>As communities expand along the I-270 corridor, encounters with wildlife are more common. If you're hearing noises in the attic or finding trash cans knocked over, you might have a visitor. Our Wildlife Removal Services humanely handle raccoons, squirrels, bats, and other animals that have made your home theirs. We safely remove the animals and seal up entry points to prevent future issues, especially during the fall and winter when they seek shelter.</p>
                    </section>
                    <section>
                        <h2>Commercial Pest Control Service</h2>
                        <p>A single pest can shut down a restaurant or damage a business's reputation. We provide discreet and effective Commercial Pest Control services for offices, retail spaces, and warehouses throughout Montgomery and Frederick Counties. We understand the health code requirements and create customized plans to keep your business compliant, safe, and pest-free.</p>
                    </section>
                    <section>
                        <h2>Residential Pest Control Service</h2>
                        <p>Your home should be your sanctuary. Our Residential Pest Control services are designed to protect it. We offer quarterly service plans that adapt to Maryland's unique four-season pest challenges. We tackle spring ant swarms, summer mosquitoes near Sugarloaf Mountain, fall stink bugs, and winter spiders. Our treatments are safe for kids and pets, so you can have peace of mind.</p>
                    </section>
                </div>
                {/* Why Choose Us Section */}
                <section>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-800">Why Maryland Homeowners Trust Us</h2>
                        <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                            We treat every home like it's our own family's home.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div className="space-y-2">
                            <CheckCircle className="h-10 w-10 text-orange-500 mx-auto" />
                            <h3 className="text-xl font-bold font-display">Local Expertise</h3>
                            <p className="text-slate-600">Born and raised here, we have intimate knowledge of Maryland pest patterns.</p>
                        </div>
                        <div className="space-y-2">
                            <CheckCircle className="h-10 w-10 text-orange-500 mx-auto" />
                            <h3 className="text-xl font-bold font-display">Fast Response</h3>
                            <p className="text-slate-600">Same-day emergency service is available 7 days a week.</p>
                        </div>
                        <div className="space-y-2">
                            <CheckCircle className="h-10 w-10 text-orange-500 mx-auto" />
                            <h3 className="text-xl font-bold font-display">Satisfaction Guaranteed</h3>
                            <p className="text-slate-600">We stand by our work with a 30-day guarantee on all treatments.</p>
                        </div>
                    </div>
                </section>
                {/* Testimonial Section */}
                <section className="bg-white p-8 md:p-12 rounded-lg shadow-lg border border-slate-200">
                    <div className="text-center max-w-3xl mx-auto">
                        <div className="flex justify-center mb-4">
                            {[...Array(5)].map((_, i) => <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />)}
                        </div>
                        <p className="text-xl md:text-2xl italic text-slate-700">
                            "Maryland Guardian is the only company I'll call. They solved a persistent ant problem in our Germantown home that two other companies couldn't fix. They were professional, on-time, and the price was fair. Highly recommend!"
                        </p>
                        <p className="mt-6 font-semibold text-slate-800">- Sarah L., Germantown, MD</p>
                    </div>
                </section>
                {/* Final CTA */}
                <section className="text-center">
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-800">Ready to Be Pest-Free?</h2>
                    <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                        Don't wait for a small pest problem to become a big one. Contact us now for your free, no-pressure inspection.
                    </p>
                    <div className="mt-8">
                        <Button asChild size="lg" className="bg-orange-500 text-white hover:bg-orange-600 hover:scale-105 transition-all duration-200 ease-in-out shadow-sm hover:shadow-md px-8 py-6 text-lg">
                            <Link to="/contact">Schedule My Free Inspection</Link>
                        </Button>
                    </div>
                </section>
            </main>
        </div>
    );
}