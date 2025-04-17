import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/contact-form";
import Link from "next/link";
import { Mail, MapPin, Phone, ArrowRight, CheckCircle } from "lucide-react";

export default function Home() {
  const brands = [
    { name: "UNIWELD", logo: "/Uniweld-hvac-building-materials.png" },
    { name: "ELCO", logo: "/elco-hvac-building-materials.png" },
    { name: "KIMMCOISOVER", logo: "/Kimmcoisover-hvac-building-materials.png" },
    { name: "COPELAND", logo: "/copeland-hvac-building-materials.png" },
    { name: "HONEYWELL", logo: "/Honeywell-hvac-building-materials.png" },
    { name: "PARKER", logo: "/Parker-hvac-building-materials.png" },
    { name: "SIEMENS", logo: "/Siemens-hvac-building-materials.svg" },
    { name: "SUNISO", logo: "/suniso-hvac-building-materials.png" },
    { name: "YORK", logo: "/York-hvac-building-materials.png" },
    { name: "AEROFOAM", logo: "/aerofoam-hvac-building-materials.png" },
    { name: "SCHNEIDER", logo: "/Schneider-hvac-building-materials.jpg" },
    { name: "DANFOSS", logo: "/Danfoss-hvac-building-materials.png" },
    { name: "MAKITA", logo: "/Makita-hvac-building-materials.png" },
    { name: "REFRON", logo: "/refron-hvac-building-materials.png" },
    { name: "BRISTOL", logo: "/bristol-hvac-building-materials.png" },
    { name: "UKEN", logo: "/uken-hvac-building-materials.png" },
    { name: "JOTUN", logo: "/jotun-hvac-building-materials.png" },
    { name: "EMERSON", logo: "/Emerson-hvac-building-materials.png" },
    { name: "MUELLER", logo: "/mueller-hvac-building-materials.png" },
    { name: "CASTEL", logo: "/castel-hvac-building-materials.jpg" },
    { name: "JOHNSONCONTROLS", logo: "/johnson-controls-hvac-building-materials.svg" },
    { name: "DECODUCT", logo: "/decoduct-hvac-building-materials.png" },
    { name: "ABB", logo: "/ABB-hvac-building-materials.png" },
    { name: "DAIKIN", logo: "/DAIKIN-hvac-building-materials.png" },
    { name: "KRANZLE", logo: "/kranzle-hvac-building-materials.jpg" },
    { name: "MITSUBISHI", logo: "/Mitsubishi-hvac-building-materials.png" },
    { name: "PEGLER", logo: "pegler-hvac-building-materials.png" },
    { name: "WHITE RODGERS", logo: "whitRoders-hvac-building-materials.png" }
  ];

  const features = [
    "Premium HVAC Components",
    "Expert Technical Support",
    "Fast & Reliable Delivery",
    "Competitive Pricing",
    "Wide Product Selection",
    "Quality Guaranteed"
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1920&q=80"
            alt="Construction site"
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
                  <span>Your HVAC & Building Materials Partner</span>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Your Trusted Partner for HVAC, Building Materials & Hardware Solutions
                </h1>
                
                <p className="text-xl text-gray-200">
                  From HVAC components to construction essentials, we've got you covered. Experience fast, dependable service and premium materials tailored to your needs.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm p-3 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-gray-200">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-lg flex items-center group">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-lg">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Industry Leaders</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We've partnered with the most respected names in HVAC and construction,
              delivering excellence across hundreds of projects nationwide.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-50 via-transparent to-gray-50 z-10 pointer-events-none" />
            <div className="overflow-hidden">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 py-8">
                {brands.map((brand, index) => (
                  <div
                    key={`${brand.name}-${index}`}
                    className="group"
                  >
                    <div className="bg-white p-6 rounded-xl shadow-sm w-full aspect-[3/2] relative flex items-center justify-center hover:shadow-lg transition-all duration-300 border border-gray-100 group-hover:border-primary/20">
                      <Image
                        src={brand.logo}
                        alt={brand.name}
                        width={150}
                        height={75}
                        className="object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300 filter group-hover:brightness-110"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-primary/5 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl">
                        {/* <span className="text-sm font-medium text-primary">
                          {brand.name}
                        </span> */}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                About Us
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">About Al Egaby</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Al Egaby Gen. Tr. LLC is your one stop solution towards all HVAC Spare Parts, Building Material and Hardware requirements. Customer satisfaction is our utmost priority and we assure you the best of product quality and prompt delivery services to cater to all your related needs.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="font-bold text-xl mb-2">Quality Products</h3>
                  <p className="text-gray-600">Premium materials from trusted manufacturers worldwide</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="font-bold text-xl mb-2">Expert Support</h3>
                  <p className="text-gray-600">Technical assistance and guidance for all your projects</p>
                </div>
              </div>
              
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-lg flex items-center group">
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
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

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <div className="space-y-6 mb-12">
                <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                  Contact Us
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">Get in Touch</h2>
                <p className="text-gray-600 text-lg">
                  Have a project in mind? We'd love to hear from you. Send us a message
                  and we'll respond as soon as possible.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <ContactForm />
              </div>
            </div>

            {/* Contact Details */}
            <div className="lg:pl-12">
              <div className="bg-white p-8 rounded-2xl shadow-lg h-full">
                <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-4 rounded-xl">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Our Location</h4>
                      <p className="text-gray-600">
                        Office No. 201 Orange building <br /> Al Qulayaa, Sharjah
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-4 rounded-xl">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Phone Number</h4>
                      <p className="text-gray-600">+97165220089</p>
                      <p className="text-gray-600">+971568880263</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-4 rounded-xl">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Email Address</h4>
                      <p className="text-gray-600">sales.egaby@gmail.com</p>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h4 className="font-semibold text-lg mb-4">Business Hours</h4>
                    <table className="w-full">
                      <tbody>
                        <tr className="border-b border-gray-200">
                          <td className="py-3">Monday - Friday</td>
                          <td className="text-gray-600">8:00 AM - 6:00 PM</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <td className="py-3">Saturday</td>
                          <td className="text-gray-600">8:00 AM - 2:00 PM</td>
                        </tr>
                        <tr>
                          <td className="py-3">Sunday</td>
                          <td className="text-gray-600">Closed</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}