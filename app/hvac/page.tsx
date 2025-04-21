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
      image: "/hvac/refrigerants-hvac-alegaby.jpeg",
      points: [
        "Honeywell",
        "Refron",
        "Mafron",
        "Harp",
        "Floron",
        
      ]
    },
    {
      title: "Accessories",
      description: "All kinds of Accessories",
      image: "/hvac/hvac-accesories-egaby.jpg",
      points: [
        "Contactors",
        "Relay",
        "Thermometers",
        "MapGas",
        "Suniso",
        "Capacitors",
        "Solenoid",
        "Valve",
        
      ]
    },
    {
      title: "Copper and Copper Fittings",
      description: "All kinds of Copper and Copper Fittings",
      image: "/hvac/copper-fittings-hvac-alegby.webp",
      points: [
        "Mueller",
        "Maksal",
        "Halcor",
        "Harris",
        
      ]
    },
    {
      title: "Split AC",
      description: "All kinds of Split AC",
      image: "/hvac/split-ac-hvac-alegay.jpeg",
      points: [
        "O General",
        "Daikin",
        "Aux",
        "Carrier",
        "Sapphire",  
      ]
    },
    {
      title: "Motors",
      description: "All kinds of Motors",
      image: "/hvac/motor-hvac-alegaby.webp",
      points: [
        "GE",
        "Pioneer",
        "Elco",
      ]
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[500px]">
        <Image
          src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1920&q=80"
          alt="HVAC Services"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-60" />
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
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Our HVAC Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div key={service.title} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                <div className="relative h-56 w-full">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="space-y-2 mb-6 flex-grow">
                    {service.points.map((point, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                        <span className="text-gray-700">{point}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button asChild className="w-full mt-auto">
                    <Link href="/contact">Request Service</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-8">Why Choose Our HVAC Services?</h2>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <span className="h-6 w-6 text-primary mr-3 flex-shrink-0">✓</span>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Expert Technicians</h3>
                    <p className="text-gray-600">Our team is certified and experienced in handling all types of HVAC systems.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 text-primary mr-3 flex-shrink-0">✓</span>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">24/7 Emergency Service</h3>
                    <p className="text-gray-600">We're available around the clock for emergency HVAC repairs.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 text-primary mr-3 flex-shrink-0">✓</span>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Competitive Pricing</h3>
                    <p className="text-gray-600">We offer fair and transparent pricing for all our services.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/hvac/hvac-alegaby.jpg"
                alt="HVAC Service"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}