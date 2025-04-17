import Image from "next/image";

export default function About() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">About Al Egaby</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Al Egaby Gen. Tr. LLC is your one stop solution towards all HVAC Spare Parts, Building Material and Hardware requirements. Customer satisfaction is our utmost priority and we assure you the best of product quality and prompt delivery services to cater to all your related needs.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-600">
              To deliver exceptional HVAC Spare Parts, Building Material and Hardware solutions that exceed client
              expectations while maintaining the highest standards of quality, safety,
              and environmental responsibility.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-gray-600">
              To be the industry leader in innovative HVAC Spare Parts, Building Material and Hardware solutions,
              recognized for our commitment to excellence, sustainability, and customer
              satisfaction.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "John Smith",
                role: "CEO & Founder",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fit=crop&w=400&h=400"
              },
              {
                name: "Sarah Johnson",
                role: "Technical Director",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=400&h=400"
              },
              {
                name: "Michael Brown",
                role: "Operations Manager",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=400&h=400"
              }
            ].map((member) => (
              <div key={member.name} className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                title: "Quality",
                description: "We maintain the highest standards in all our work."
              },
              {
                title: "Innovation",
                description: "We embrace new technologies and methods to improve our services."
              },
              {
                title: "Integrity",
                description: "We conduct our business with honesty and transparency."
              },
              {
                title: "Safety",
                description: "We prioritize the safety of our team and clients."
              }
            ].map((value) => (
              <div key={value.title} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}