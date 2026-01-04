'use client';

import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AnimatedSection from './components/AnimatedSection';
import WhatsAppButton from './components/WhatsAppButton';
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/register"
                className="inline-block px-10 py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-xl hover:from-primary-700 hover:to-primary-600 transition-all duration-300 font-bold text-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 relative overflow-hidden group"
              >
                <span className="relative z-10">Enroll Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-700 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <Link
                href="/course"
                className="inline-block px-10 py-4 bg-white border-2 border-primary-600 text-primary-600 rounded-xl hover:bg-primary-50 transition-all duration-300 font-bold text-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105"
              >
                View Course
              </Link>
            </div>
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

      {/* Partner Companies Section */}
      <section id="partners" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection animationType="fade-in">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 gradient-text">
                Our Partner Companies
              </h2>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto font-medium">
                Trusted by leading IT companies worldwide
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              { name: 'TCS', logo: '🏢' },
              { name: 'Wipro', logo: '💼' },
              { name: 'HP', logo: '🖥️' },
              { name: 'Symantec', logo: '🔒' },
              { name: 'Crystal Solutions', logo: '💎' },
              { name: 'IT Partners', logo: '🤝' }
            ].map((partner, index) => (
              <AnimatedSection key={index} animationType="scale-in" delay={index * 100}>
                <div className="bg-gradient-to-br from-surface to-white rounded-xl p-6 shadow-medium border border-gray-100 hover-lift transition-all duration-300 text-center group">
                  <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">{partner.logo}</div>
                  <p className="text-lg font-bold text-text-primary group-hover:text-primary-600 transition-colors duration-300">{partner.name}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          
          <AnimatedSection animationType="fade-in" delay={600}>
            <div className="mt-12 text-center">
              <p className="text-text-secondary mb-6 font-medium">
                Crystal Solutions has a resourcing division which provides resources and executes projects for IT companies like TCS, Wipro, HP, Symantec...
              </p>
              <p className="text-lg text-text-primary font-semibold">
                We have placed <span className="text-primary-600 font-bold">500+ people</span> in companies across the Globe
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
