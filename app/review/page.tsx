'use client';

import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimatedSection from '../components/AnimatedSection';
import WhatsAppButton from '../components/WhatsAppButton';
import Link from 'next/link';

export default function ReviewPage() {
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
              What Our Students Say
            </h1>
            <p className="text-lg sm:text-xl text-text-secondary max-w-3xl mx-auto font-medium">
              Real experiences from our graduates
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { text: "The training was practical and industry-focused. I got placed immediately after completing the course.", author: "IT Support Engineer Graduate" },
              { text: "45 days of intensive training prepared me well for the industry. The instructors have real-world experience.", author: "Recent Graduate" },
              { text: "Best decision I made. Got trained and placed with a leading IT company within 60 days.", author: "Successful Placement" },
              { text: "The course content was exactly what the industry needed. I felt confident during my interviews.", author: "Placed Graduate" },
              { text: "Excellent training methodology. The practical sessions helped me understand real-world scenarios.", author: "IT Professional" },
              { text: "90% placement guarantee is real! I got placed even before completing the course.", author: "Successful Student" }
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

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary-600 via-primary-500 to-accent-500">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection animationType="fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-xl text-white/95 mb-8 font-medium">
              Start your journey towards a successful IT career today
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

