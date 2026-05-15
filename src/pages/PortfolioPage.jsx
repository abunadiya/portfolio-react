import { projects } from '../data/projects';
import { Seo } from '../components/common/Seo';

const portfolioBanner = `${process.env.PUBLIC_URL}/images/banner.jpg`;

export function PortfolioPage() {
  return (
    <>
      <Seo
        title="Portfolio"
        description="Portfolio de John Doe : Fresh Food, Restaurant Akira, SEO, API, maquettes et plus."
      />
      <div
        className="services-banner w-100"
        style={{ backgroundImage: `url(${portfolioBanner})` }}
        role="img"
        aria-label="Bandeau décoratif"
      />
      <section className="py-5 bg-white">
        <div className="container text-center">
          <h1 className="mb-2">Portfolio</h1>
          <p className="lead text-secondary mb-3">Voici quelques-unes de mes réalisations</p>
          <div className="section-rule mx-auto mb-5" />
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 text-start">
            {projects.map((p) => (
              <div key={p.id} className="col">
                <article className="card h-100 shadow-sm border-0 overflow-hidden card-hoverable bg-white">
                  <img src={p.image} className="card-img-top" alt={p.title} width="640" height="360" />
                  <div className="card-body d-flex flex-column">
                    <h2 className="card-title h5">{p.title}</h2>
                    <p className="card-text text-secondary small flex-grow-1">{p.description}</p>
                    <a
                      href={p.url}
                      className="btn btn-primary btn-portfolio-lighten align-self-start"
                    >
                      Voir le site
                    </a>
                  </div>
                  <div className="card-footer small text-secondary bg-light border-0 py-3">
                    {p.tech}
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
