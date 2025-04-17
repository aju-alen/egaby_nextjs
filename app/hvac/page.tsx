import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function HVAC() {
  const services = [
    {
      title: "Thermostats",
      description: "All kinds of Thermostats",
      image: "/hvac/honeywell-hvac.jpg",
      points: [
        "Honeywell",
        "Siemens",
        "White-Rodgers",
      ]
    },
    {
      title: "Compressors",
      description: "All kinds of Compressors",
      image: "/hvac/compressor-hvac-honeywell.jpg",
      points: [
        "Tecumseh",
        "Bristol",
        "Mitsubishi",
        "Copeland",
        "Bitzer",
        "Maneurop",
        
      ]
    },
    {
      title: "Valves",
      description: "All kinds of Valves",
      image: "/hvac/valves-hvac-honeywell.jpg",
      points: [
        "Honeywell",
        "Siemens",
        "Belimo",
        "Watts",
        
      ]
    },
    {
      title: "Refrigerants",
      description: "All kinds of Refrigerants",
      image: "/hvac/refrigerants-hvac-honewell.webp",
      points: [
        "Honeywell",
        "Refron",
        "Mafron",
        "Harp",
        "Floron",
        
      ]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px]">
        <Image
          src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1920&q=80"
          alt="HVAC Services"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              HVAC Solutions
            </h1>
            <p className="text-xl max-w-2xl">
              Comprehensive HVAC services for all your heating, ventilation, and air
              conditioning needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our HVAC Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {service.points.map((point, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                        <span className="text-gray-700">{point}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button asChild className="w-full">
                    <Link href="/contact">Request Service</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose Our HVAC Services?</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="h-6 w-6 text-primary mr-2">✓</span>
                  <div>
                    <h3 className="font-semibold">Expert Technicians</h3>
                    <p className="text-gray-600">Our team is certified and experienced in handling all types of HVAC systems.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 text-primary mr-2">✓</span>
                  <div>
                    <h3 className="font-semibold">24/7 Emergency Service</h3>
                    <p className="text-gray-600">We're available around the clock for emergency HVAC repairs.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 text-primary mr-2">✓</span>
                  <div>
                    <h3 className="font-semibold">Competitive Pricing</h3>
                    <p className="text-gray-600">We offer fair and transparent pricing for all our services.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1581094794329-c8112c4e5190?fit=crop&w=800&h=800"
                alt="HVAC Service"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}