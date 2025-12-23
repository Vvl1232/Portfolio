import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeInUp } from '../utils/animations';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'Experience', path: '/experience' },
  { name: 'Contact', path: '/contact' },
];

export default function Navigation() {
  const location = useLocation();

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-40 px-6 py-4 backdrop-blur-md bg-gray-900/80"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="container flex items-center justify-between mx-auto">
        <Link to="/" className="text-xl font-bold text-white">
          Vinit Limkar
        </Link>
        <div className="hidden space-x-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`relative px-2 py-1 text-sm font-medium transition-colors ${
                location.pathname === item.path
                  ? 'text-cyan-400'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              {item.path === location.pathname && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
