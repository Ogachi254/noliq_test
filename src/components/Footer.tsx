import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 border-t border-gray-700 w-full">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4 flex items-center justify-center md:justify-start text-amber-400">
              <span className="mr-2">🍹</span>
              <span>NolIQ</span>
            </h3>
            <p className="text-sm opacity-80">Sophisticated zero-proof experiences</p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-base font-semibold mb-4 text-white">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-accent transition">Home</Link></li>
              <li><Link href="/events" className="hover:text-accent transition">Past Sojourns</Link></li>
              <li><Link href="/about" className="hover:text-accent transition">About</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="text-center md:text-left">
            <h4 className="text-base font-semibold mb-4 text-white">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-amber-400 transition">Terms</Link></li>
              <li><Link href="#" className="hover:text-amber-400 transition">Privacy</Link></li>
              <li><Link href="#" className="hover:text-amber-400 transition">Cookies</Link></li>
            </ul>
          </div>

          {/* Social Icons */}
          <div className="text-center md:text-left">
            <h4 className="text-base font-semibold mb-4 text-white">Connect</h4>
            <div className="flex justify-center md:justify-start space-x-4">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/people/NoliQ-by-Wanyinz/100086588075091/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-amber-400 transition text-2xl"
                aria-label="Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/noliqbw"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-amber-400 transition text-2xl"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* Email */}
              <a
                href="mailto:noliqbw@gmail.com"
                className="text-gray-300 hover:text-amber-400 transition text-2xl"
                aria-label="Email"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm opacity-80">© 2025 NolIQ by Wanyinz. All rights reserved.</p>
          <p className="text-xs opacity-80 mt-2 md:mt-0">
            Made with ❤️ by
            <a
              href="mailto:noliqbw@gmail.com"
              className="ml-1 hover:text-amber-400 transition"
              aria-label="Contact the developer"
            >
              Wanyinz
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}