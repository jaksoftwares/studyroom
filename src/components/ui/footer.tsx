import Link from "next/link";
import { Facebook, Twitter, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
        
        {/* Brand & About */}
        <div>
          <h2 className="text-xl font-bold text-white">StudyRoom</h2>
          <p className="mt-2 text-sm text-gray-400">
            Empowering students with smart academic solutions. Learn, grow, and succeed with StudyRoom.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li key="home"><Link href="/" className="hover:text-white">Home</Link></li>
            <li key="services"><Link href="/services" className="hover:text-white">Services</Link></li>
            <li key="pricing"><Link href="/pricing" className="hover:text-white">Pricing</Link></li>
            <li key="about"><Link href="/about" className="hover:text-white">About</Link></li>
            <li key="contact"><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Contact & Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact Us</h3>
          <p className="text-sm text-gray-400">Email: support@studyroom.com</p>
          <div className="flex space-x-4 mt-3">
            <Link href="https://facebook.com" target="_blank" className="hover:text-white" aria-label="Facebook">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="https://twitter.com" target="_blank" className="hover:text-white" aria-label="Twitter">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="https://linkedin.com" target="_blank" className="hover:text-white" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link href="mailto:support@studyroom.com" className="hover:text-white" aria-label="Email">
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* Legal & Copyright */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li key="privacy"><Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
            <li key="terms"><Link href="/terms" className="hover:text-white">Terms of Service</Link></li>
          </ul>
          <p className="text-xs text-gray-500 mt-4">© {new Date().getFullYear()} StudyRoom. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}