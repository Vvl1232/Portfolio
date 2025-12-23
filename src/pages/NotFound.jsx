import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";

export default function NotFound() {
  return (
    <PageTransition>
      <section className="mx-auto max-w-7xl px-6 py-16">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl text-[var(--text-primary)]">
          Page not found
        </h1>
        <p className="mt-4 max-w-2xl text-[var(--text-secondary)]">
          The page you’re looking for doesn’t exist.
        </p>

        <div className="mt-10">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-cyan-300"
          >
            Back to Home
          </Link>
        </div>
      </section>
    </PageTransition>
  );
}
