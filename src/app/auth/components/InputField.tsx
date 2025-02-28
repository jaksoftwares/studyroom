interface InputProps {
    label: string;
    type: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }
  
  export default function InputField({ label, type, placeholder, value, onChange }: InputProps) {
    return (
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-1">{label}</label>
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-200"
        />
      </div>
    );
  }
  