import { useState } from 'react';
import { Seo } from '../components/common/Seo';

const mapEmbedSrc =
  'https://maps.google.com/maps?q=40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon%2C%20France&output=embed';

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <Seo
        title="Contact"
        description="Contactez John Doe : formulaire, téléphone, courriel et carte à Lyon."
      />
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-4">
            <h1 className="mb-2">Contact</h1>
            <p className="lead text-secondary col-lg-8 mx-auto mb-3">
              Pour me contacter en vue d&apos;un entretien ou d&apos;une future collaboration,
              merci de remplir le formulaire de contact.
            </p>
            <div className="section-rule mx-auto" />
          </div>
          <div className="card shadow border-0">
            <div className="card-body p-4 p-lg-5">
              <div className="row g-5">
                <div className="col-lg-6">
                  <h2 className="h5 section-title-block">Formulaire de contact</h2>
                  {submitted ? (
                    <p className="alert alert-success mb-0" role="status">
                      Merci ! Ce formulaire est une démonstration front-end : branchez un backend ou
                      un service d&apos;envoi pour les vrais messages.
                    </p>
                  ) : (
                    <form onSubmit={handleSubmit} noValidate>
                      <div className="mb-3">
                        <label htmlFor="contact-name" className="form-label">
                          Votre nom <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="contact-name"
                          name="name"
                          required
                          autoComplete="name"
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="contact-email" className="form-label">
                          Votre adresse email <span className="text-danger">*</span>
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="contact-email"
                          name="email"
                          required
                          autoComplete="email"
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="contact-phone" className="form-label">
                          Votre numéro de téléphone <span className="text-danger">*</span>
                        </label>
                        <input
                          type="tel"
                          className="form-control"
                          id="contact-phone"
                          name="phone"
                          required
                          autoComplete="tel"
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="contact-subject" className="form-label">
                          Sujet <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="contact-subject"
                          name="subject"
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="contact-message" className="form-label">
                          Votre message <span className="text-danger">*</span>
                        </label>
                        <textarea
                          className="form-control"
                          id="contact-message"
                          name="message"
                          rows="5"
                          required
                        />
                      </div>
                      <div className="text-end">
                        <button type="submit" className="btn btn-primary btn-darken-hover">
                          Envoyer
                        </button>
                      </div>
                    </form>
                  )}
                </div>
                <div className="col-lg-6">
                  <h2 className="h5 section-title-block">Mes coordonnées</h2>
                  <address className="fst-normal text-secondary mb-4">
                    <strong className="text-dark">John Doe</strong>
                    <br />
                    <i className="bi bi-geo-alt text-primary me-1" aria-hidden="true" />
                    40 Rue Laure Diebold, 69009 Lyon, France
                    <br />
                    <i className="bi bi-telephone text-primary me-1" aria-hidden="true" />
                    <a href="tel:+331020304050" className="text-decoration-none text-secondary">
                      10 20 30 40 50
                    </a>
                    <br />
                    <i className="bi bi-envelope text-primary me-1" aria-hidden="true" />
                    <a href="mailto:john.doe@gmail.com" className="text-decoration-none">
                      john.doe@gmail.com
                    </a>
                  </address>
                  <div className="ratio ratio-4x3 rounded overflow-hidden shadow-sm border">
                    <iframe
                      src={mapEmbedSrc}
                      title="Carte — 40 Rue Laure Diebold, Lyon"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
