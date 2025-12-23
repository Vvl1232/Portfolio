import { Outlet } from "react-router-dom";
import SiteNav from "../components/SiteNav";

export default function RootLayout() {
  return (
    <div className="min-h-screen bg-[var(--bg-dark)] text-[var(--text-primary)]">
      <SiteNav />
      <main className="w-full pt-24">
        <Outlet />
      </main>
    </div>
  );
}
