import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function BuildingMaterials() {
  const materials = [
    {
      title: "Tools",
      description: "High-quality tools",
      image: "/building-materials/tools-building-materials-alegaby.jpg",
      points: [
        "Makita",
        "Uken",
        "Stanley",
        "Dewalt",
        "Bosch",
        "Rothenberger"
      ]
    },
    {
      title: "Construction Materials",
      description: "High-quality construction materials",
      image: "/building-materials/construction-building-materials-alegaby.webp",
      points: [
        "Cement",
        "White Cement",
        "Gypsum",
        "Gypsum Panel",
        "Gypsum Tile",
        "Tiles"
      ]
    },
    {
      title: "Painting Materials",
      description: "High-quality painting materials",
      image: "/building-materials/paint-building-materials-alegaby.webp",
      points: [
        "Jotun",
        "National Paints",
        "Berger Paints",
        "Paint Brush",
        "Roller",
        "Thinners"
      ]
    },
    {
      title: "Hardware & Fasteners",
      description: "High-quality hardware and fasteners",
      image: "/building-materials/fastners-building-materials-alegaby.webp",
      points: [
        "Nut",
        "Bolt",
        "Washer",
        "Anchor Bolt",
        "Threaded Rods",
        "Channels",
        "Clamps",
        "Shovel",
        "Plywood",
        "Insulation Tape",
        "Aluminum Tape",
        "Aluminum Glass Tape",
        "Foam Tape",
        "Sealants",
      ]
    },
    {
      title: "Electrical Plumbing & Sanitary",
      description: "High-quality electrical, plumbing and sanitary materials",
      image: "/building-materials/plumbing-sanitary-alegaby.webp",
      points: [
        "RAK Ceramics",
        "Grohe",
        "Cosmoplast",
        "Raktherm",
        "Pegler",
        "Milano",
        "Schnider",
        "MK",
        "Ducab",
      ]
    },
    {
      title: "Valves",
      description: "Professional-grade paints and coatings",
      image: "/hvac/valves-hvac-honeywell.jpg",
      points: [
        "Herz",
        "Pegler",
        "Crane",
      ]
    },
    {
      title: "Safety Products",
      description: "Complete plumbing solutions",
      image: "/building-materials/safety-products-building-materials-alegaby.jpg",
      points: [
        "Lock",
        "Safety Jacket",
        "Helmet",
        "Safety Shoes",
        "Mask",
        "Sanitizer",
      ]
    },
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[500px]">
        <Image
          src="/building-materials/building-materials.jpg"
          alt="Building Materials"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Quality Building Materials
            </h1>
            <p className="text-xl max-w-2xl">
              Premium construction materials for your projects, backed by our commitment
              to quality and reliability.
            </p>
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Our Product Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {materials.map((material) => (
              <div key={material.title} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                <div className="relative h-56 w-full">
                  <Image
                    src={material.image}
                    alt={material.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-semibold mb-3">{material.title}</h3>
                  <p className="text-gray-600 mb-4">{material.description}</p>
                  
                  <div className="space-y-2 mb-6 flex-grow">
                    {material.points.map((point, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                        <span className="text-gray-700">{point}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button asChild className="w-full mt-auto">
                    <Link href="/contact">Request Quote</Link>
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
              <h2 className="text-3xl font-bold mb-8">Why Choose Our Materials?</h2>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <span className="h-6 w-6 text-primary mr-3 flex-shrink-0">✓</span>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Quality Assured</h3>
                    <p className="text-gray-600">All materials meet or exceed industry standards for durability and performance.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 text-primary mr-3 flex-shrink-0">✓</span>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Competitive Pricing</h3>
                    <p className="text-gray-600">Best value for premium construction materials with transparent pricing.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 text-primary mr-3 flex-shrink-0">✓</span>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Expert Support</h3>
                    <p className="text-gray-600">Technical guidance and product recommendations from experienced professionals.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?fit=crop&w=800&h=800"
                alt="Building Materials"
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