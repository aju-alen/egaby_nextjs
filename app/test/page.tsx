import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ContactForm } from "@/components/contact-form";
import Link from "next/link";
import { 
  Mail, 
  MapPin, 
  Phone, 
  ArrowRight, 
  CheckCircle, 
  Shield, 
  Truck, 
  Clock, 
  Award,
  Users,
  Building,
  Wrench,
  Star,
  Quote
} from "lucide-react";
import { WhatsAppIcon } from "@/components/whatsapp-icon";

export default function Home() {
  const hvacBrands = [
    { name: "HONEYWELL", logo: "/Honeywell-hvac-building-materials.png" },
    { name: "RESIDEO", logo: "/resideo-hvac-alegaby.png" },
    { name: "REFRON", logo: "/refron-hvac-building-materials.png" },
    { name: "EMERSON", logo: "/Emerson-hvac-building-materials.png" },
    { name: "COPELAND", logo: "/copeland-hvac-building-materials.png" },
    { name: "MUELLER", logo: "/mueller-hvac-building-materials.png" },
    { name: "JOHNSONCONTROLS", logo: "/johnson-controls-hvac-building-materials.svg" },
    { name: "DAIKIN", logo: "/DAIKIN-hvac-building-materials.png" },
    { name: "KIMMCOISOVER", logo: "/Kimmcoisover-hvac-building-materials.png" },
    { name: "MITSUBISHI", logo: "/Mitsubishi-hvac-building-materials.png" },
    { name: "UNIWELD", logo: "/Uniweld-hvac-building-materials.png" },
    { name: "DANFOSS", logo: "/Danfoss-hvac-building-materials.png" },
    { name: "ELCO", logo: "/elco-hvac-building-materials.png" },
    { name: "PARKER", logo: "/Parker-hvac-building-materials.png" },
    { name: "SIEMENS", logo: "/Siemens-hvac-building-materials.svg" },
    { name: "SUNISO", logo: "/suniso-hvac-building-materials.png" },
    { name: "YORK", logo: "/York-hvac-building-materials.png" },
    { name: "AEROFOAM", logo: "/aerofoam-hvac-building-materials.png" },
    { name: "BRISTOL", logo: "/bristol-hvac-building-materials.png" },
    { name: "CASTEL", logo: "/castel-hvac-building-materials.jpg" },
    { name: "KRANZLE", logo: "/kranzle-hvac-building-materials.jpg" },
  ];

  const buildingMaterialsBrands = [
    { name: "PEGLER", logo: "pegler-hvac-building-materials.png" },
    { name: "GROHE", logo: "Grohe-alegaby-building-materials.png" },
    { name: "UKEN", logo: "/uken-hvac-building-materials.png" },
    { name: "JOTUN", logo: "/jotun-hvac-building-materials.png" },
    { name: "MAKITA", logo: "/Makita-hvac-building-materials.png" },
    { name: "DEWALT", logo: "/dewalt-alegaby-building-materials.png" },
    { name: "STANLEY", logo: "/Stanley-alegaby-building-materials.png" },
    { name: "HERZ", logo: "/herz-alegaby-building-materials.png" },
    { name: "OSRAM", logo: "/Osram-alegaby-building-materials.png" },
    { name: "RAK Ceramics", logo: "/RAKCERAMICS-alegaby-building-materials.svg" },
    { name: "DECODUCT", logo: "/decoduct-hvac-building-materials.png" },
    { name: "ARISTON", logo: "Ariston-alegaby-building-materials.jpg" },
    { name: "SCHNEIDER", logo: "/Schneider-hvac-building-materials.jpg" },
    { name: "ABB", logo: "/ABB-hvac-building-materials.png" },
    { name: "NATIONAL PAINTS", logo: "/national-paints-alegaby.png" },
    { name: "PHILIPS", logo: "/philips-alegby.png" },
    { name: "OMAN CABLES", logo: "/Oman-Cables-alegaby.png" },
    { name: "DUCAB", logo: "/ducab-alegaby.jpg" },
    { name: "KRACHER", logo: "/karcher-alegby.png" },
    { name: "MK", logo: "/honeywell-mk-alegaby.webp" },
    { name: "COSMOPLAST", logo: "/cosmoplast-alegaby.png" },
  ];

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
    <div className="overflow-hidden">
          {/* Brands Section */}
          <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gray-100 text-gray-800">Premium Partners</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">World-Class Brands</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We partner with the most respected names in HVAC and construction, 
              ensuring you get only the finest quality products for your projects.
            </p>
          </div>
          
          {/* HVAC Brands */}
          <div className="mb-16">
            <div className="flex flex-col items-center mb-12">
              <h3 className="text-3xl font-bold mb-4 text-black">Air Conditioning & Refrigeration</h3>
              <div className="w-24 h-1 bg-black rounded-full"></div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
              {hvacBrands.map((brand, index) => (
                <Card key={`hvac-${index}`} className="group hover:shadow-xl transition-all duration-300 border border-gray-200 shadow-md hover:scale-105">
                  <CardContent className="p-6 aspect-square flex items-center justify-center">
                    <Image
                      src={brand.logo}
                      alt={brand.name}
                      width={120}
                      height={120}
                      className="object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300 filter group-hover:brightness-110 max-w-full max-h-full"
                    />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Building Materials Brands */}
          <div>
            <div className="flex flex-col items-center mb-12">
              <h3 className="text-3xl font-bold mb-4 text-black">Building Materials & Hardware</h3>
              <div className="w-24 h-1 bg-black rounded-full"></div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
              {buildingMaterialsBrands.map((brand, index) => (
                <Card key={`building-${index}`} className="group hover:shadow-xl transition-all duration-300 border border-gray-200 shadow-md hover:scale-105">
                  <CardContent className="p-6 aspect-square flex items-center justify-center">
                    <Image
                      src={brand.logo}
                      alt={brand.name}
                      width={120}
                      height={120}
                      className="object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300 filter group-hover:brightness-110 max-w-full max-h-full"
                    />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="max-w-4xl mx-auto text-center text-white">
              <Badge className="mb-6 bg-white/10 text-white border-white/20 hover:bg-white/20 backdrop-blur-sm">
                🏆 Dubai's Premier HVAC & Building Materials Supplier
              </Badge>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-white">
                Your Trusted Partner for
                <span className="block text-white">Premium HVAC Solutions</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Providing top-quality air conditioning, refrigeration components, and construction materials 
                with prompt, dependable service tailored to your project's needs across UAE.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button size="lg" className="bg-white hover:bg-gray-100 text-black px-8 py-6 text-lg rounded-xl font-semibold shadow-xl">
                  Get Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-6 text-lg rounded-xl font-semibold">
                  View Products
                </Button>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">10+</div>
                  <div className="text-gray-300">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">3</div>
                  <div className="text-gray-300">UAE Warehouses</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">500+</div>
                  <div className="text-gray-300">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">50+</div>
                  <div className="text-gray-300">Premium Brands</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
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

      {/* Why Choose Us Section */}
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

  

      {/* About Section */}
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

      {/* Contact Section */}
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

      <WhatsAppIcon />
    </div>
  );
}
























// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { ContactForm } from "@/components/contact-form";
// import Link from "next/link";
// import { 
//   Mail, 
//   MapPin, 
//   Phone, 
//   ArrowRight, 
//   CheckCircle, 
//   Shield, 
//   Truck, 
//   Clock, 
//   Award,
//   Users,
//   Building,
//   Wrench,
//   Star,
//   Quote
// } from "lucide-react";
// import { WhatsAppIcon } from "@/components/whatsapp-icon";

// export default function Home() {
//   const hvacBrands = [
//     { name: "HONEYWELL", logo: "/Honeywell-hvac-building-materials.png" },
//     { name: "RESIDEO", logo: "/resideo-hvac-alegaby.png" },
//     { name: "REFRON", logo: "/refron-hvac-building-materials.png" },
//     { name: "EMERSON", logo: "/Emerson-hvac-building-materials.png" },
//     { name: "COPELAND", logo: "/copeland-hvac-building-materials.png" },
//     { name: "MUELLER", logo: "/mueller-hvac-building-materials.png" },
//     { name: "JOHNSONCONTROLS", logo: "/johnson-controls-hvac-building-materials.svg" },
//     { name: "DAIKIN", logo: "/DAIKIN-hvac-building-materials.png" },
//     { name: "KIMMCOISOVER", logo: "/Kimmcoisover-hvac-building-materials.png" },
//     { name: "MITSUBISHI", logo: "/Mitsubishi-hvac-building-materials.png" },
//     { name: "UNIWELD", logo: "/Uniweld-hvac-building-materials.png" },
//     { name: "DANFOSS", logo: "/Danfoss-hvac-building-materials.png" },
//     { name: "ELCO", logo: "/elco-hvac-building-materials.png" },
//     { name: "PARKER", logo: "/Parker-hvac-building-materials.png" },
//     { name: "SIEMENS", logo: "/Siemens-hvac-building-materials.svg" },
//     { name: "SUNISO", logo: "/suniso-hvac-building-materials.png" },
//     { name: "YORK", logo: "/York-hvac-building-materials.png" },
//     { name: "AEROFOAM", logo: "/aerofoam-hvac-building-materials.png" },
//     { name: "BRISTOL", logo: "/bristol-hvac-building-materials.png" },
//     { name: "CASTEL", logo: "/castel-hvac-building-materials.jpg" },
//     { name: "KRANZLE", logo: "/kranzle-hvac-building-materials.jpg" },
//   ];

//   const buildingMaterialsBrands = [
//     { name: "PEGLER", logo: "pegler-hvac-building-materials.png" },
//     { name: "GROHE", logo: "Grohe-alegaby-building-materials.png" },
//     { name: "UKEN", logo: "/uken-hvac-building-materials.png" },
//     { name: "JOTUN", logo: "/jotun-hvac-building-materials.png" },
//     { name: "MAKITA", logo: "/Makita-hvac-building-materials.png" },
//     { name: "DEWALT", logo: "/dewalt-alegaby-building-materials.png" },
//     { name: "STANLEY", logo: "/Stanley-alegaby-building-materials.png" },
//     { name: "HERZ", logo: "/herz-alegaby-building-materials.png" },
//     { name: "OSRAM", logo: "/Osram-alegaby-building-materials.png" },
//     { name: "RAK Ceramics", logo: "/RAKCERAMICS-alegaby-building-materials.svg" },
//     { name: "DECODUCT", logo: "/decoduct-hvac-building-materials.png" },
//     { name: "ARISTON", logo: "Ariston-alegaby-building-materials.jpg" },
//     { name: "SCHNEIDER", logo: "/Schneider-hvac-building-materials.jpg" },
//     { name: "ABB", logo: "/ABB-hvac-building-materials.png" },
//     { name: "NATIONAL PAINTS", logo: "/national-paints-alegaby.png" },
//     { name: "PHILIPS", logo: "/philips-alegby.png" },
//     { name: "OMAN CABLES", logo: "/Oman-Cables-alegaby.png" },
//     { name: "DUCAB", logo: "/ducab-alegaby.jpg" },
//     { name: "KRACHER", logo: "/karcher-alegby.png" },
//     { name: "MK", logo: "/honeywell-mk-alegaby.webp" },
//     { name: "COSMOPLAST", logo: "/cosmoplast-alegaby.png" },
//   ];

//   const services = [
//     {
//       icon: <Building className="h-8 w-8" />,
//       title: "HVAC Solutions",
//       description: "Premium air conditioning and refrigeration components for residential and commercial projects.",
//       features: ["Energy Efficient Systems", "Expert Installation", "24/7 Support"]
//     },
//     {
//       icon: <Wrench className="h-8 w-8" />,
//       title: "Building Materials",
//       description: "High-quality construction materials and hardware from world-renowned manufacturers.",
//       features: ["Premium Quality", "Bulk Supply", "Technical Consultation"]
//     },
//     {
//       icon: <Shield className="h-8 w-8" />,
//       title: "Quality Assurance",
//       description: "All products come with manufacturer warranties and our quality guarantee.",
//       features: ["Certified Products", "Quality Testing", "Warranty Support"]
//     }
//   ];

//   const whyChooseUs = [
//     {
//       icon: <Award className="h-6 w-6 text-gray-700" />,
//       title: "Trusted Dubai Supplier",
//       description: "Over 10 years serving government and private companies across UAE"
//     },
//     {
//       icon: <Truck className="h-6 w-6 text-gray-700" />,
//       title: "Fast & Reliable Delivery",
//       description: "3 strategically located warehouses ensure quick delivery across UAE"
//     },
//     {
//       icon: <Users className="h-6 w-6 text-gray-700" />,
//       title: "Expert Technical Support",
//       description: "Professional guidance and technical assistance for all projects"
//     },
//     {
//       icon: <CheckCircle className="h-6 w-6 text-gray-700" />,
//       title: "Quality Guaranteed",
//       description: "Premium products from world-renowned manufacturers only"
//     },
//     {
//       icon: <Clock className="h-6 w-6 text-gray-700" />,
//       title: "Competitive Pricing",
//       description: "Best market rates with flexible payment terms"
//     },
//     {
//       icon: <Star className="h-6 w-6 text-gray-700" />,
//       title: "Wide Product Selection",
//       description: "Comprehensive range covering all HVAC and construction needs"
//     }
//   ];

//   const bulletPoints1 = [
//     "Premium HVAC Solutions",
//     "Expert Technical Support", 
//     "Fast & Reliable Delivery",
//     "Quality Guaranteed Products"
//   ];

//   const bulletPoints2 = [
//     "3 Strategic UAE Warehouses",
//     "Competitive Market Pricing",
//     "Government & Private Clients",
//     "24/7 Customer Support"
//   ];

//   return (
//     <div className="overflow-hidden">
//       {/* Company Name and Tagline Section */}
//       <section className="py-24 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center">
//             <h1 className="text-5xl md:text-7xl font-bold mb-6 text-black">
//               Al Egaby
//             </h1>
//             <p className="text-2xl md:text-3xl text-gray-600 max-w-4xl mx-auto">
//               Your One Stop Solution for HVAC & Building Materials
//             </p>
//             <div className="w-32 h-1 bg-black rounded-full mx-auto mt-8"></div>
//           </div>
//         </div>
//       </section>

//       {/* Three Column Section: Image, Email, Image */}
//       <section className="py-16 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
//             {/* Left Image */}
//             <div className="relative h-64 md:h-80">
//               <Image
//                 src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80"
//                 alt="HVAC Equipment"
//                 fill
//                 className="object-cover rounded-xl shadow-lg"
//               />
//             </div>
            
//             {/* Center Email Section */}
//             <div className="text-center">
//               <Card className="border border-gray-200 shadow-xl">
//                 <CardContent className="p-8">
//                   <div className="p-4 bg-gray-100 rounded-xl mb-6 mx-auto w-fit">
//                     <Mail className="h-8 w-8 text-black" />
//                   </div>
//                   <h3 className="text-2xl font-bold mb-4 text-black">Get In Touch</h3>
//                   <p className="text-gray-600 mb-6">
//                     Ready to start your project? Contact us for expert consultation and competitive quotes.
//                   </p>
//                   <a 
//                     href="mailto:sales.egaby@gmail.com" 
//                     className="inline-block bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-xl font-semibold transition-colors"
//                   >
//                     sales.egaby@gmail.com
//                   </a>
//                 </CardContent>
//               </Card>
//             </div>
            
//             {/* Right Image */}
//             <div className="relative h-64 md:h-80">
//               <Image
//                 src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
//                 alt="Building Materials"
//                 fill
//                 className="object-cover rounded-xl shadow-lg"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Navbar Section */}
//       <section className="py-8 ">
//         <div className=" bg-black max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <nav className="flex flex-wrap justify-center items-center gap-8">
//             <Link href="#services" className="text-white hover:text-gray-300 transition-colors font-medium">
//               Services
//             </Link>
//             <Link href="#about" className="text-white hover:text-gray-300 transition-colors font-medium">
//               About Us
//             </Link>
//             <Link href="#brands" className="text-white hover:text-gray-300 transition-colors font-medium">
//               Our Brands
//             </Link>
//             <Link href="#contact" className="text-white hover:text-gray-300 transition-colors font-medium">
//               Contact
//             </Link>
//             <Link href="#hvac" className="text-white hover:text-gray-300 transition-colors font-medium">
//               HVAC Solutions
//             </Link>
//             <Link href="#building-materials" className="text-white hover:text-gray-300 transition-colors font-medium">
//               Building Materials
//             </Link>
//           </nav>
//         </div>
//       </section>

//       {/* Three Column Section: Bullet Points, Brands, Bullet Points */}
//       <section className="py-24 bg-white">
//         <div className="w-full px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <Badge className="mb-4 bg-gray-100 text-gray-800">Why Choose Al Egaby</Badge>
//             <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">Our Excellence</h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Discover what makes us the preferred choice for HVAC and building materials across UAE
//             </p>
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16 items-start">
//             {/* Left Column: Bullet Points */}
//             <div className="space-y-6">
//               <div className="text-center mb-8">
//                 <h3 className="text-2xl font-bold mb-4 text-black">Our Strengths</h3>
//                 <div className="w-16 h-1 bg-black rounded-full mx-auto"></div>
//               </div>
//               <div className="space-y-4">
//                 {bulletPoints1.map((point, index) => (
//                   <Card key={index} className="border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
//                     <CardContent className="p-6">
//                       <div className="flex items-start space-x-4">
//                         <div className="p-2 bg-gray-100 rounded-lg flex-shrink-0">
//                           <CheckCircle className="h-5 w-5 text-black" />
//                         </div>
//                         <div>
//                           <h4 className="font-semibold text-lg text-black mb-1">{point}</h4>
//                           <p className="text-gray-600 text-sm">
//                             {index === 0 && "Complete air conditioning and refrigeration solutions"}
//                             {index === 1 && "Professional guidance for all your technical needs"}
//                             {index === 2 && "Quick and reliable delivery across all Emirates"}
//                             {index === 3 && "Only premium products from trusted manufacturers"}
//                           </p>
//                         </div>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 ))}
//               </div>
//             </div>

//             {/* Center Column: Brands */}
//             <div className="space-y-8" id="brands">
//               <div className="text-center">
//                 <Badge className="mb-4 bg-gray-100 text-gray-800">Premium Partners</Badge>
//                 <h3 className="text-2xl font-bold mb-4 text-black">World-Class Brands</h3>
//                 <div className="w-16 h-1 bg-black rounded-full mx-auto mb-6"></div>
//                 <p className="text-gray-600 text-sm">
//                   We partner with the most respected names in HVAC and construction
//                 </p>
//               </div>
              
//               {/* HVAC Brands */}
//               <div>
//                 <h4 className="text-lg font-semibold mb-4 text-black text-center">HVAC & Refrigeration</h4>
//                 <div className="grid grid-cols-2 gap-3">
//                   {hvacBrands.slice(0, 8).map((brand, index) => (
//                     <Card key={`hvac-${index}`} className="group hover:shadow-lg transition-all duration-300 border border-gray-200 hover:scale-105">
//                       <CardContent className="p-3 aspect-square flex items-center justify-center">
//                         <Image
//                           src={brand.logo}
//                           alt={brand.name}
//                           width={80}
//                           height={80}
//                           className="object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300 max-w-full max-h-full"
//                         />
//                       </CardContent>
//                     </Card>
//                   ))}
//                 </div>
//               </div>

//               {/* Building Materials Brands */}
//               <div>
//                 <h4 className="text-lg font-semibold mb-4 text-black text-center">Building Materials</h4>
//                 <div className="grid grid-cols-2 gap-3">
//                   {buildingMaterialsBrands.slice(0, 8).map((brand, index) => (
//                     <Card key={`building-${index}`} className="group hover:shadow-lg transition-all duration-300 border border-gray-200 hover:scale-105">
//                       <CardContent className="p-3 aspect-square flex items-center justify-center">
//                         <Image
//                           src={brand.logo}
//                           alt={brand.name}
//                           width={80}
//                           height={80}
//                           className="object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300 max-w-full max-h-full"
//                         />
//                       </CardContent>
//                     </Card>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* Right Column: Bullet Points */}
//             <div className="space-y-6">
//               <div className="text-center mb-8">
//                 <h3 className="text-2xl font-bold mb-4 text-black">Our Commitment</h3>
//                 <div className="w-16 h-1 bg-black rounded-full mx-auto"></div>
//               </div>
//               <div className="space-y-4">
//                 {bulletPoints2.map((point, index) => (
//                   <Card key={index} className="border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
//                     <CardContent className="p-6">
//                       <div className="flex items-start space-x-4">
//                         <div className="p-2 bg-gray-100 rounded-lg flex-shrink-0">
//                           <Star className="h-5 w-5 text-black" />
//                         </div>
//                         <div>
//                           <h4 className="font-semibold text-lg text-black mb-1">{point}</h4>
//                           <p className="text-gray-600 text-sm">
//                             {index === 0 && "Strategic locations ensuring rapid delivery across all Emirates"}
//                             {index === 1 && "Best market rates with flexible payment terms"}
//                             {index === 2 && "Serving both government and private sector clients"}
//                             {index === 3 && "Round-the-clock assistance for all your needs"}
//                           </p>
//                         </div>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section className="py-24 bg-gray-50" id="services">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <Badge className="mb-4 bg-gray-200 text-gray-800">Our Services</Badge>
//             <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">Complete HVAC & Construction Solutions</h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               From air conditioning systems to premium building materials, we provide everything 
//               you need for successful projects across Dubai and UAE.
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {services.map((service, index) => (
//               <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border border-gray-200 shadow-lg hover:scale-105">
//                 <CardHeader className="text-center pb-4">
//                   <div className="mx-auto mb-4 p-4 bg-gray-100 rounded-2xl text-gray-800 group-hover:bg-black group-hover:text-white transition-colors">
//                     {service.icon}
//                   </div>
//                   <CardTitle className="text-2xl mb-2 text-black">{service.title}</CardTitle>
//                   <CardDescription className="text-lg text-gray-600">{service.description}</CardDescription>
//                 </CardHeader>
//                 <CardContent>
//                   <ul className="space-y-3">
//                     {service.features.map((feature, idx) => (
//                       <li key={idx} className="flex items-center">
//                         <CheckCircle className="h-5 w-5 text-black mr-3 flex-shrink-0" />
//                         <span className="text-gray-600">{feature}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Us Section */}
//       <section className="py-24 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <Badge className="mb-4 bg-gray-100 text-gray-800">Why Choose Al Egaby</Badge>
//             <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">Trusted by Industry Leaders</h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               We've built our reputation on quality, reliability, and exceptional service. 
//               Here's why leading companies choose us for their projects.
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {whyChooseUs.map((item, index) => (
//               <Card key={index} className="group hover:shadow-xl transition-all duration-300 bg-white border border-gray-200">
//                 <CardContent className="p-8">
//                   <div className="flex items-start space-x-4">
//                     <div className="p-3 bg-gray-100 rounded-xl shadow-md group-hover:bg-black group-hover:text-white transition-colors">
//                       {item.icon}
//                     </div>
//                     <div>
//                       <h3 className="text-xl font-semibold mb-2 text-black">{item.title}</h3>
//                       <p className="text-gray-600">{item.description}</p>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* About Section */}
//       <section className="py-24 bg-gray-50" id="about">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//             <div className="space-y-8">
//               <Badge className="bg-gray-200 text-gray-800">About Al Egaby</Badge>
//               <h2 className="text-4xl md:text-5xl font-bold text-black">Building Dubai's Future</h2>
//               <p className="text-xl text-gray-600 leading-relaxed">
//                 Al Egaby Gen. Tr. LLC has over 10 years of experience supplying premium air conditioning, 
//                 refrigeration spare parts, building materials, and hardware. We proudly serve government 
//                 and leading private companies with trusted brands from around the world.
//               </p>
              
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                 <Card className="bg-white border border-gray-200 shadow-lg">
//                   <CardContent className="p-6">
//                     <div className="flex items-center mb-3">
//                       <Building className="h-6 w-6 text-black mr-3" />
//                       <h3 className="font-bold text-lg text-black">3 UAE Warehouses</h3>
//                     </div>
//                     <p className="text-gray-600">Strategic locations ensuring rapid delivery across all Emirates</p>
//                   </CardContent>
//                 </Card>
//                 <Card className="bg-white border border-gray-200 shadow-lg">
//                   <CardContent className="p-6">
//                     <div className="flex items-center mb-3">
//                       <Clock className="h-6 w-6 text-black mr-3" />
//                       <h3 className="font-bold text-lg text-black">On-Time Delivery</h3>
//                     </div>
//                     <p className="text-gray-600">Reliable logistics and technical support for all projects</p>
//                   </CardContent>
//                 </Card>
//               </div>
              
//               <Button size="lg" className="bg-black hover:bg-gray-800 text-white px-8 py-6 text-lg rounded-xl shadow-xl">
//                 Learn More About Us
//                 <ArrowRight className="ml-2 h-5 w-5" />
//               </Button>
//             </div>
            
//             <div className="relative">
//               <Card className="overflow-hidden border border-gray-200 shadow-2xl">
//                 <div className="relative h-[600px]">
//                   <Image
//                     src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
//                     alt="Al Egaby operations"
//                     fill
//                     className="object-cover"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
//                   <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
//                     <Card className="bg-white/10 backdrop-blur-md border-white/20">
//                       <CardContent className="p-6">
//                         <div className="flex items-center space-x-4">
//                           <div className="p-3 bg-white rounded-xl">
//                             <MapPin className="h-6 w-6 text-black" />
//                           </div>
//                           <div>
//                             <h4 className="font-semibold text-lg mb-1">Our Dubai Location</h4>
//                             <p className="text-white/80">Office No. 201 Orange Building, Al Qulayaa, Sharjah</p>
//                           </div>
//                         </div>
//                       </CardContent>
//                     </Card>
//                   </div>
//                 </div>
//               </Card>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section className="py-24 bg-white" id="contact">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
//             {/* Contact Form */}
//             <div>
//               <div className="space-y-6 mb-12">
//                 <Badge className="bg-gray-100 text-gray-800">Get In Touch</Badge>
//                 <h2 className="text-4xl md:text-5xl font-bold text-black">Start Your Project Today</h2>
//                 <p className="text-xl text-gray-600">
//                   Ready to begin your project? Contact our expert team for personalized 
//                   consultation and competitive quotes tailored to your specific needs.
//                 </p>
//               </div>
//               <Card className="border border-gray-200 shadow-2xl">
//                 <CardContent className="p-8">
//                   <ContactForm />
//                 </CardContent>
//               </Card>
//             </div>

//             {/* Contact Details */}
//             <div className="space-y-8">
//               <div>
//                 <h3 className="text-3xl font-bold mb-8 text-black">Contact Information</h3>
//                 <div className="space-y-6">
//                   <Card className="border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
//                     <CardContent className="p-6">
//                       <div className="flex items-start space-x-4">
//                         <div className="p-4 bg-gray-100 rounded-xl">
//                           <MapPin className="h-6 w-6 text-black" />
//                         </div>
//                         <div>
//                           <h4 className="font-semibold text-lg mb-2 text-black">Visit Our Office</h4>
//                           <p className="text-gray-600">
//                             Office No. 201 Orange Building<br />
//                             Al Qulayaa, Sharjah, UAE
//                           </p>
//                         </div>
//                       </div>
//                     </CardContent>
//                   </Card>

//                   <Card className="border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
//                     <CardContent className="p-6">
//                       <div className="flex items-start space-x-4">
//                         <div className="p-4 bg-gray-100 rounded-xl">
//                           <Phone className="h-6 w-6 text-black" />
//                         </div>
//                         <div>
//                           <h4 className="font-semibold text-lg mb-2 text-black">Call Us</h4>
//                           <div className="space-y-1">
//                             <a href="tel:+97165220089" className="block text-gray-600 hover:text-black transition-colors">
//                               +971 6 5220089
//                             </a>
//                             <a href="tel:+971568880263" className="block text-gray-600 hover:text-black transition-colors">
//                               +971 56 8880263
//                             </a>
//                           </div>
//                         </div>
//                       </div>
//                     </CardContent>
//                   </Card>

//                   <Card className="border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
//                     <CardContent className="p-6">
//                       <div className="flex items-start space-x-4">
//                         <div className="p-4 bg-gray-100 rounded-xl">
//                           <Mail className="h-6 w-6 text-black" />
//                         </div>
//                         <div>
//                           <h4 className="font-semibold text-lg mb-2 text-black">Email Us</h4>
//                           <a href="mailto:sales.egaby@gmail.com" className="text-gray-600 hover:text-black transition-colors">
//                             sales.egaby@gmail.com
//                           </a>
//                         </div>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 </div>
//               </div>

//               <Card className="bg-gray-50 border border-gray-200 shadow-lg">
//                 <CardContent className="p-8">
//                   <h4 className="font-semibold text-xl mb-4 text-black">Business Hours</h4>
//                   <div className="space-y-3">
//                     <div className="flex justify-between">
//                       <span className="font-medium text-black">Monday - Friday</span>
//                       <span className="text-gray-600">8:00 AM - 6:00 PM</span>
//                     </div>
//                     <div className="flex justify-between">
//                       <span className="font-medium text-black">Saturday</span>
//                       <span className="text-gray-600">8:00 AM - 2:00 PM</span>
//                     </div>
//                     <div className="flex justify-between">
//                       <span className="font-medium text-black">Sunday</span>
//                       <span className="text-gray-600">Closed</span>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             </div>
//           </div>
//         </div>
//       </section>

//       <WhatsAppIcon />
//     </div>
//   );
// }