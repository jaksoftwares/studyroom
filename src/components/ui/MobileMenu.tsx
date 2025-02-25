import Link from "next/link";

export default function MobileMenu({ isOpen, setIsOpen }) {
  return (
    <div className={`absolute top-16 left-0 w-full bg-white shadow-md md:hidden ${isOpen ? "block" : "hidden"}`}>
      <div className="flex flex-col space-y-4 p-4">
        <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-blue-600">Home</Link>
        <Link href="/services" onClick={() => setIsOpen(false)} className="hover:text-blue-600">Services</Link>
        <Link href="/pricing" onClick={() => setIsOpen(false)} className="hover:text-blue-600">Pricing</Link>
        <Link href="/about" onClick={() => setIsOpen(false)} className="hover:text-blue-600">About</Link>
        <Link href="/contact" onClick={() => setIsOpen(false)} className="hover:text-blue-600">Contact</Link>
        <Link href="/auth/login" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-blue-600">Login</Link>
        <Link href="/auth/signup" onClick={() => setIsOpen(false)} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Sign Up</Link>
      </div>
    </div>
  );
}
