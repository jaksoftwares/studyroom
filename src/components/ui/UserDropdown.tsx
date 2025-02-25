import { useState } from "react";
import { signOut } from "next-auth/react";
import { ChevronDown, LogOut } from "lucide-react";
import Image from "next/image";

interface UserDropdownProps {
  user: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
  };
}

export default function UserDropdown({ user }: UserDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button onClick={() => setIsOpen(!isOpen)} className="flex items-center space-x-2 text-gray-700">
        <Image
          src={user.image || "/avatar-placeholder.png"}
          alt="User Avatar"
          width={32}
          height={32}
          className="w-8 h-8 rounded-full"
        />
        <span>{user.name || user.email}</span>
        <ChevronDown className="h-4 w-4" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 bg-white shadow-md rounded-lg w-40 p-2">
          <p className="text-sm text-gray-700 px-2">Logged in as <strong>{user.email}</strong></p>
          <button
            onClick={() => signOut()}
            className="flex items-center space-x-2 w-full px-2 py-1 text-red-600 hover:bg-gray-100 rounded-md"
          >
            <LogOut className="h-4 w-4" />
            <span>Logout</span>
          </button>
        </div>
      )}
    </div>
  );
}
