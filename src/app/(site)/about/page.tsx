import Image from "next/image";
import { CheckCircle, Award, Lightbulb, Star, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AboutUs() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 text-center bg-blue-50 rounded-lg">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          About <span className="text-blue-600">StudyRoom</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Empowering students and professionals with top-notch academic assistance.
        </p>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900">Our Mission & Vision</h2>
          <p className="mt-6 text-gray-600 text-lg">
            At <span className="font-semibold text-blue-600">StudyRoom</span>, our mission is to provide students and professionals with high-quality, plagiarism-free academic assistance. 
            We believe in fostering education through innovation, ensuring every learner has access to reliable, ethical, and expert-driven support.
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900">Why Choose StudyRoom?</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 shadow-md rounded-lg text-center">
              <CheckCircle className="text-blue-600 mx-auto h-12 w-12" />
              <h3 className="text-xl font-semibold mt-4">Expert Writers</h3>
              <p className="text-gray-600 mt-2">Highly vetted academic professionals with vast experience.</p>
            </div>
            <div className="bg-white p-6 shadow-md rounded-lg text-center">
              <Award className="text-blue-600 mx-auto h-12 w-12" />
              <h3 className="text-xl font-semibold mt-4">Top-Quality Work</h3>
              <p className="text-gray-600 mt-2">Thorough research, plagiarism-free content, and excellent presentation.</p>
            </div>
            <div className="bg-white p-6 shadow-md rounded-lg text-center">
              <Lightbulb className="text-blue-600 mx-auto h-12 w-12" />
              <h3 className="text-xl font-semibold mt-4">Innovative Learning</h3>
              <p className="text-gray-600 mt-2">A seamless, AI-driven platform ensuring smooth academic support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16">
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

      {/* Meet The Team (Optional) */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900">Meet Our Team</h2>
          <p className="mt-4 text-gray-600 text-lg">A dedicated group of professionals ensuring quality academic support.</p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 shadow-md rounded-lg text-center">
              <Image src="/team/member1.jpg" width={100} height={100} className="rounded-full mx-auto" alt="Team Member" />
              <h3 className="text-xl font-semibold mt-4">Jane Doe</h3>
              <p className="text-gray-600">Lead Academic Expert</p>
            </div>
            <div className="bg-white p-6 shadow-md rounded-lg text-center">
              <Image src="/team/member2.jpg" width={100} height={100} className="rounded-full mx-auto" alt="Team Member" />
              <h3 className="text-xl font-semibold mt-4">John Smith</h3>
              <p className="text-gray-600">Quality Assurance Lead</p>
            </div>
            <div className="bg-white p-6 shadow-md rounded-lg text-center">
              <Image src="/team/member3.jpg" width={100} height={100} className="rounded-full mx-auto" alt="Team Member" />
              <h3 className="text-xl font-semibold mt-4">Emily Johnson</h3>
              <p className="text-gray-600">Client Support Head</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900">What Our Clients Say</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 shadow-md rounded-lg">
            <Star className="text-yellow-500 mx-auto h-8 w-8" />
            <p className="text-gray-600 italic mt-4">&quot;StudyRoom helped me complete my thesis with perfection!&quot;</p>
            <p className="mt-4 font-semibold text-blue-600">- Michael, PhD Student</p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg">
            <Star className="text-yellow-500 mx-auto h-8 w-8" />
            <p className="text-gray-600 italic mt-4">&quot;The best academic assistance platform I have ever used!&quot;</p>
            <p className="mt-4 font-semibold text-blue-600">- Sarah, MBA Graduate</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 text-center bg-blue-950 text-white rounded-lg">
        <h2 className="text-3xl font-bold">Join StudyRoom Today</h2>
        <Link href="/auth/signup" className="mt-6 inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">
          Get Started <ArrowRight className="inline-block ml-2 h-5 w-5" />
        </Link>
      </section>
    </>
  );
}
