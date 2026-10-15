
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navItems } from "../data/portfolio";

interface HeaderProps {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}

export default function Header({
  menuOpen,
  setMenuOpen,
}: HeaderProps) {
  return (
    <header className="site-header">
      <div className="header-container">
        {/* Brand */}
        <a
          href="#home"
          className="header-brand"
          onClick={() => setMenuOpen(false)}
          aria-label="Kishor Kumar home"
        >
          <span className="brand-mark">K</span>

          <span className="brand-text">
            <span className="brand-name">Kishor Kumar</span>
            <span className="brand-role">Frontend Engineer</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav
          className="desktop-nav"
          aria-label="Main navigation"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-link"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Header Actions */}
        <div className="header-actions">
          <a
            href="#contact"
            className="header-cta"
          >
            <span>Let's talk</span>
            <ArrowUpRight size={16} />
          </a>

          <button
            className="header-menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            type="button"
          >
            {menuOpen ? (
              <X size={22} />
            ) : (
              <Menu size={22} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        id="mobile-navigation"
        className={`mobile-nav ${menuOpen ? "is-open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <nav aria-label="Mobile navigation">
          {navItems.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              className="mobile-nav-link"
              style={{ transitionDelay: `${index * 50}ms` }}
              tabIndex={menuOpen ? 0 : -1}
              onClick={() => setMenuOpen(false)}
            >
              <span>{item.label}</span>
              <ArrowUpRight size={17} />
            </a>
          ))}

          <a
            href="#contact"
            className="mobile-nav-cta"
            tabIndex={menuOpen ? 0 : -1}
            onClick={() => setMenuOpen(false)}
          >
            Let's work together
            <ArrowUpRight size={18} />
          </a>
        </nav>
      </div>
    </header>
  );
}
