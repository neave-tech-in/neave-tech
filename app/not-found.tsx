import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Page Not Found',
  description: 'The page you are looking for could not be found.',
  robots: {
    index: false,
    follow: false,
  },
  // Canonical yahan set karo ya hata do
  alternates: {
    canonical: 'https://www.neave.tech/404',
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-lg text-gray-600 mb-8">
        This page could not be found.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition"
      >
        Go back home
      </Link>
    </div>
  );
}