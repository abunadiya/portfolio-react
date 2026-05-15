import { services } from '../data/services';
import { Seo } from '../components/common/Seo';

const servicesBanner = `${process.env.PUBLIC_URL}/images/banner.jpg`;

export function ServicesPage() {
  return (
    <>
      <Seo
        title="Services"
        description="UX design, développement web et référencement — John Doe, développeur web."
      />
      <div
        className="services-banner w-100"
        style={{ backgroundImage: `url(${servicesBanner})` }}
        role="img"
        aria-label="Bandeau décoratif"
      />
      <section className="py-5 bg-white">
        <div className="container text-center">
          <h1 className="mb-2">Mon offre de services</h1>
          <p className="lead text-secondary mb-3">
            Voici les prestations sur lesquelles je peux intervenir
          </p>
          <div className="section-rule mx-auto mb-5" />
          <div className="row row-cols-1 row-cols-md-3 g-4 text-start">
            {services.map((s) => (
              <div key={s.id} className="col">
                <article className="card h-100 shadow-sm border card-hoverable bg-white">
                  <div className="card-body">
                    <div className="display-6 text-primary mb-3" aria-hidden="true">
                      <i className={`bi ${s.icon}`} />
                    </div>
                    <h2 className="card-title h5">{s.title}</h2>
                    <p className="card-text text-secondary small mb-0">{s.description}</p>
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
