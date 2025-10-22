import Image from "next/image";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
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
          <source src="/video/ad.mp4" type="video/mp4" />
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
  );
}
