"use client";

import Image from "next/image";

type ProfileCardProps = {
  name: string;
  email: string;
  image?: string; // Optional property
};

export default function ProfileCard({ name, email, image }: ProfileCardProps) {
  return (
    <div className="bg-white shadow-md p-4 rounded-lg flex items-center space-x-4">
      <Image
        src={image || "/default-avatar.png"}
        alt={name}
        width={50}
        height={50}
        className="rounded-full"
      />
      <div>
        <h3 className="font-semibold">{name}</h3>
        <p className="text-gray-500 text-sm">{email}</p>
      </div>
    </div>
  );
}
