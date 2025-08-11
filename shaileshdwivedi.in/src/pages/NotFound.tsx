import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20 text-center">
      <h1 className="text-4xl font-semibold">Page not found</h1>
      <p className="mt-2 text-slate-600 dark:text-slate-300">
        The page you’re looking for doesn’t exist.
      </p>
      <Link
        to="/"
        className="mt-6 inline-block px-4 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-500"
      >
        Go home
      </Link>
    </div>
  );
}
