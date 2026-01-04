'use client';

import { useState, FormEvent } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimatedSection from '../components/AnimatedSection';
import WhatsAppButton from '../components/WhatsAppButton';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    course: 'IT Support Engineer',
    joinDate: '',
    source: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    // Formspree endpoint - replace YOUR_FORM_ID with your actual Formspree form ID
    // Get your form ID from https://formspree.io/forms
    const formspreeEndpoint = 'https://formspree.io/f/YOUR_FORM_ID';

    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          city: formData.city,
          course: formData.course,
          joinDate: formData.joinDate,
          source: formData.source,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          city: '',
          course: 'IT Support Engineer',
          joinDate: '',
          source: '',
          message: '',
        });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="min-h-screen bg-surface">
      <Navbar />
      
      <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-50/30 via-white to-accent-50/30">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection animationType="fade-in">
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 gradient-text">
                Registration
              </h1>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                To register please complete the following form. All fields in this form must be filled out in order to process the registration; incomplete requests cannot be processed.
              </p>
              <p className="text-base text-text-tertiary mt-4 max-w-2xl mx-auto">
                If you need assistance, please e-mail{' '}
                <a href="mailto:kiran@crysolacademy.com" className="text-primary-600 hover:text-primary-700 transition-colors font-medium">
                  kiran@crysolacademy.com
                </a>
                . This registration form is for the IT Support Engineer. If you are interested in any other training programs offered by Crysol Academy, please contact{' '}
                <a href="tel:+919820287251" className="text-primary-600 hover:text-primary-700 transition-colors font-medium">
                  +91 9820287251
                </a>
                .
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animationType="scale-in" delay={200}>
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-10 shadow-2xl border border-gray-100 space-y-8 hover-lift transition-all duration-300">
            {/* Personal Details */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-primary-700 flex items-center">
                <span className="w-1 h-8 bg-primary-500 rounded-full mr-4"></span>
                Personal Details
              </h2>
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-text-primary mb-2">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-surface border border-gray-200 rounded-xl text-text-primary focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-text-primary mb-2">
                    E-mail <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-surface border border-gray-200 rounded-xl text-text-primary focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-text-primary mb-2">
                    Mobile No <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-surface border border-gray-200 rounded-xl text-text-primary focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    placeholder="+91 9876543210"
                  />
                </div>

                <div>
                  <label htmlFor="city" className="block text-sm font-semibold text-text-primary mb-2">
                    City <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-surface border border-gray-200 rounded-xl text-text-primary focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your city"
                  />
                </div>
              </div>
            </div>

            {/* Course Details */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-primary-700 flex items-center">
                <span className="w-1 h-8 bg-primary-500 rounded-full mr-4"></span>
                Course Details
              </h2>
              <div className="space-y-5">
                <div>
                  <label htmlFor="course" className="block text-sm font-semibold text-text-primary mb-2">
                    Course Interested <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="course"
                    name="course"
                    required
                    value={formData.course}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-surface border border-gray-200 rounded-xl text-text-primary focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="IT Support Engineer">IT Support Engineer</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="joinDate" className="block text-sm font-semibold text-text-primary mb-2">
                    When can you join (DD-MM-YYYY) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="joinDate"
                    name="joinDate"
                    required
                    placeholder="DD-MM-YYYY"
                    value={formData.joinDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-surface border border-gray-200 rounded-xl text-text-primary focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                  />
                </div>

                <div>
                  <label htmlFor="source" className="block text-sm font-semibold text-text-primary mb-2">
                    How Did You Know About Us <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="source"
                    name="source"
                    required
                    value={formData.source}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-surface border border-gray-200 rounded-xl text-text-primary focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    placeholder="e.g., Google, Friend, Advertisement"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-text-primary mb-2">
                    Other Specification / Remarks / Comments
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-surface border border-gray-200 rounded-xl text-text-primary focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Any additional information you'd like to share..."
                  />
                </div>
              </div>
            </div>

            {/* Status Messages */}
            {status === 'success' && (
              <div className="p-5 bg-green-50 border-2 border-green-200 rounded-xl text-green-700 flex items-center">
                <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Registration submitted successfully! We will contact you soon.
              </div>
            )}

            {status === 'error' && (
              <div className="p-5 bg-red-50 border-2 border-red-200 rounded-xl text-red-700 flex items-center">
                <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                There was an error submitting your registration. Please try again or contact us directly.
              </div>
            )}

            {/* Submit Button */}
            <div className="flex gap-4 pt-4">
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="flex-1 px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-xl hover:from-primary-700 hover:to-primary-600 transition-all duration-300 font-bold shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none relative overflow-hidden group"
              >
                {status === 'submitting' ? (
                  <span className="flex items-center justify-center relative z-10">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </span>
                ) : (
                  <span className="relative z-10">Submit Registration</span>
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-700 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button
                type="reset"
                onClick={() => {
                  setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    city: '',
                    course: 'IT Support Engineer',
                    joinDate: '',
                    source: '',
                    message: '',
                  });
                  setStatus('idle');
                }}
                className="px-8 py-4 bg-gray-100 text-text-primary rounded-xl hover:bg-gray-200 transition-all duration-300 font-semibold border border-gray-200"
              >
                Reset
              </button>
            </div>
          </form>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
