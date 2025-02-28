"use client";

import Image from "next/image";

export default function ProfileCard({ name, email, image }) {
  return (
    <div className="bg-white shadow-md p-4 rounded-lg flex items-center space-x-4">
      <Image src={image || "/default-avatar.png"} alt={name} width={50} height={50} className="rounded-full" />
      <div>
        <h3 className="font-semibold">{name}</h3>
        <p className="text-gray-500 text-sm">{email}</p>
      </div>
    </div>
  );
}
