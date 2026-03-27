import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const links = [
    { label: "About", href: "#about" },
    { label: "Education", href: "#education" },
    { label: "Projects", href: "/projects" },
    { label: "Skills", href: "/skills" },
    { label: "Contact", href: "#contact" },
  ];

  const handleScroll = (href: string) => {
    if (href.startsWith("#")) {
      // If we’re not on the index page, navigate there first
      if (window.location.pathname !== "/") {
        navigate("/"); // go to index page
        setTimeout(() => {
          const el = document.querySelector(href);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 100); // short delay to wait for DOM
      } else {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
      setIsOpen(false); // close mobile menu
    } else {
      setIsOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50 glass"
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="font-display text-lg sm:text-xl font-bold gradient-text">
          Portfolio
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-8">
          {links.map((link) =>
            link.href.startsWith("#") ? (
              <button
                key={link.label}
                onClick={() => handleScroll(link.href)}
                className="font-body text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </button>
            ) : (
              <Link
                key={link.label}
                to={link.href}
                className="font-body text-sm text-muted-foreground transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-muted-foreground hover:text-primary transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden border-t border-border"
          >
            <div className="flex flex-row flex-wrap gap-4 px-6 py-4 justify-center">
              {links.map((link) =>
                link.href.startsWith("#") ? (
                  <button
                    key={link.label}
                    onClick={() => handleScroll(link.href)}
                    className="font-body text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </button>
                ) : (
                  <Link
                    key={link.label}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className="font-body text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
