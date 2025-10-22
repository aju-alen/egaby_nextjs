import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight,
  Building,
  Clock,
  MapPin
} from "lucide-react";

export function AboutSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <Badge className="bg-gray-200 text-gray-800">About Al Egaby</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-black">Building Dubai's Future</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Al Egaby Gen. Tr. LLC has over 10 years of experience supplying premium air conditioning, 
              refrigeration spare parts, building materials, and hardware. We proudly serve government 
              and leading private companies with trusted brands from around the world.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card className="bg-white border border-gray-200 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <Building className="h-6 w-6 text-black mr-3" />
                    <h3 className="font-bold text-lg text-black">3 UAE Warehouses</h3>
                  </div>
                  <p className="text-gray-600">Strategic locations ensuring rapid delivery across all Emirates</p>
                </CardContent>
              </Card>
              <Card className="bg-white border border-gray-200 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <Clock className="h-6 w-6 text-black mr-3" />
                    <h3 className="font-bold text-lg text-black">On-Time Delivery</h3>
                  </div>
                  <p className="text-gray-600">Reliable logistics and technical support for all projects</p>
                </CardContent>
              </Card>
            </div>
            
            <Button size="lg" className="bg-black hover:bg-gray-800 text-white px-8 py-6 text-lg rounded-xl shadow-xl">
              Learn More About Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          <div className="relative">
            <Card className="overflow-hidden border border-gray-200 shadow-2xl">
              <div className="relative h-[600px]">
                <Image
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
                  alt="Al Egaby operations"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <Card className="bg-white/10 backdrop-blur-md border-white/20">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 bg-white rounded-xl">
                          <MapPin className="h-6 w-6 text-black" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg mb-1">Our Dubai Location</h4>
                          <p className="text-white/80">Office No. 201 Orange Building, Al Qulayaa, Sharjah</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
