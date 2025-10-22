import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function BrandsSection() {
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

  return (
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
  );
}
