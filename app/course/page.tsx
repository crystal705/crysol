'use client';

import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimatedSection from '../components/AnimatedSection';
import WhatsAppButton from '../components/WhatsAppButton';
import Link from 'next/link';

export default function CoursePage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <main className={`min-h-screen bg-background transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-50 via-white to-accent-50 relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <AnimatedSection animationType="fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 gradient-text leading-tight">
              IT Networking Cloud & Security Course
            </h1>
            <p className="text-lg sm:text-xl text-text-secondary max-w-3xl mx-auto font-medium">
              Launch your career as an IT Security professional in this exponentially growing field
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Course Introduction */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection animationType="fade-in">
            <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
              <p>
                With internet and cloud becoming an integral part of our lives, we are increasingly dependent on online shopping, banking, education, Social and many other areas. We store photos and personal information on our computers and in the cloud. As more and more aspects of our lives move online, so does the risk of cybercrime. Individuals, businesses, and governments all are interacting through the online medium.
              </p>
              <p>
                Hence IT Security in this progressively internet-centered world is thus becoming critically important. Corporates, SMEs and Government are all investing in IT security to protect their data and assets from falling into wrong hands.
              </p>
              <p className="text-xl font-bold text-primary-700">
                The need for IT Security professionals is growing exponentially, across the globe. This is the right time to launch your career as a IT Security professional by taking up a course which will enable you to get you the entry in the IT Security Industry.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Course Details - Two Columns */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column - What You Will Learn */}
            <AnimatedSection animationType="fade-in-left" delay={200}>
              <div className="bg-white rounded-2xl p-8 shadow-large border border-gray-100 hover-lift transition-all duration-300 h-full">
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary-700 to-primary-500 bg-clip-text text-transparent">
                  What You Will Learn
                </h2>
                <div className="space-y-3">
                  {[
                    { topic: 'System Basics', icon: '💻' },
                    { topic: 'Operating Systems', icon: '🖥️' },
                    { topic: 'Server Basics', icon: '🖥️' },
                    { topic: 'Networking Basics', icon: '🌐' },
                    { topic: 'Cloud Basics', icon: '☁️' },
                    { topic: 'Threats', icon: '⚠️' },
                    { topic: 'Security Basics', icon: '🔒' },
                    { topic: 'Endpoint Protection', icon: '🛡️' },
                    { topic: 'Firewalls', icon: '🔥' },
                    { topic: 'Data Protection (Data Leakage Prevention, Encryption)', icon: '🔐' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center group">
                      <span className="text-xl mr-3 group-hover:scale-110 transition-transform duration-200">{item.icon}</span>
                      <span className="text-text-secondary group-hover:text-primary-600 transition-colors duration-200 font-medium text-base">{item.topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Right Column - Why Choose This Course */}
            <AnimatedSection animationType="fade-in-right" delay={300}>
              <div className="bg-white rounded-2xl p-8 shadow-large border border-gray-100 hover-lift transition-all duration-300 h-full">
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-accent-700 to-accent-500 bg-clip-text text-transparent">
                  Why Choose This Course?
                </h2>
                <div className="space-y-4">
                  {[
                    { 
                      title: 'Industry Demand', 
                      description: 'IT Security professionals are in high demand globally as cyber threats continue to grow',
                      icon: '📈'
                    },
                    { 
                      title: 'Career Growth', 
                      description: 'Launch your career in a field with exponential growth opportunities',
                      icon: '🚀'
                    },
                    { 
                      title: 'Comprehensive Curriculum', 
                      description: 'Learn everything from system basics to advanced security and data protection',
                      icon: '📚'
                    },
                    { 
                      title: 'Industry Relevant', 
                      description: 'Course content designed based on real-world industry requirements',
                      icon: '💼'
                    }
                  ].map((item, index) => (
                    <div key={index} className="bg-gradient-to-br from-accent-50 to-white rounded-xl p-5 border-2 border-accent-200 hover-lift transition-all duration-300">
                      <div className="flex items-start">
                        <span className="text-3xl mr-4 flex-shrink-0">{item.icon}</span>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold mb-2 text-primary-700">{item.title}</h3>
                          <p className="text-text-secondary text-sm leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <AnimatedSection animationType="scale-in" delay={400}>
              <Link
                href="/register"
                className="inline-block px-8 py-3 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-xl hover:from-primary-700 hover:to-primary-600 transition-all duration-300 font-bold shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 relative overflow-hidden group"
              >
                <span className="relative z-10">Enroll Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-700 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </AnimatedSection>
            <AnimatedSection animationType="scale-in" delay={500}>
              <Link
                href="/contact"
                className="inline-block px-8 py-3 bg-white border-2 border-primary-600 text-primary-600 rounded-xl hover:bg-primary-50 transition-all duration-300 font-bold shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105"
              >
                Enquire Now
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
