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

        {/* Video Hero Section */}
        <section className="relative min-h-screen flex items-center bg-black overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/video/ad.mp4"  type="video/mp4" />
            {/* Fallback image if video doesn't load */}
            <Image
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80"
              alt="Industrial logistics background"
              fill
              className="object-cover"
            />
          </video>
          {/* Video overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Hero Content Overlay */}
        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="max-w-4xl">
              {/* Red accent bars */}
              <div className="flex items-center space-x-2 mb-8">
                <div className="w-8 h-1 bg-red-500"></div>
                <div className="w-6 h-1 bg-red-500"></div>
                <div className="w-4 h-1 bg-red-500"></div>
              </div>
              
              <div className="space-y-8">
                <div>
                  <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-white">
                    EXPLORING THE
                    <span className="block text-white">HVAC INDUSTRY</span>
                  </h1>
                  
                  <p className="text-xl text-gray-200 leading-relaxed mb-8 max-w-3xl">
                    An impactful video representing global connectivity and trade, with diverse cultures, 
                    currencies, and products coming together through premium HVAC and building materials.
                  </p>
                </div>

                {/* CTA Button */}
                <div>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg font-semibold">
                    View Products
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-white">
        <div className="w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              
              {/* Left Content */}
              <div className="space-y-8">
                {/* Red accent bars */}
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-1 bg-red-500"></div>
                  <div className="w-6 h-1 bg-red-500"></div>
                  <div className="w-4 h-1 bg-red-500"></div>
                </div>
                
                <div>
                  <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-black">
                    EXPLORING THE
                    <span className="block text-black">HVAC INDUSTRY</span>
                  </h1>
                  
                  <p className="text-lg text-gray-600 leading-relaxed mb-8 w-4/5">
                    An impactful image representing global connectivity and trade, with diverse cultures, 
                    currencies, and products coming together through premium HVAC and building materials.
                  </p>
                </div>

                {/* CTA Button */}
                <div>
                  <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg font-semibold">
                    View Products
                  </Button>
                </div>
              </div>

              {/* Right Content - Visual Elements */}
              <div className="relative mt-16">
                {/* Main port/industrial image */}
                <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
                    alt="Industrial port and logistics"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4">
                      <h3 className="font-bold text-lg text-black mb-2">Global HVAC Solutions</h3>
                      <p className="text-sm text-gray-600">Premium equipment for international markets</p>
                    </div>
                  </div>
                </div>

                {/* Shipping containers representation */}
             

                {/* Decorative orange dots */}
                <div className="absolute top-20 -left-8 w-3 h-3 bg-orange-500 rounded-full"></div>
                <div className="absolute top-40 right-4 w-2 h-2 bg-orange-500 rounded-full"></div>
                <div className="absolute bottom-32 left-8 w-2 h-2 bg-orange-500 rounded-full"></div>
                <div className="absolute bottom-20 right-12 w-3 h-3 bg-orange-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

    

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