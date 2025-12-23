import { Github, Linkedin, Mail, Download } from "lucide-react";
import { NavLink } from "react-router-dom";
import { RESUME_FILENAME, RESUME_DISPLAY_NAME } from "../config/resume";

const linkBase =
  "relative rounded-full px-4 py-2 text-sm font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]";

const linkActive = "text-[var(--text-primary)]";

export default function SiteNav() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-[var(--border-color)] bg-[var(--nav-bg)] backdrop-blur w-full overflow-x-hidden">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
        <NavLink
          to="/"
          className="font-semibold tracking-tight text-[var(--text-primary)] whitespace-nowrap text-sm sm:text-base"
        >
          Vinit Limkar
        </NavLink>

        <nav className="hidden items-center gap-1 sm:gap-2 md:flex flex-nowrap overflow-x-auto scrollbar-hide">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : ""}`
            }
          >
            Home
          </NavLink>
<NavLink
            to="/projects"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : ""}`
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/skills"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : ""}`
            }
          >
            Skills
          </NavLink>
          <NavLink
            to="/experience"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : ""}`
            }
          >
            Experience
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : ""}`
            }
          >
            Contact
          </NavLink>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          <a
            className="text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
            href="https://github.com/Vvl1232"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            className="text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
            href="https://www.linkedin.com/in/vinit-limkar-b7a57a2a5"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <NavLink
            className="text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
            to="/contact"
            aria-label="Contact"
          >
            <Mail className="h-5 w-5" />
          </NavLink>
          <a
            href={`/${RESUME_FILENAME}`}
            download={RESUME_DISPLAY_NAME}
            className="ml-3 flex items-center gap-1 rounded-full bg-[var(--primary-color)] px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-[var(--accent-color)] hover:text-white"
          >
            <Download className="h-4 w-4" />
            <span className="hidden xs:inline">Resume</span>
          </a>
        </div>
      </div>
    </header>
  );
}
