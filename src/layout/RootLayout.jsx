import { Outlet } from "react-router-dom";
import SiteNav from "../components/SiteNav";

export default function RootLayout() {
  return (
    <div className="min-h-screen bg-[var(--bg-dark)] text-[var(--text-primary)] flex flex-col">
      <SiteNav />
      <main className="w-full pt-28 sm:pt-24 md:pt-20 flex-1 flex flex-col">
        <Outlet />
      </main>
      <footer className="border-t border-[var(--border-color)] bg-[var(--bg-dark)]">
        <div className="mx-auto max-w-7xl px-6 py-4 text-center text-sm text-[var(--text-secondary)]">
          <p className="font-medium text-[var(--text-primary)]">
            Designed &amp; Developed by Vinit Limkar
          </p>
          <p className="mt-2">&copy; 2026 All Rights Reserved.</p>
          <p className="mt-1 text-xs">
            Built using React &bull; Vite &bull; Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}
