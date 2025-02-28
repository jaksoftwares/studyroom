const faqs = [
    {
      question: "How do I submit an assignment?",
      answer: "Go to the assignments section, click on 'Submit Assignment,' and upload your document.",
    },
    {
      question: "How can I track my submitted assignments?",
      answer: "You can track your assignments under 'Tracking' in the dashboard.",
    },
    {
      question: "What payment methods are accepted?",
      answer: "We accept M-Pesa, PayPal, and major credit/debit cards.",
    },
  ];
  
  export default function FAQs() {
    return (
      <div className="p-4 bg-gray-100 rounded-lg mb-6">
        <h2 className="text-xl font-semibold mb-3">Frequently Asked Questions</h2>
  
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b pb-3">
              <h3 className="text-md font-semibold">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  