import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Phone, Mail, MapPin } from "lucide-react";
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }).max(500),
});
export function ContactPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      if (result.success) {
        toast.success("Message Sent!", {
          description: "Thank you for contacting us. We'll be in touch shortly.",
        });
        form.reset();
      } else {
        throw new Error(result.error || 'An unknown error occurred');
      }
    } catch (error) {
      toast.error("Submission Failed", {
        description: "Something went wrong. Please try again or contact us directly.",
      });
    }
  }
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-800">Get in Touch</h1>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Ready to reclaim your home from pests? Contact us today for a free, no-obligation inspection and quote.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="bg-slate-50 p-8 rounded-lg border border-slate-200">
            <h2 className="text-2xl font-bold font-display text-slate-800 mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-orange-100 text-orange-600 p-3 rounded-full">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-700">Our Office</h3>
                  <p className="text-slate-600">1247 Monocacy Boulevard, Frederick, MD 21701</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-orange-100 text-orange-600 p-3 rounded-full">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-700">Phone</h3>
                  <a href="tel:301-555-7378" className="text-slate-600 hover:text-orange-500 transition-colors">(301) 555-PEST (7378)</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-orange-100 text-orange-600 p-3 rounded-full">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-700">Email</h3>
                  <a href="mailto:info@mdguardianpest.com" className="text-slate-600 hover:text-orange-500 transition-colors">info@mdguardianpest.com</a>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-slate-50 p-8 rounded-lg border border-slate-200">
            <h2 className="text-2xl font-bold font-display text-slate-800 mb-6">Send Us a Message</h2>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input placeholder="you@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input placeholder="(123) 456-7890" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>How can we help?</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us about your pest problem..."
                          className="resize-none"
                          rows={5}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full bg-orange-500 text-white hover:bg-orange-600 hover:scale-105 transition-all duration-200 ease-in-out shadow-sm hover:shadow-md" disabled={form.formState.isSubmitting}>
                  {form.formState.isSubmitting ? "Sending..." : "Get My Free Quote"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}