interface AlertProps {
    message: string;
    type: "success" | "error";
  }
  
  export default function Alert({ message, type }: AlertProps) {
    return (
      <div className={`p-3 rounded-lg text-center ${type === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
        {message}
      </div>
    );
  }
  