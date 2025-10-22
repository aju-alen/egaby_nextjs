import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Building,
  Wrench,
  Shield,
  CheckCircle
} from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      icon: <Building className="h-8 w-8" />,
      title: "HVAC Solutions",
      description: "Premium air conditioning and refrigeration components for residential and commercial projects.",
      features: ["Energy Efficient Systems", "Expert Installation", "24/7 Support"]
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Building Materials",
      description: "High-quality construction materials and hardware from world-renowned manufacturers.",
      features: ["Premium Quality", "Bulk Supply", "Technical Consultation"]
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Quality Assurance",
      description: "All products come with manufacturer warranties and our quality guarantee.",
      features: ["Certified Products", "Quality Testing", "Warranty Support"]
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gray-100 text-gray-800">Our Services</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">Complete HVAC & Construction Solutions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From air conditioning systems to premium building materials, we provide everything 
            you need for successful projects across Dubai and UAE.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border border-gray-200 shadow-lg hover:scale-105">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-4 bg-gray-100 rounded-2xl text-gray-800 group-hover:bg-black group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <CardTitle className="text-2xl mb-2 text-black">{service.title}</CardTitle>
                <CardDescription className="text-lg text-gray-600">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-black mr-3 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
