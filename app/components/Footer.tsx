import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="flex flex-wrap justify-center md:justify-start gap-8 text-sm">
            <Link href="/" className="text-text-secondary hover:text-primary-600 transition-colors duration-200 font-medium">
              Home
            </Link>
            <Link href="#about" className="text-text-secondary hover:text-primary-600 transition-colors duration-200 font-medium">
              About Us
            </Link>
            <Link href="#courses" className="text-text-secondary hover:text-primary-600 transition-colors duration-200 font-medium">
              Courses
            </Link>
            <Link href="/register" className="text-text-secondary hover:text-primary-600 transition-colors duration-200 font-medium">
              Registration
            </Link>
            <Link href="#contact" className="text-text-secondary hover:text-primary-600 transition-colors duration-200 font-medium">
              Contact Us
            </Link>
          </div>
          <p className="text-sm text-text-tertiary">
            © 2025 Crysol Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

