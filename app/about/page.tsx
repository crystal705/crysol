'use client';

import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimatedSection from '../components/AnimatedSection';
import WhatsAppButton from '../components/WhatsAppButton';
import Link from 'next/link';

export default function AboutPage() {
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
              About Us
            </h1>
            <p className="text-lg sm:text-xl text-text-secondary max-w-3xl mx-auto font-medium">
              A fresh change to the IT Training domain
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Introduction */}
          <AnimatedSection animationType="fade-in">
            <div className="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-8 shadow-large border border-primary-100">
              <p className="text-lg text-text-secondary leading-relaxed">
                Crysol Academy is an institute which has introduced a fresh change to the IT Training domain. It has introduced training programs which are tailor made to produce skilled resources to suit the industry requirements. Crysol Academy has introduced concise courses, which teach only those necessary technical skills which the industry seeks, Industry relevant classroom knowledge combined with extensive practical sessions to make the student Industry Acceptable.
              </p>
            </div>
          </AnimatedSection>

          {/* Crystal Solutions Background */}
          <AnimatedSection animationType="fade-in" delay={100}>
            <div className="bg-gradient-to-br from-accent-50 to-white rounded-2xl p-8 shadow-large border border-accent-100">
              <h2 className="text-3xl font-bold mb-6 text-primary-700">About Crystal Solutions Ltd.</h2>
              <div className="space-y-4">
                <p className="text-lg text-text-secondary leading-relaxed">
                  Crysol Academy is a training initiative from <a href="https://www.crystalonnet.com" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 font-semibold underline">Crystal Solutions Ltd.</a>, a technology solutions and services organization. Crystal has been providing technology solutions and services to corporate, IT & ITES organization since last <span className="font-bold text-primary-600">28 years</span>. This vast experience in the industry has been the catalyst for designing this unique course which has got great acceptance from the industry.
                </p>
                <p className="text-lg text-text-secondary leading-relaxed">
                  Crystal Solutions Ltd. has been providing IT Solutions and services to organisations in India as well as abroad, especially Middle East since last <span className="font-bold text-primary-600">28 years</span>. Crystal has been providing services to <span className="font-semibold">TCS, Wipro, HP, IBM, Dimension Data</span> both in India and Globally.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Course Content */}
          <AnimatedSection animationType="fade-in" delay={200}>
            <div className="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-8 shadow-large border border-primary-100">
              <h2 className="text-3xl font-bold mb-6 text-primary-700">Our Course Content</h2>
              <div className="space-y-4">
                <p className="text-lg text-text-secondary leading-relaxed">
                  Over the years, we have been modifying our course content, to accommodate the developments in the Industry. Our Course covers the exact content that is currently required by the industry. We take regular inputs from the industry and modify our training content based on them.
                </p>
                <p className="text-lg text-text-secondary leading-relaxed">
                  Our training content includes the basics and special topics like <span className="font-semibold">Security, Mailing, Cloud</span>. We provide <span className="font-bold text-primary-600">Guaranteed Placement</span>.
                </p>
                <p className="text-lg text-text-secondary leading-relaxed">
                  Our training is conducted by professionals from the industry, who themselves provide these services to customers and are experienced with the situation existing on the field at customer sites. The special topics are covered by professionals certified in those domains.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Training History & Achievements */}
          <AnimatedSection animationType="fade-in" delay={300}>
            <div className="bg-gradient-to-br from-accent-50 to-white rounded-2xl p-8 shadow-large border border-accent-100">
              <h2 className="text-3xl font-bold mb-6 text-primary-700">Our Training History & Achievements</h2>
              <div className="space-y-4">
                <p className="text-lg text-text-secondary leading-relaxed">
                  We have been training students since last <span className="font-bold text-primary-600">15 years</span>. We are associated with <span className="font-semibold">MSSDS (Skill Development, Maharashtra)</span> and also with other large corporates to conduct training programs under their CSR initiatives.
                </p>
                <p className="text-lg text-text-secondary leading-relaxed">
                  Our achievement is placement of more than <span className="font-bold text-primary-600 text-xl">90%</span> of our students. Over the years we have trained and placed more than <span className="font-bold text-primary-600 text-xl">5000 freshers</span> in reputed companies.
                </p>
                <p className="text-lg text-text-secondary leading-relaxed">
                  Our students have been placed in companies like <span className="font-semibold">Wipro, Inspirisys, Capgemini, Onward, Paladian</span>...etc.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* What Sets Us Apart Section */}
          <AnimatedSection animationType="fade-in" delay={400}>
            <div className="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-8 shadow-large border border-primary-100">
              <h2 className="text-3xl font-bold mb-6 text-primary-700">What Sets Us Apart</h2>
              <div className="space-y-3">
                {[
                  "We are an IT Company conducting training in IT Infrastructure.",
                  "Training conducted by experienced professionals.",
                  "Our course duration is optimized and short.",
                  "We include specialized topics like Security and Mailing Solutions.",
                  "Placement Guaranteed."
                ].map((point, index) => (
                  <div key={index} className="flex items-center group">
                    <span className="text-lg font-bold text-primary-600 mr-3 min-w-[25px]">{index + 1}.</span>
                    <p className="text-base text-text-secondary group-hover:text-primary-600 transition-colors duration-200 flex-1">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Vision & Mission */}
          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection animationType="fade-in-left" delay={500}>
              <div className="bg-gradient-to-br from-primary-600 to-primary-500 rounded-2xl p-8 shadow-large text-white h-full">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center text-3xl mr-4">
                    👁️
                  </div>
                  <h2 className="text-3xl font-bold">Vision</h2>
                </div>
                <p className="text-lg leading-relaxed text-white/95">
                  To create an Institute, with the right environment for students to imbibe knowledge and skill sought after by the industry, thereby creating a key bridge between academia and industry.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animationType="fade-in-right" delay={600}>
              <div className="bg-gradient-to-br from-accent-600 to-accent-500 rounded-2xl p-8 shadow-large text-white h-full">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center text-3xl mr-4">
                    🎯
                  </div>
                  <h2 className="text-3xl font-bold">Mission</h2>
                </div>
                <p className="text-lg leading-relaxed text-white/95">
                  We are passionate about creating opportunities through lifelong learning, to provide students with professional, practical and positive learning experiences so they become competent, valuable professionals, and to generate enough career opportunities through our training programs.
                </p>
              </div>
            </AnimatedSection>
          </div>

          {/* Stats */}
          <AnimatedSection animationType="fade-in" delay={700}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { number: "28+", label: "Years in Industry", icon: "📈", description: "Providing IT solutions" },
                { number: "15+", label: "Years Training", icon: "🎓", description: "Training students" },
                { number: "5000+", label: "Students Placed", icon: "👥", description: "Freshers placed" },
                { number: "90%+", label: "Placement Rate", icon: "✅", description: "Success rate" }
              ].map((stat, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-medium border border-gray-100 hover-lift transition-all duration-300 text-center group">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
                  <div className="text-3xl font-extrabold gradient-text mb-2">{stat.number}</div>
                  <div className="text-sm font-semibold text-text-secondary mb-1">{stat.label}</div>
                  <div className="text-xs text-text-tertiary">{stat.description}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Partner Companies */}
          <AnimatedSection animationType="fade-in" delay={800}>
            <div className="bg-gradient-to-br from-surface to-white rounded-2xl p-8 shadow-large border border-gray-100">
              <h2 className="text-3xl font-bold mb-6 text-primary-700 text-center">Our Partner Companies</h2>
              <p className="text-lg text-text-secondary text-center mb-8">
                Crystal Solutions Ltd. has been providing services to:
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {['TCS', 'Wipro', 'HP', 'IBM', 'Dimension Data'].map((company, index) => (
                  <div key={index} className="bg-white rounded-lg px-6 py-3 border-2 border-primary-200 hover:border-primary-400 transition-all duration-300 hover:shadow-lg">
                    <span className="text-lg font-bold text-primary-700">{company}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary-600 via-primary-500 to-accent-500">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection animationType="fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
              Ready to Start Your Career?
            </h2>
            <p className="text-xl text-white/95 mb-8 font-medium">
              Join thousands of successful graduates who have transformed their careers with us
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/register"
                className="px-8 py-4 bg-white text-primary-600 rounded-xl hover:bg-primary-50 transition-all duration-300 font-bold text-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105"
              >
                Enroll Now
              </Link>
              <Link
                href="/course"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white rounded-xl hover:bg-white/20 transition-all duration-300 font-bold text-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105"
              >
                View Course
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
