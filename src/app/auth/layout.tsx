import Link from "next/link";
import "@/styles/globals.css";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Authentication | StudyRoom</title>
        <meta name="description" content="Secure authentication for StudyRoom platform." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        {/* Header */}
        <header className="w-full py-4 bg-white shadow-sm">
          <div className="max-w-4xl mx-auto flex justify-between items-center px-6">
            <Link href="/" className="text-xl font-bold text-blue-600">
              StudyRoom
            </Link>
            <Link href="/auth/login" className="text-sm text-gray-600 hover:text-blue-600">
              Already have an account? Sign in
            </Link>
          </div>
        </header>

        {/* Auth Content */}
        <main className="flex-1 w-full max-w-md px-6 py-12 bg-white shadow-md rounded-lg">
          {children}
        </main>

        {/* Footer */}
        <footer className="w-full py-4 text-center text-sm text-gray-600 mt-6">
          &copy; {new Date().getFullYear()} StudyRoom. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
