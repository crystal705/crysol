'use client';

import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AnimatedSection from './components/AnimatedSection';
import Link from 'next/link';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger fade-in animation on page load
    setIsLoaded(true);
  }, []);

  // SVG pattern URLs
  const whitePattern = "data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E";
  const bluePattern = "data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233B82F6' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E";

  return (
    <main className={`min-h-screen bg-background transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Navbar />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-50 via-white to-accent-50 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-accent-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10 w-full">
          <AnimatedSection animationType="fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 gradient-text leading-tight tracking-tight">
              Welcome to Crysol Academy
            </h1>
          </AnimatedSection>
          
          <AnimatedSection animationType="fade-in" delay={200}>
            <p className="text-lg sm:text-xl lg:text-2xl text-text-secondary mb-6 leading-relaxed max-w-3xl mx-auto font-medium">
              Crysol Academy is a training initiative from Crystal Solutions; this initiative was a result of a massive gap in the availability of skilled resources to cater to technology projects.
            </p>
          </AnimatedSection>
          
          <AnimatedSection animationType="fade-in" delay={400}>
            <p className="text-base sm:text-lg lg:text-xl text-text-tertiary mb-10 leading-relaxed max-w-3xl mx-auto">
              With more than 25 years in the IT Industry, we have more than 100 clients which require trained manpower. Crysol Academy and our client design training programs so that they can get jobs with the clients immediately after training. All our training programs are short and specific to the technical skills as per client requirement. Get trained from the Industry itself and not by a Training Institution.
            </p>
          </AnimatedSection>
          
          <AnimatedSection animationType="scale-in" delay={600}>
            <Link
              href="/register"
              className="inline-block px-10 py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-xl hover:from-primary-700 hover:to-primary-600 transition-all duration-300 font-bold text-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 relative overflow-hidden group"
            >
              <span className="relative z-10">Register Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-700 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Announcement Banner */}
      <AnimatedSection animationType="fade-in">
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary-600 via-primary-500 to-accent-500 relative overflow-hidden">
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url('${whitePattern}')` }}></div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          
          <div className="max-w-6xl mx-auto text-center relative z-10">
            <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 sm:p-12 shadow-2xl border-2 border-white/50 hover-lift transition-all duration-300">
              {/* Badge */}
              <div className="inline-flex items-center justify-center mb-6">
                <span className="bg-gradient-to-r from-primary-600 to-accent-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                  🎉 20 YEARS OF EXCELLENCE
                </span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-8 bg-gradient-to-r from-primary-700 via-primary-600 to-accent-600 bg-clip-text text-transparent leading-tight">
                Celebrating 20 Years Of Successful Recognition!!!
              </h2>
              
              {/* Job Openings Highlight */}
              <div className="bg-gradient-to-r from-primary-600 to-primary-500 rounded-2xl p-6 mb-6 shadow-xl border-2 border-primary-400">
                <p className="text-xl sm:text-2xl text-white mb-2 font-bold">
                  Currently we have
                </p>
                <p className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-2 drop-shadow-lg">
                  250
                </p>
                <p className="text-xl sm:text-2xl text-white font-bold mb-1">
                  IT Support Engineer Openings
                </p>
                <p className="text-lg sm:text-xl text-white/90 font-semibold">
                  Mumbai • New Mumbai • Thane
                </p>
              </div>
              
              {/* Call to Action */}
              <div className="bg-gradient-to-r from-accent-500 to-primary-500 rounded-xl p-5 mb-6 shadow-lg">
                <p className="text-2xl sm:text-3xl font-black text-white">
                  Get Trained and Get This Job
                </p>
              </div>
              
              {/* Eligibility */}
              <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl p-6 mb-6 border-2 border-primary-200">
                <p className="text-lg sm:text-xl text-text-primary mb-2 font-semibold">
                  <span className="text-primary-700">Freshers Welcome:</span> BSC, BSC-IT, BCom, BE
                </p>
                <p className="text-xl sm:text-2xl text-primary-700 font-bold">
                  Get trained and we will <span className="text-3xl text-accent-600">100%</span> give you the job with our clients
                </p>
              </div>
              
              {/* Career Progression */}
              <div className="bg-gradient-to-r from-accent-600 to-primary-600 rounded-xl p-6 shadow-xl border-2 border-accent-400">
                <p className="text-lg sm:text-xl text-white font-semibold mb-2">
                  Career Growth Path:
                </p>
                <p className="text-xl sm:text-2xl lg:text-3xl text-white font-black">
                  IT Support Engineer
                </p>
                <div className="flex items-center justify-center my-3">
                  <div className="w-12 h-0.5 bg-white/50"></div>
                  <span className="mx-4 text-white text-2xl">↓</span>
                  <div className="w-12 h-0.5 bg-white/50"></div>
                </div>
                <p className="text-xl sm:text-2xl lg:text-3xl text-white font-black">
                  IT Manager/Head
                </p>
                <p className="text-base sm:text-lg text-white/90 mt-3 font-semibold">
                  in just 6-7 Years
                </p>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Courses Section */}
      <section id="courses" className="py-24 px-4 sm:px-6 lg:px-8 bg-surface">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection animationType="fade-in">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 text-text-primary">
                Courses We Offer
              </h2>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto font-medium">
                Industry-focused training programs designed to make you job-ready
              </p>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animationType="scale-in" delay={200}>
            <div className="bg-white rounded-2xl p-10 shadow-large border border-gray-100 hover-lift transition-all duration-300">
              <div className="mb-8">
                <h3 className="text-3xl font-bold mb-3 bg-gradient-to-r from-primary-700 to-primary-500 bg-clip-text text-transparent">
                  IT Support Engineer
                </h3>
                <p className="text-xl text-text-secondary mb-2 font-medium">
                  Daily 3 hours - 45 days Training
                </p>
                <p className="text-2xl font-bold mb-6 text-text-primary">
                  Change your status from unemployed to employed in 60 days
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-10 mb-8">
                <AnimatedSection animationType="fade-in-left" delay={100}>
                  <div className="bg-gradient-to-br from-primary-50 to-white rounded-xl p-6 border-2 border-primary-200">
                    <h4 className="text-2xl font-bold mb-6 text-primary-700 flex items-center">
                      <span className="w-3 h-3 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mr-3 animate-pulse"></span>
                      Course Topics
                    </h4>
                    <div className="space-y-3">
                      {[
                        { topic: 'Basic Hardware', icon: '💻' },
                        { topic: 'Networking', icon: '🌐' },
                        { topic: 'Operating Systems', icon: '⚙️' },
                        { topic: 'e-Mail Solution, Configuration, Protocol', icon: '📧' },
                        { topic: 'Proxy', icon: '🔒' },
                        { topic: 'Anti-virus', icon: '🛡️' },
                        { topic: 'Firewall', icon: '🔥' },
                        { topic: 'On site experience', icon: '🏢' }
                      ].map((item, index) => (
                        <div key={index} className="flex items-center group bg-white rounded-lg p-3 hover-lift transition-all duration-300 border border-gray-100 hover:border-primary-300">
                          <span className="text-xl mr-3 group-hover:scale-125 transition-transform duration-200">{item.icon}</span>
                          <span className="text-text-secondary group-hover:text-primary-600 transition-colors duration-200 font-medium">{item.topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection animationType="fade-in-right" delay={200}>
                  <div>
                    <div className="bg-gradient-to-br from-accent-50 to-white rounded-xl p-6 border-2 border-accent-200 mb-6">
                      <h4 className="text-2xl font-bold mb-4 text-primary-700 flex items-center">
                        <span className="w-3 h-3 bg-gradient-to-r from-accent-500 to-primary-500 rounded-full mr-3 animate-pulse"></span>
                        Course Duration
                      </h4>
                      <div className="space-y-3">
                        <div className="flex items-center group bg-white rounded-lg p-3 hover-lift transition-all duration-300 border border-gray-100 hover:border-primary-300">
                          <span className="text-xl mr-3 group-hover:scale-125 transition-transform duration-200">⏱️</span>
                          <span className="text-text-secondary group-hover:text-primary-600 transition-colors duration-200 font-medium">45 days Course duration</span>
                        </div>
                        <div className="flex items-center group bg-white rounded-lg p-3 hover-lift transition-all duration-300 border border-gray-100 hover:border-primary-300">
                          <span className="text-xl mr-3 group-hover:scale-125 transition-transform duration-200">🕒</span>
                          <span className="text-text-secondary group-hover:text-primary-600 transition-colors duration-200 font-medium">3 hours Training</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl p-6 border-2 border-primary-200">
                      <h4 className="text-2xl font-bold mb-6 text-primary-700 flex items-center">
                        <span className="w-3 h-3 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mr-3 animate-pulse"></span>
                        Key Features
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {[
                          { feature: 'National Placement Network', icon: '🌐' },
                          { feature: 'Time tested course material', icon: '📚' },
                          { feature: 'Value added training with practical approach', icon: '💡' },
                          { feature: 'Practical Teaching Methodology', icon: '🎓' },
                          { feature: 'Individuals nurtured with utmost care and dedication', icon: '❤️' },
                          { feature: 'Workshops and seminars at regular intervals', icon: '🎤' },
                          { feature: 'Grooming sessions conducted by eminent professionals', icon: '✨' },
                          { feature: 'Complete Career Guidance which can boost up your Caliber in IT field', icon: '🚀' },
                          { feature: 'Training content is based on the experience collated by us over the years', icon: '📊' }
                        ].map((item, index) => (
                          <div key={index} className="flex items-start group bg-white rounded-lg p-4 hover-lift transition-all duration-300 border border-gray-100 hover:border-primary-300">
                            <span className="text-2xl mr-3 group-hover:scale-125 transition-transform duration-200">{item.icon}</span>
                            <span className="text-text-secondary group-hover:text-primary-600 transition-colors duration-200 font-medium text-sm flex-1">{item.feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
              
              <AnimatedSection animationType="scale-in" delay={300}>
                <Link
                  href="/register"
                  className="inline-block px-8 py-3 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-xl hover:from-primary-700 hover:to-primary-600 transition-all duration-300 font-bold shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 relative overflow-hidden group"
                >
                  <span className="relative z-10">Register Now</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-700 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              </AnimatedSection>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-primary-50/30 to-white">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection animationType="fade-in">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 gradient-text">
                About Us
              </h2>
              <p className="text-xl text-text-secondary max-w-2xl mx-auto font-semibold">
                Building careers through industry-focused training
              </p>
            </div>
          </AnimatedSection>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { number: "25+", label: "Years Experience", icon: "📈" },
              { number: "350+", label: "Customers Served", icon: "🏢" },
              { number: "500+", label: "People Placed", icon: "👥" },
              { number: "300+", label: "Active Projects", icon: "🚀" }
            ].map((stat, index) => (
              <AnimatedSection key={index} animationType="scale-in" delay={index * 100}>
                <div className="bg-white rounded-2xl p-6 shadow-large border border-primary-100 hover-lift transition-all duration-300 text-center group">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
                  <div className="text-3xl font-extrabold gradient-text mb-2">{stat.number}</div>
                  <div className="text-sm font-semibold text-text-secondary">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { 
                title: "Our Mission", 
                icon: "🎯",
                text: "Crysol Academy is a training initiative from Crystal Solutions Ltd; this initiative was a result of a massive gap in the availability of skilled resources to cater to technology projects.",
                gradient: "from-primary-500 to-primary-600"
              },
              { 
                title: "Why Choose Us", 
                icon: "⭐",
                text: "Most Institutes have a 6 to 12 months training programs (Classroom & LAB), yet at the end of it, most students find themselves jobless, as these courses do not make them Industry Acceptable. We train you for only 45 days with Industry relevant classroom training combined with live Industry training and make you Industry Acceptable. Get trained from the Industry itself and not by a Training Institution.",
                gradient: "from-accent-500 to-primary-500"
              },
              { 
                title: "Our Legacy", 
                icon: "🏆",
                text: "Crysol Academy is a part of Crystal Solutions Ltd. an established name in the Indian IT Industry, since 25 years.",
                gradient: "from-primary-600 to-accent-600"
              },
              { 
                title: "Our Expertise", 
                icon: "💼",
                text: "Crystal Solutions has a technology division which specializes in providing IT Infrastructure Solutions and Services to end customers. Crystal has serviced more than 350 customers. Crystal Solutions has a resourcing division which provides resources and executes projects for IT companies like TCS, Wipro, HP, Symantec..., Crystal has 300+ people working on technology projects and has placed more than 500 people in companies across the Globe.",
                gradient: "from-accent-600 to-primary-500"
              }
            ].map((item, index) => (
              <AnimatedSection key={index} animationType="fade-in" delay={index * 150}>
                <div className="bg-white rounded-2xl p-8 shadow-large border border-gray-100 hover-lift transition-all duration-300 hover:border-primary-300 relative overflow-hidden group">
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.gradient} opacity-5 rounded-full blur-3xl group-hover:opacity-10 transition-opacity duration-300`}></div>
                  <div className="relative z-10">
                    <div className="flex items-center mb-4">
                      <div className={`w-14 h-14 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center text-2xl mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {item.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-text-primary">{item.title}</h3>
                    </div>
                    <p className="text-text-secondary leading-relaxed text-base">{item.text}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-24 px-4 sm:px-6 lg:px-8 bg-surface">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection animationType="fade-in">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 text-text-primary">
                What Our Students Say
              </h2>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto font-medium">
                Real experiences from our graduates
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { text: "The training was practical and industry-focused. I got placed immediately after completing the course.", author: "IT Support Engineer Graduate" },
              { text: "45 days of intensive training prepared me well for the industry. The instructors have real-world experience.", author: "Recent Graduate" },
              { text: "Best decision I made. Got trained and placed with a leading IT company within 60 days.", author: "Successful Placement" }
            ].map((review, index) => (
              <AnimatedSection key={index} animationType="scale-in" delay={index * 150}>
                <div className="bg-white rounded-xl p-8 shadow-medium border border-gray-100 hover-lift transition-all duration-300 group">
                  <div className="mb-4">
                    <div className="flex text-primary-500 mb-2">
                      {Array(5).fill(0).map((_, i) => (
                        <span key={i} className="text-xl group-hover:scale-110 transition-transform duration-200" style={{ transitionDelay: `${i * 50}ms` }}>★</span>
                      ))}
                    </div>
                  </div>
                  <p className="text-text-secondary mb-6 italic leading-relaxed group-hover:text-text-primary transition-colors duration-300">
                    "{review.text}"
                  </p>
                  <p className="text-primary-600 font-bold group-hover:text-primary-700 transition-colors duration-300">— {review.author}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection animationType="fade-in">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 text-text-primary">
                Contact Us
              </h2>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto font-medium">
                Get in touch with us for more information
              </p>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animationType="scale-in" delay={200}>
            <div className="bg-gradient-to-br from-primary-50 via-accent-50 to-primary-50 rounded-2xl p-10 shadow-large border border-primary-100 relative overflow-hidden">
              <div className="absolute inset-0 opacity-50" style={{ backgroundImage: `url('${bluePattern}')` }}></div>
              
              <h3 className="text-2xl font-bold mb-8 text-primary-700 relative z-10">Crysol Academy</h3>
              <div className="space-y-6 text-text-secondary relative z-10">
                {[
                  { label: "Address", content: ["716/717, Reena Complex,", "Ramdev Nagar, Vidyavihar (W),", "Mumbai 400086. India."], type: "text" },
                  { label: "Mobile", content: ["9820158034"], type: "tel", link: "tel:+919820158034" },
                  { label: "E-mail", content: ["training@crysolacademy.com"], type: "email", link: "mailto:training@crysolacademy.com" },
                  { label: "Contact Person", content: ["Vasant", "+91 9820287251", "vasant@crystalonnet.com"], type: "mixed", links: ["tel:+919820287251", "mailto:vasant@crystalonnet.com"] }
                ].map((item, index) => (
                  <AnimatedSection key={index} animationType="fade-in-left" delay={index * 100}>
                    <div className="glass-effect rounded-xl p-6 hover-lift transition-all duration-300 hover:border-primary-200">
                      <p className="font-bold text-text-primary mb-2 text-lg">{item.label}:</p>
                      {item.content.map((line, lineIndex) => {
                        const linkIndex = item.label === "Contact Person" ? lineIndex - 1 : lineIndex;
                        const isLink = item.link || (item.links && item.links[linkIndex]);
                        const linkHref = item.link || (item.links && item.links[linkIndex] ? item.links[linkIndex] : undefined);
                        
                        return (
                          <p key={lineIndex} className="leading-relaxed">
                            {isLink && linkHref ? (
                              <a href={linkHref} className="text-primary-600 hover:text-primary-700 transition-colors font-semibold hover:underline">
                                {line}
                              </a>
                            ) : (
                              line
                            )}
                          </p>
                        );
                      })}
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </main>
  );
}
