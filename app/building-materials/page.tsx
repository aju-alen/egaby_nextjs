import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function BuildingMaterials() {
  const materials = [
    {
      category: "Concrete & Cement",
      items: ["Portland Cement", "Ready-Mix Concrete", "Concrete Blocks"],
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?fit=crop&w=800&h=400"
    },
    {
      category: "Steel & Metals",
      items: ["Structural Steel", "Reinforcement Bars", "Metal Sheets"],
      image: "https://images.unsplash.com/photo-1530469525856-cf37954301f7?fit=crop&w=800&h=400"
    },
    {
      category: "Wood & Lumber",
      items: ["Plywood", "Timber", "Wooden Beams"],
      image: "https://images.unsplash.com/photo-1520627977056-c307aeb9a625?fit=crop&w=800&h=400"
    },
    {
      category: "Insulation",
      items: ["Fiberglass", "Foam Boards", "Mineral Wool"],
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?fit=crop&w=800&h=400"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px]">
        <Image
          src="https://images.unsplash.com/photo-1581094794329-c8112c4e5190?auto=format&fit=crop&w=1920&q=80"
          alt="Building Materials"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
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
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Product Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {materials.map((material) => (
              <div key={material.category} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={material.image}
                    alt={material.category}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{material.category}</h3>
                  <ul className="space-y-2 mb-4">
                    {material.items.map((item) => (
                      <li key={item} className="text-gray-600">• {item}</li>
                    ))}
                  </ul>
                  <Button asChild>
                    <Link href="/contact">Request Quote</Link>
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
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Our Materials?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We source only the highest quality materials from trusted manufacturers,
              ensuring durability and reliability for your construction projects.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Quality Assured",
                description: "All materials meet or exceed industry standards"
              },
              {
                title: "Competitive Pricing",
                description: "Best value for premium construction materials"
              },
              {
                title: "Expert Support",
                description: "Technical guidance and product recommendations"
              }
            ].map((feature) => (
              <div key={feature.title} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary text-primary-foreground rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Need Materials for Your Project?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Contact us for competitive quotes and expert advice on selecting the
              right materials for your construction needs.
            </p>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}