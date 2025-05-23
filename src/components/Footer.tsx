import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 border-t border-gray-700 w-full">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4 flex items-center justify-center md:justify-start text-amber-400">
              <span className="mr-2">🍹</span>
              <span>NolIQ</span>
            </h3>
            <p className="text-sm opacity-80">Sophisticated zero-proof experiences</p>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-base font-semibold mb-4 text-white">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-accent transition">Home</Link></li>
              <li><Link href="/events" className="hover:text-accent transition">Past Sojourns</Link></li>
              <li><Link href="/about" className="hover:text-accent transition">About</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition">Contact</Link></li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-base font-semibold mb-4 text-white">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-amber-400 transition">Terms</Link></li>
              <li><Link href="#" className="hover:text-amber-400 transition">Privacy</Link></li>
              <li><Link href="#" className="hover:text-amber-400 transition">Cookies</Link></li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-base font-semibold mb-4 text-white">Connect</h4>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="https://www.facebook.com/people/NoliQ-by-Wanyinz/100086588075091/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-amber-400 transition text-2xl"
                aria-label="Facebook"
              >
                {/* SVG remains same */}
              </a>
              {/* Other social links */}
            </div>
          </div>
        </div>

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