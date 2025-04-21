import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, MapPin, Phone, Mail } from "lucide-react";

export default function About() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section with Background */}
      <section className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1920&q=80"
            alt="About Al Egaby"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />
        </div>
        
        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="max-w-2xl">
              <div className="text-white space-y-6">
                <div className="inline-flex items-center space-x-2 bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium">
                  <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                  <span>About Our Company</span>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  About Al Egaby
                </h1>
                
                <p className="text-xl text-gray-200">
                  Your trusted partner in HVAC Spare Parts, Building Materials, and Hardware solutions. We deliver excellence through quality products and exceptional service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                Our Story
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">Who We Are</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Al Egaby Gen. Tr. LLC is your one stop solution towards all HVAC Spare Parts, Building Material and Hardware requirements. Customer satisfaction is our utmost priority and we assure you the best of product quality and prompt delivery services to cater to all your related needs.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-all duration-300">
                  <h3 className="font-bold text-xl mb-2">Quality Products</h3>
                  <p className="text-gray-600">Premium materials from trusted manufacturers worldwide</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-all duration-300">
                  <h3 className="font-bold text-xl mb-2">Expert Support</h3>
                  <p className="text-gray-600">Technical assistance and guidance for all your projects</p>
                </div>
              </div>
            </div>
            
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
                alt="About us"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-primary/20 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Our Location</h4>
                    <p>Office No. 201 Orange building, Al Qulayaa, Sharjah</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              Our Purpose
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Mission & Vision</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Our commitment to excellence drives everything we do, from product selection to customer service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
              <div className="bg-primary/10 p-4 rounded-xl w-16 h-16 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                To deliver exceptional HVAC Spare Parts, Building Material and Hardware solutions that exceed client
                expectations while maintaining the highest standards of quality, safety,
                and environmental responsibility.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
              <div className="bg-primary/10 p-4 rounded-xl w-16 h-16 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                To be the industry leader in innovative HVAC Spare Parts, Building Material and Hardware solutions,
                recognized for our commitment to excellence, sustainability, and customer
                satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              Our Principles
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              These principles guide our decisions and actions every day.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                title: "Quality",
                description: "We maintain the highest standards in all our work.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                ),
                color: "from-blue-500 to-blue-600"
              },
              {
                title: "Innovation",
                description: "We embrace new technologies and methods to improve our services.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                ),
                color: "from-green-500 to-green-600"
              },
              {
                title: "Integrity",
                description: "We conduct our business with honesty and transparency.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                color: "from-purple-500 to-purple-600"
              },
              {
                title: "Safety",
                description: "We prioritize the safety of our team and clients.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                ),
                color: "from-red-500 to-red-600"
              }
            ].map((value) => (
              <div 
                key={value.title} 
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
              >
                <div className={`h-12 w-12 mb-4 rounded-xl bg-gradient-to-r ${value.color} flex items-center justify-center text-white`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12">
                <div className="space-y-6">
                  <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                    Get in Touch
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold">Ready to Work Together?</h2>
                  <p className="text-gray-600 text-lg">
                    Have a project in mind? We'd love to hear from you. Contact us today to discuss your needs.
                  </p>
                  
                  <div className="space-y-4 pt-4">
                    <div className="flex items-center space-x-3">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <span className="text-gray-700">+97165220089</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <span className="text-gray-700">sales.egaby@gmail.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <span className="text-gray-700">Office No. 201 Orange building, Al Qulayaa, Sharjah</span>
                    </div>
                  </div>
                  
                  <div className="pt-6">
                    <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary hover:bg-primary/90 transition-colors duration-300">
                      Contact Us
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="relative h-full min-h-[300px] md:min-h-0">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
                  alt="Contact us"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}