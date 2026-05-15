import { NavLink } from 'react-router-dom';

const linkClass = ({ isActive }) =>
  `nav-link text-uppercase px-lg-3 ${isActive ? 'active' : ''}`;

export function Header() {
  return (
    <header className="site-header sticky-top shadow-sm">
      <nav
        className="navbar navbar-expand-md navbar-dark border-bottom border-secondary"
        style={{ backgroundColor: '#000' }}
      >
        <div className="container">
          <NavLink className="navbar-brand fw-semibold text-uppercase text-white" to="/" end>
            John Doe
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNav"
            aria-controls="mainNav"
            aria-expanded="false"
            aria-label="Ouvrir le menu"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="mainNav">
            <ul className="navbar-nav gap-md-1">
              <li className="nav-item">
                <NavLink className={linkClass} to="/" end>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={linkClass} to="/services">
                  Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={linkClass} to="/realisations">
                  Portfolio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={linkClass} to="/contact">
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={linkClass} to="/mentions-legales">
                  Mentions légales
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
