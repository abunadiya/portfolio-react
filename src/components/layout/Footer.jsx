import { Link } from 'react-router-dom';
import { projects } from '../../data/projects';

const social = [
  {
    href: 'https://github.com/github-johndoe',
    label: 'GitHub',
    icon: 'bi-github',
  },
  {
    href: 'https://twitter.com/github',
    label: 'Twitter',
    icon: 'bi-twitter-x',
  },
  {
    href: 'https://www.linkedin.com/',
    label: 'LinkedIn',
    icon: 'bi-linkedin',
  },
];

export function Footer() {
  return (
    <footer className="site-footer bg-dark text-white-50 mt-auto py-5">
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4 text-center text-md-start">
          <div className="col">
            <h2 className="h5 text-white mb-3">John Doe</h2>
            <address className="small fst-normal mb-3">
              40 Rue Laure Diebold
              <br />
              69009 Lyon, France
              <br />
              <a className="link-light text-decoration-none" href="tel:+331020304050">
                10 20 30 40 50
              </a>
              <br />
              <a
                className="link-light text-decoration-none"
                href="mailto:john.doe@gmail.com"
              >
                john.doe@gmail.com
              </a>
            </address>
            <div className="d-flex justify-content-center justify-content-md-start gap-3">
              {social.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="social-link fs-4"
                  aria-label={item.label}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  <i className={`bi ${item.icon}`} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="col footer-nav">
            <h2 className="h5 text-white mb-3">Liens utiles</h2>
            <ul className="list-unstyled small mb-0">
              <li className="mb-2">
                <Link className="link-light text-decoration-none" to="/">
                  Accueil
                </Link>
              </li>
              <li className="mb-2">
                <Link className="link-light text-decoration-none" to="/services">
                  Services
                </Link>
              </li>
              <li className="mb-2">
                <Link className="link-light text-decoration-none" to="/realisations">
                  Portfolio
                </Link>
              </li>
              <li className="mb-2">
                <Link className="link-light text-decoration-none" to="/contact">
                  Me contacter
                </Link>
              </li>
              <li>
                <Link className="link-light text-decoration-none" to="/mentions-legales">
                  Mentions légales
                </Link>
              </li>
            </ul>
          </div>
          <div className="col footer-nav">
            <h2 className="h5 text-white mb-3">Mes dernières réalisations</h2>
            <ul className="list-unstyled small mb-0">
              {projects.map((p) => (
                <li key={p.id} className="mb-2">
                  <Link className="link-light text-decoration-none" to="/realisations">
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="small text-center border-top border-secondary pt-4 mt-4 mb-0">
          © {new Date().getFullYear()} John Doe — Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
