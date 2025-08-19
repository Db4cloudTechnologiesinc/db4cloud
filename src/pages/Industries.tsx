import React from 'react';
import { Building2, ShoppingCart, Heart, Banknote, GraduationCap, Factory, Truck, Shield, ArrowRight, CheckCircle } from 'lucide-react';

const Industries = () => {
  const industries = [
    {
      icon: ShoppingCart,
      title: "E-commerce & Retail",
      description: "Scale your online business with high-performance databases that handle millions of transactions seamlessly.",
      challenges: [
        "Peak traffic handling during sales",
        "Real-time inventory management",
        "Customer data analytics",
        "Payment processing security"
      ],
      solutions: [
        "Auto-scaling database clusters",
        "Real-time data synchronization",
        "Advanced analytics dashboards",
        "PCI DSS compliant infrastructure"
      ],
      caseStudy: "MegaShop increased conversion rates by 35% with our optimized database solutions",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
      color: "blue"
    },
    {
      icon: Banknote,
      title: "Financial Services",
      description: "Secure, compliant, and high-performance database solutions for banking, fintech, and insurance companies.",
      challenges: [
        "Regulatory compliance requirements",
        "Real-time fraud detection",
        "High-frequency trading data",
        "Customer data protection"
      ],
      solutions: [
        "SOX & PCI compliant infrastructure",
        "Real-time anomaly detection",
        "Low-latency data processing",
        "End-to-end encryption"
      ],
      caseStudy: "PayFast reduced transaction processing time by 60% while maintaining 100% compliance",
      image: "https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=600",
      color: "green"
    },
    {
      icon: Heart,
      title: "Healthcare & Life Sciences",
      description: "HIPAA-compliant database solutions for hospitals, clinics, and pharmaceutical companies.",
      challenges: [
        "HIPAA compliance requirements",
        "Patient data security",
        "Research data management",
        "Interoperability standards"
      ],
      solutions: [
        "HIPAA-compliant infrastructure",
        "Advanced encryption protocols",
        "Secure data sharing platforms",
        "HL7 FHIR integration"
      ],
      caseStudy: "MediCare Connect improved patient care coordination by 45% with our secure platform",
      image: "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=600",
      color: "red"
    },
    {
      icon: GraduationCap,
      title: "Education & EdTech",
      description: "Scalable database solutions for educational institutions and online learning platforms.",
      challenges: [
        "Student data management",
        "Learning analytics",
        "Content delivery optimization",
        "Multi-tenant architecture"
      ],
      solutions: [
        "Student information systems",
        "Real-time learning analytics",
        "Global content distribution",
        "Secure multi-tenancy"
      ],
      caseStudy: "EduTech Pro scaled to 1M+ students with 99.9% uptime using our platform",
      image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=600",
      color: "purple"
    },
    {
      icon: Factory,
      title: "Manufacturing & IoT",
      description: "Industrial-grade database solutions for manufacturing, supply chain, and IoT applications.",
      challenges: [
        "IoT data ingestion at scale",
        "Predictive maintenance",
        "Supply chain visibility",
        "Quality control analytics"
      ],
      solutions: [
        "Time-series data optimization",
        "Machine learning integration",
        "Real-time monitoring dashboards",
        "Automated quality reporting"
      ],
      caseStudy: "AutoManu reduced downtime by 40% with predictive analytics on our platform",
      image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=600",
      color: "orange"
    },
    {
      icon: Truck,
      title: "Logistics & Transportation",
      description: "Real-time tracking and optimization solutions for logistics and transportation companies.",
      challenges: [
        "Real-time fleet tracking",
        "Route optimization",
        "Delivery analytics",
        "Customer communication"
      ],
      solutions: [
        "GPS data processing",
        "AI-powered route planning",
        "Delivery performance metrics",
        "Automated notifications"
      ],
      caseStudy: "LogiFlow improved delivery efficiency by 30% with our real-time tracking system",
      image: "https://images.pexels.com/photos/1427541/pexels-photo-1427541.jpeg?auto=compress&cs=tinysrgb&w=600",
      color: "indigo"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "bg-blue-50 border-blue-200 text-blue-600",
      green: "bg-green-50 border-green-200 text-green-600",
      red: "bg-red-50 border-red-200 text-red-600",
      purple: "bg-purple-50 border-purple-200 text-purple-600",
      orange: "bg-orange-50 border-orange-200 text-orange-600",
      indigo: "bg-indigo-50 border-indigo-200 text-indigo-600"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Industry-Specific <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Database Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Tailored cloud database solutions designed to meet the unique challenges and requirements 
              of your industry. From healthcare compliance to financial security, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className={`absolute top-4 left-4 w-12 h-12 rounded-lg flex items-center justify-center ${getColorClasses(industry.color)}`}>
                    <industry.icon className="h-6 w-6" />
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{industry.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{industry.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Key Challenges</h4>
                      <ul className="space-y-2">
                        {industry.challenges.map((challenge, challengeIndex) => (
                          <li key={challengeIndex} className="text-sm text-gray-600 flex items-start">
                            <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                            {challenge}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Our Solutions</h4>
                      <ul className="space-y-2">
                        {industry.solutions.map((solution, solutionIndex) => (
                          <li key={solutionIndex} className="text-sm text-gray-600 flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            {solution}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Success Story</h4>
                    <p className="text-sm text-gray-700 italic">"{industry.caseStudy}"</p>
                  </div>
                  
                  <button className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center">
                    Learn More About Solutions
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us for Your Industry */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Industry Leaders Choose DB4Cloud
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deep industry expertise combined with cutting-edge technology to deliver solutions that work.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Compliance First</h3>
              <p className="text-gray-600 leading-relaxed">
                Built-in compliance for HIPAA, SOX, PCI DSS, GDPR, and other industry regulations. 
                We understand your compliance requirements and build them into our solutions.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building2 className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Industry Expertise</h3>
              <p className="text-gray-600 leading-relaxed">
                Our team includes industry specialists who understand your unique challenges and 
                can design solutions that address your specific business requirements.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Proven Results</h3>
              <p className="text-gray-600 leading-relaxed">
                Track record of successful implementations across industries, with measurable 
                improvements in performance, security, and operational efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Industry Operations?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let's discuss how our industry-specific database solutions can help your business 
            achieve its goals. Get a free consultation with our industry experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
              Schedule Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              View Case Studies
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;