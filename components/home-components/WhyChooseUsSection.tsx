import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Award,
  Truck,
  Users,
  CheckCircle,
  Clock,
  Star
} from "lucide-react";

export function WhyChooseUsSection() {
  const whyChooseUs = [
    {
      icon: <Award className="h-6 w-6 text-gray-700" />,
      title: "Trusted Dubai Supplier",
      description: "Over 10 years serving government and private companies across UAE"
    },
    {
      icon: <Truck className="h-6 w-6 text-gray-700" />,
      title: "Fast & Reliable Delivery",
      description: "3 strategically located warehouses ensure quick delivery across UAE"
    },
    {
      icon: <Users className="h-6 w-6 text-gray-700" />,
      title: "Expert Technical Support",
      description: "Professional guidance and technical assistance for all projects"
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-gray-700" />,
      title: "Quality Guaranteed",
      description: "Premium products from world-renowned manufacturers only"
    },
    {
      icon: <Clock className="h-6 w-6 text-gray-700" />,
      title: "Competitive Pricing",
      description: "Best market rates with flexible payment terms"
    },
    {
      icon: <Star className="h-6 w-6 text-gray-700" />,
      title: "Wide Product Selection",
      description: "Comprehensive range covering all HVAC and construction needs"
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gray-200 text-gray-800">Why Choose Al Egaby</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">Trusted by Industry Leaders</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've built our reputation on quality, reliability, and exceptional service. 
            Here's why leading companies choose us for their projects.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseUs.map((item, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 bg-white border border-gray-200">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gray-100 rounded-xl shadow-md group-hover:bg-black group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-black">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
