import { Github, Linkedin, Mail, Download } from "lucide-react";
import { NavLink } from "react-router-dom";
import { RESUME_FILENAME, RESUME_DISPLAY_NAME } from "../config/resume";

const linkBase =
  "relative w-full rounded-full px-0 py-2 text-[clamp(0.78rem,2.9vw,1.05rem)] font-medium leading-none tracking-tight text-center text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)] whitespace-nowrap md:w-auto md:px-4 md:py-2 md:text-sm";

const linkActive = "text-[var(--text-primary)]";

export default function SiteNav() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-[var(--border-color)] bg-[var(--nav-bg)] backdrop-blur w-full">
      <div className="mx-auto flex max-w-7xl flex-col px-4 py-3 sm:px-6 md:flex-row md:items-center md:justify-between md:py-4">
        {/* Top Row - Logo and Social Icons */}
        <div className="flex items-center justify-between md:justify-start">
          <NavLink
            to="/"
            className="font-semibold tracking-tight text-[var(--text-primary)] whitespace-nowrap"
          >
            Vinit Limkar
          </NavLink>
          
          <div className="flex items-center gap-3 md:hidden">
            <a href="https://github.com/Vvl1232" target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github className="h-5 w-5 text-[var(--text-secondary)] hover:text-[var(--text-primary)]" />
            </a>
            <a href="https://www.linkedin.com/in/vinit-limkar-b7a57a2a5" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5 text-[var(--text-secondary)] hover:text-[var(--text-primary)]" />
            </a>
            <NavLink to="/contact" aria-label="Contact">
              <Mail className="h-5 w-5 text-[var(--text-secondary)] hover:text-[var(--text-primary)]" />
            </NavLink>
            <a href={`/${RESUME_FILENAME}`} download={RESUME_DISPLAY_NAME} className="flex items-center gap-1 rounded-full bg-[var(--primary-color)] px-3 py-1.5 text-sm font-medium text-black hover:bg-[var(--accent-color)] hover:text-white">
              <Download className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Navigation Links - Centered on mobile */}
        <nav className="mt-3 grid w-full grid-cols-[1fr_1fr_1fr_1.35fr_1fr] gap-0 border-t border-[var(--border-color)] pt-3 sm:grid-cols-5 sm:gap-1 md:mt-0 md:flex md:flex-1 md:flex-nowrap md:justify-center md:gap-2 md:border-0 md:pt-0">
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

        {/* Desktop Social Icons */}
        <div className="hidden items-center gap-3 md:flex">
          <a href="https://github.com/Vvl1232" target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github className="h-5 w-5 text-[var(--text-secondary)] hover:text-[var(--text-primary)]" />
          </a>
          <a href="https://www.linkedin.com/in/vinit-limkar-b7a57a2a5" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Linkedin className="h-5 w-5 text-[var(--text-secondary)] hover:text-[var(--text-primary)]" />
          </a>
          <NavLink to="/contact" aria-label="Contact">
            <Mail className="h-5 w-5 text-[var(--text-secondary)] hover:text-[var(--text-primary)]" />
          </NavLink>
          <a href={`/${RESUME_FILENAME}`} download={RESUME_DISPLAY_NAME} className="flex items-center gap-1 rounded-full bg-[var(--primary-color)] px-4 py-2 text-sm font-medium text-black hover:bg-[var(--accent-color)] hover:text-white">
            <Download className="h-4 w-4" />
            <span className="hidden sm:inline">Resume</span>
          </a>
        </div>
      </div>
    </header>
  );
}
