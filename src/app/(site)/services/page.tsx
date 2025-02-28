import Link from "next/link";
import { BookOpen, FileText, Users, ShieldCheck, Clock, CheckCircle, HelpCircle, ArrowRight } from "lucide-react";

export default function Services() {
  return (
    <>
      {/* Hero Section */}
      <section className="text-center py-16 bg-blue-50 rounded-lg">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Our <span className="text-blue-600">Services</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Expert academic assistance tailored to your needs. Choose from a variety of services to excel in your studies.
        </p>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900">What We Offer</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 shadow-md rounded-lg text-center">
            <BookOpen className="text-blue-600 mx-auto h-12 w-12" />
            <h3 className="text-xl font-semibold mt-4">Essay & Research Writing</h3>
            <p className="text-gray-600 mt-2">Get high-quality essays, research papers, and thesis writing assistance.</p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg text-center">
            <FileText className="text-blue-600 mx-auto h-12 w-12" />
            <h3 className="text-xl font-semibold mt-4">Proofreading & Editing</h3>
            <p className="text-gray-600 mt-2">Enhance the quality of your work with professional editing services.</p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg text-center">
            <Users className="text-blue-600 mx-auto h-12 w-12" />
            <h3 className="text-xl font-semibold mt-4">Tutoring & Study Help</h3>
            <p className="text-gray-600 mt-2">One-on-one tutoring sessions for better understanding of complex topics.</p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg text-center">
            <ShieldCheck className="text-blue-600 mx-auto h-12 w-12" />
            <h3 className="text-xl font-semibold mt-4">Plagiarism Checking</h3>
            <p className="text-gray-600 mt-2">Ensure originality with AI-powered plagiarism detection tools.</p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg text-center">
            <Clock className="text-blue-600 mx-auto h-12 w-12" />
            <h3 className="text-xl font-semibold mt-4">Urgent Assignments</h3>
            <p className="text-gray-600 mt-2">Need help fast? Get high-quality work done in record time.</p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg text-center">
            <CheckCircle className="text-blue-600 mx-auto h-12 w-12" />
            <h3 className="text-xl font-semibold mt-4">Homework & Coursework</h3>
            <p className="text-gray-600 mt-2">Let experts handle your assignments while you focus on learning.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50 rounded-lg">
        <h2 className="text-3xl font-bold text-center text-gray-900">Why Choose StudyRoom?</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 shadow-md rounded-lg text-center">
            <CheckCircle className="text-green-600 mx-auto h-10 w-10" />
            <h3 className="text-xl font-semibold mt-4">Expert Writers</h3>
            <p className="text-gray-600 mt-2">Our team consists of highly qualified professionals in various fields.</p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg text-center">
            <ShieldCheck className="text-green-600 mx-auto h-10 w-10" />
            <h3 className="text-xl font-semibold mt-4">100% Confidentiality</h3>
            <p className="text-gray-600 mt-2">Your privacy and data security are our top priorities.</p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg text-center">
            <Clock className="text-green-600 mx-auto h-10 w-10" />
            <h3 className="text-xl font-semibold mt-4">On-Time Delivery</h3>
            <p className="text-gray-600 mt-2">Never miss a deadline with our punctual delivery system.</p>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900">Frequently Asked Questions</h2>
        <div className="mt-8 space-y-6 max-w-3xl mx-auto">
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h3 className="text-lg font-semibold flex items-center">
              <HelpCircle className="h-5 w-5 text-blue-600 mr-2" /> How do I place an order?
            </h3>
            <p className="text-gray-600 mt-2">Simply sign up, choose a service, and submit your assignment details.</p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h3 className="text-lg font-semibold flex items-center">
              <HelpCircle className="h-5 w-5 text-blue-600 mr-2" /> Can I communicate with my writer?
            </h3>
            <p className="text-gray-600 mt-2">Yes! You can chat with your assigned writer for any clarifications.</p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h3 className="text-lg font-semibold flex items-center">
              <HelpCircle className="h-5 w-5 text-blue-600 mr-2" /> Is my payment secure?
            </h3>
            <p className="text-gray-600 mt-2">Absolutely. We use encrypted payment gateways like PayPal and Stripe.</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 text-center bg-blue-600 text-white rounded-lg">
        <h2 className="text-3xl font-bold">Start Your Journey With StudyRoom</h2>
        <p className="mt-2 text-lg">Sign up today and boost your academic success with expert assistance.</p>
        <Link href="/auth/signup" className="mt-6 inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">
          Get Started <ArrowRight className="inline-block ml-2 h-5 w-5" />
        </Link>
      </section>
    </>
  );
}
