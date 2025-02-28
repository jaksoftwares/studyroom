interface ButtonProps {
    text: string;
    onClick: () => void;
    isLoading?: boolean;
  }
  
  export default function SubmitButton({ text, onClick, isLoading }: ButtonProps) {
    return (
      <button
        onClick={onClick}
        disabled={isLoading}
        className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-400"
      >
        {isLoading ? "Loading..." : text}
      </button>
    );
  }
  