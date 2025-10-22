import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ContactForm } from "@/components/contact-form";
import { 
  MapPin,
  Phone,
  Mail
} from "lucide-react";

export function ContactSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <div className="space-y-6 mb-12">
              <Badge className="bg-gray-100 text-gray-800">Get In Touch</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-black">Start Your Project Today</h2>
              <p className="text-xl text-gray-600">
                Ready to begin your project? Contact our expert team for personalized 
                consultation and competitive quotes tailored to your specific needs.
              </p>
            </div>
            <Card className="border border-gray-200 shadow-2xl">
              <CardContent className="p-8">
                <ContactForm />
              </CardContent>
            </Card>
          </div>

          {/* Contact Details */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-8 text-black">Contact Information</h3>
              <div className="space-y-6">
                <Card className="border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-4 bg-gray-100 rounded-xl">
                        <MapPin className="h-6 w-6 text-black" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-2 text-black">Visit Our Office</h4>
                        <p className="text-gray-600">
                          Office No. 201 Orange Building<br />
                          Al Qulayaa, Sharjah, UAE
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-4 bg-gray-100 rounded-xl">
                        <Phone className="h-6 w-6 text-black" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-2 text-black">Call Us</h4>
                        <div className="space-y-1">
                          <a href="tel:+97165220089" className="block text-gray-600 hover:text-black transition-colors">
                            +971 6 5220089
                          </a>
                          <a href="tel:+971568880263" className="block text-gray-600 hover:text-black transition-colors">
                            +971 56 8880263
                          </a>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-4 bg-gray-100 rounded-xl">
                        <Mail className="h-6 w-6 text-black" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-2 text-black">Email Us</h4>
                        <a href="mailto:sales.egaby@gmail.com" className="text-gray-600 hover:text-black transition-colors">
                          sales.egaby@gmail.com
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <Card className="bg-gray-50 border border-gray-200 shadow-lg">
              <CardContent className="p-8">
                <h4 className="font-semibold text-xl mb-4 text-black">Business Hours</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-medium text-black">Monday - Friday</span>
                    <span className="text-gray-600">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-black">Saturday</span>
                    <span className="text-gray-600">8:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-black">Sunday</span>
                    <span className="text-gray-600">Closed</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
