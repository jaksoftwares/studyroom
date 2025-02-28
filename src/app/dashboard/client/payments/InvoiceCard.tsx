export default function InvoiceCard({ payment }: { payment: { id: number; date: string; amount: number; method: string; status: string } }) {
    return (
      <div className="p-4 border rounded-lg flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold">Invoice #{payment.id}</h3>
          <p className="text-sm text-gray-500">Date: {payment.date}</p>
          <p className="text-sm text-gray-500">Method: {payment.method}</p>
        </div>
        <div className="text-right">
          <p className="text-lg font-bold">${payment.amount}</p>
          <span
            className={`px-3 py-1 text-sm rounded-lg ${
              payment.status === "Paid" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
            }`}
          >
            {payment.status}
          </span>
        </div>
      </div>
    );
  }
  