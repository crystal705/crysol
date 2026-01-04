'use client';

import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimatedSection from '../components/AnimatedSection';
import WhatsAppButton from '../components/WhatsAppButton';

export default function ContactPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // SVG pattern URL
  const bluePattern = "data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233B82F6' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E";

  return (
    <main className={`min-h-screen bg-background transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-50 via-white to-accent-50 relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <AnimatedSection animationType="fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 gradient-text leading-tight">
              Contact Us
            </h1>
            <p className="text-lg sm:text-xl text-text-secondary max-w-3xl mx-auto font-medium">
              Get in touch with us for more information
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <AnimatedSection animationType="fade-in-left" delay={200}>
              <div className="bg-gradient-to-br from-primary-50 via-accent-50 to-primary-50 rounded-2xl p-10 shadow-large border border-primary-100 relative overflow-hidden">
                <div className="absolute inset-0 opacity-50" style={{ backgroundImage: `url('${bluePattern}')` }}></div>
                
                <h3 className="text-2xl font-bold mb-8 text-primary-700 relative z-10">Crysol Academy</h3>
                <div className="space-y-5 text-text-secondary relative z-10">
                  {[
                    { label: "Address", content: ["716/717, Reena Complex,", "Ramdev Nagar, Vidyavihar (W),", "Mumbai 400086. India."], type: "text" },
                    { label: "Mobile", content: ["9820158034"], type: "tel", link: "tel:+919820158034" },
                    { label: "E-mail", content: ["training@crysolacademy.com"], type: "email", link: "mailto:training@crysolacademy.com" },
                    { label: "Contact Person", content: ["Vasant", "+91 9820287251", "vasant@crystalonnet.com"], type: "mixed", links: ["tel:+919820287251", "mailto:vasant@crystalonnet.com"] }
                  ].map((item, index) => (
                    <div key={index} className="group">
                      <p className="font-bold text-text-primary mb-1 text-base">{item.label}:</p>
                      {item.content.map((line, lineIndex) => {
                        const linkIndex = item.label === "Contact Person" ? lineIndex - 1 : lineIndex;
                        const isLink = item.link || (item.links && item.links[linkIndex]);
                        const linkHref = item.link || (item.links && item.links[linkIndex] ? item.links[linkIndex] : undefined);
                        
                        return (
                          <p key={lineIndex} className="leading-relaxed text-sm">
                            {isLink && linkHref ? (
                              <a href={linkHref} className="text-primary-600 hover:text-primary-700 transition-colors font-medium hover:underline">
                                {line}
                              </a>
                            ) : (
                              line
                            )}
                          </p>
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Google Maps */}
            <AnimatedSection animationType="fade-in-right" delay={300}>
              <div className="bg-white rounded-2xl p-6 shadow-large border border-gray-100 h-full">
                <h3 className="text-2xl font-bold mb-6 text-primary-700">Find Us</h3>
                <div className="rounded-xl overflow-hidden shadow-lg h-[400px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.5!2d72.9!3d19.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA2JzAwLjAiTiA3MsKwNTQnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Crysol Academy Location"
                  ></iframe>
                </div>
                <p className="text-sm text-text-tertiary mt-4 text-center">
                  716/717, Reena Complex, Ramdev Nagar, Vidyavihar (W), Mumbai 400086
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}

