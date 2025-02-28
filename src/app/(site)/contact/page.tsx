import { Mail, Phone, MapPin, Send, HelpCircle } from "lucide-react";

export default function ContactUs() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 text-center bg-blue-50 rounded-lg">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Contact <span className="text-blue-600">StudyRoom</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Have questions? Need assistance? We&apos;re here to help!
        </p>
      </section>

      {/* Contact Details */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900">Get in Touch</h2>
          <p className="mt-6 text-gray-600 text-lg">Reach out to us via any of the methods below.</p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow text-center">
              <Mail className="text-blue-600 mx-auto h-10 w-10" />
              <h3 className="text-xl font-semibold mt-4">Email Us</h3>
              <p className="text-gray-600 mt-2">support@studyroom.com</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow text-center">
              <Phone className="text-blue-600 mx-auto h-10 w-10" />
              <h3 className="text-xl font-semibold mt-4">Call Us</h3>
              <p className="text-gray-600 mt-2">+123 456 7890</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow text-center">
              <MapPin className="text-blue-600 mx-auto h-10 w-10" />
              <h3 className="text-xl font-semibold mt-4">Visit Us</h3>
              <p className="text-gray-600 mt-2">123 Study Avenue, Knowledge City</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900">Send Us a Message</h2>
          <p className="mt-4 text-gray-600">Fill in the form below and we&apos;ll get back to you as soon as possible.</p>

          <form className="mt-8 bg-white p-6 rounded-lg shadow-md text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-medium">Your Name</label>
                <input type="text" placeholder="Enter your name" className="mt-2 w-full p-3 border rounded-lg focus:ring focus:ring-blue-200" />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">Your Email</label>
                <input type="email" placeholder="Enter your email" className="mt-2 w-full p-3 border rounded-lg focus:ring focus:ring-blue-200" />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-gray-700 font-medium">Your Message</label>
              <textarea placeholder="Write your message here..." className="mt-2 w-full p-3 border rounded-lg focus:ring focus:ring-blue-200" rows={5}></textarea>
            </div>
            <button type="submit" className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:bg-blue-700">
              <Send className="h-5 w-5" />
              <span>Send Message</span>
            </button>
          </form>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
          <p className="mt-4 text-gray-600">Find quick answers to common questions.</p>

          <div className="mt-8 space-y-6 text-left">
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold flex items-center">
                <HelpCircle className="text-blue-600 h-5 w-5 mr-2" />
                How do I submit an assignment?
              </h3>
              <p className="mt-2 text-gray-600">Simply sign up, create a task, and our experts will handle the rest.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold flex items-center">
                <HelpCircle className="text-blue-600 h-5 w-5 mr-2" />
                How long does it take to receive my work?
              </h3>
              <p className="mt-2 text-gray-600">It depends on the complexity and urgency of your task. Deadlines are always met.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold flex items-center">
                <HelpCircle className="text-blue-600 h-5 w-5 mr-2" />
                Is my payment secure?
              </h3>
              <p className="mt-2 text-gray-600">Yes, we use secure payment gateways like PayPal and Stripe.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 text-center bg-blue-600 text-white rounded-lg">
        <h2 className="text-3xl font-bold">Need Help? Contact Us Now</h2>
        <p className="mt-4 text-lg">Our support team is available 24/7 to assist you.</p>
      </section>
    </>
  );
}
