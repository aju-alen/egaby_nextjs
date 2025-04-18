import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold mb-6 bg-clip-text ">
            About Al Egaby
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Al Egaby Gen. Tr. LLC is your one stop solution towards all HVAC Spare Parts, Building Material and Hardware requirements. Customer satisfaction is our utmost priority and we assure you the best of product quality and prompt delivery services to cater to all your related needs.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
            <h2 className="text-2xl font-bold mb-4 ">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              To deliver exceptional HVAC Spare Parts, Building Material and Hardware solutions that exceed client
              expectations while maintaining the highest standards of quality, safety,
              and environmental responsibility.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
            <h2 className="text-2xl font-bold mb-4 ">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed">
              To be the industry leader in innovative HVAC Spare Parts, Building Material and Hardware solutions,
              recognized for our commitment to excellence, sustainability, and customer
              satisfaction.
            </p>
          </div>
        </div>

        {/* Team Section */}
        {/* <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Leadership Team</h2>
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
              <div key={member.name} className="text-center group">
                <div className="relative w-48 h-48 mx-auto mb-4 overflow-hidden rounded-full ring-4 ring-blue-100 group-hover:ring-blue-200 transition-all duration-300">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-blue-700 transition-colors duration-300">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div> */}

        {/* Values Section */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                title: "Quality",
                description: "We maintain the highest standards in all our work.",
                color: "from-blue-500 to-blue-600"
              },
              {
                title: "Innovation",
                description: "We embrace new technologies and methods to improve our services.",
                color: "from-green-500 to-green-600"
              },
              {
                title: "Integrity",
                description: "We conduct our business with honesty and transparency.",
                color: "from-purple-500 to-purple-600"
              },
              {
                title: "Safety",
                description: "We prioritize the safety of our team and clients.",
                color: "from-red-500 to-red-600"
              }
            ].map((value) => (
              <div 
                key={value.title} 
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
              >
                <div className={`h-1 w-12 mb-4 rounded-full bg-gradient-to-r ${value.color}`}></div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}