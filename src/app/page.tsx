import Link from "next/link";
import { CheckCircle, BookOpen, Shield, ArrowRight } from "lucide-react";

export default function Home() {
  return (

       <>
      {/* Hero Section */}
      <section className="text-center py-16 bg-blue-50 rounded-lg">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Welcome to <span className="text-blue-600">StudyRoom</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Your ultimate academic assistance platform for students and professionals.
        </p>
        <div className="mt-6 flex justify-center space-x-4">
          <Link href="/auth/signup" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700">
            Get Started
          </Link>
          <Link href="/about" className="px-6 py-3 border border-gray-300 rounded-lg font-semibold hover:bg-gray-100">
            Learn More
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900">Why Choose StudyRoom?</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 shadow-md rounded-lg text-center">
            <CheckCircle className="text-blue-600 mx-auto h-10 w-10" />
            <h3 className="text-xl font-semibold mt-4">Verified Writers</h3>
            <p className="text-gray-600 mt-2">We ensure quality work with vetted and experienced writers.</p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg text-center">
            <BookOpen className="text-blue-600 mx-auto h-10 w-10" />
            <h3 className="text-xl font-semibold mt-4">Academic Excellence</h3>
            <p className="text-gray-600 mt-2">We provide plagiarism-free, well-researched content.</p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg text-center">
            <Shield className="text-blue-600 mx-auto h-10 w-10" />
            <h3 className="text-xl font-semibold mt-4">Secure Payments</h3>
            <p className="text-gray-600 mt-2">Your transactions are safe with encrypted payment methods.</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-50 rounded-lg">
        <h2 className="text-3xl font-bold text-center text-gray-900">How It Works</h2>
        <div className="mt-8 flex flex-col md:flex-row items-center justify-center space-y-6 md:space-x-8">
          <div className="text-center md:w-1/3">
            <h3 className="text-xl font-semibold">1. Sign Up & Post Assignment</h3>
            <p className="text-gray-600 mt-2">Create an account and submit your academic task.</p>
          </div>
          <div className="text-center md:w-1/3">
            <h3 className="text-xl font-semibold">2. Writer Selection & Work Begins</h3>
            <p className="text-gray-600 mt-2">Our experts review and assign the best writer.</p>
          </div>
          <div className="text-center md:w-1/3">
            <h3 className="text-xl font-semibold">3. Review & Download</h3>
            <p className="text-gray-600 mt-2">Receive your work, review it, and download it securely.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900">What Our Users Say</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 shadow-md rounded-lg">
            <p className="text-gray-600 italic">&quot;StudyRoom helped me ace my research paper. The quality was outstanding!&quot;</p>
            <p className="mt-4 font-semibold text-blue-600">- Alex, University Student</p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg">
            <p className="text-gray-600 italic">&quot;Fast, reliable, and top-notch work. Highly recommend!&quot;</p>
            <p className="mt-4 font-semibold text-blue-600">- Sarah, MBA Graduate</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 text-center bg-blue-600 text-white rounded-lg">
        <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
        <p className="mt-2 text-lg">Sign up today and get expert academic assistance in minutes!</p>
        <Link href="/auth/signup" className="mt-6 inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">
          Join Now <ArrowRight className="inline-block ml-2 h-5 w-5" />
        </Link>
      </section>
      </>
  );
}
