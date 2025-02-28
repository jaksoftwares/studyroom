import Link from "next/link";
import { CheckCircle, HelpCircle, ArrowRight, Star } from "lucide-react";

export default function Pricing() {
  return (
    <>
      {/* Hero Section */}
      <section className="text-center py-16 bg-blue-50 rounded-lg">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Affordable <span className="text-blue-600">Pricing</span> Plans
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Choose a plan that fits your academic needs and budget. No hidden fees, just quality assistance.
        </p>
      </section>

      {/* Pricing Plans */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900">Our Plans</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Basic Plan */}
          <div className="border border-gray-300 p-8 rounded-lg text-center shadow-md">
            <h3 className="text-xl font-semibold text-gray-900">Basic</h3>
            <p className="text-gray-600 mt-2">Perfect for short assignments and quick tasks.</p>
            <div className="text-3xl font-bold text-blue-600 mt-4">$9.99</div>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li className="flex items-center justify-center">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2" /> Up to 2 Pages
              </li>
              <li className="flex items-center justify-center">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2" /> Standard Delivery
              </li>
              <li className="flex items-center justify-center">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2" /> Basic Formatting
              </li>
            </ul>
            <Link href="/auth/signup" className="mt-6 block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700">
              Get Started
            </Link>
          </div>

          {/* Standard Plan */}
          <div className="border border-gray-300 p-8 rounded-lg text-center shadow-lg bg-gray-50">
            <h3 className="text-xl font-semibold text-gray-900">Standard</h3>
            <p className="text-gray-600 mt-2">For students needing detailed research and high-quality work.</p>
            <div className="text-3xl font-bold text-blue-600 mt-4">$24.99</div>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li className="flex items-center justify-center">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2" /> Up to 5 Pages
              </li>
              <li className="flex items-center justify-center">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2" /> Priority Support
              </li>
              <li className="flex items-center justify-center">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2" /> Advanced Formatting
              </li>
            </ul>
            <Link href="/auth/signup" className="mt-6 block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700">
              Choose Plan
            </Link>
          </div>

          {/* Premium Plan */}
          <div className="border border-gray-300 p-8 rounded-lg text-center shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 flex items-center justify-center">
              Premium <Star className="h-5 w-5 text-yellow-500 ml-2" />
            </h3>
            <p className="text-gray-600 mt-2">For extensive research projects and professional-level work.</p>
            <div className="text-3xl font-bold text-blue-600 mt-4">$49.99</div>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li className="flex items-center justify-center">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2" /> Unlimited Pages
              </li>
              <li className="flex items-center justify-center">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2" /> 24/7 Priority Support
              </li>
              <li className="flex items-center justify-center">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2" /> Plagiarism & AI Checks
              </li>
            </ul>
            <Link href="/auth/signup" className="mt-6 block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700">
              Get Premium
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900">Frequently Asked Questions</h2>
        <div className="mt-8 space-y-6 max-w-3xl mx-auto">
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h3 className="text-lg font-semibold flex items-center">
              <HelpCircle className="h-5 w-5 text-blue-600 mr-2" /> Can I change my plan later?
            </h3>
            <p className="text-gray-600 mt-2">Yes, you can upgrade or downgrade anytime from your account settings.</p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h3 className="text-lg font-semibold flex items-center">
              <HelpCircle className="h-5 w-5 text-blue-600 mr-2" /> Is there a money-back guarantee?
            </h3>
            <p className="text-gray-600 mt-2">Yes! If you&apos;re not satisfied with our service, we offer a refund within 7 days.</p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h3 className="text-lg font-semibold flex items-center">
              <HelpCircle className="h-5 w-5 text-blue-600 mr-2" /> What payment methods do you accept?
            </h3>
            <p className="text-gray-600 mt-2">We accept PayPal, Stripe, Visa, and M-Pesa payments.</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 text-center bg-blue-600 text-white rounded-lg">
        <h2 className="text-3xl font-bold">Ready to Excel?</h2>
        <p className="mt-2 text-lg">Choose a plan and start your academic success journey today.</p>
        <Link href="/auth/signup" className="mt-6 inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">
          Get Started <ArrowRight className="inline-block ml-2 h-5 w-5" />
        </Link>
      </section>
    </>
  );
}
