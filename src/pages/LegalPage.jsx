import { Seo } from '../components/common/Seo';

export function LegalPage() {
  return (
    <>
      <Seo
        title="Mentions légales"
        description="Informations légales du site portfolio de John Doe : éditeur, hébergeur et crédits médias."
        noIndex
      />
      <section className="py-5 bg-white">
        <div className="container col-lg-9 text-center">
          <h1 className="mb-2">Mentions légales</h1>
          <div className="section-rule mx-auto mb-5" />
          <div className="accordion text-start" id="legalAccordion">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingEditor">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseEditor"
                  aria-expanded="true"
                  aria-controls="collapseEditor"
                >
                  Éditeur du site
                </button>
              </h2>
              <div
                id="collapseEditor"
                className="accordion-collapse collapse show"
                aria-labelledby="headingEditor"
                data-bs-parent="#legalAccordion"
              >
                <div className="accordion-body">
                  <p className="mb-0">
                    <strong>John Doe</strong>
                    <br />
                    <span className="text-muted">40 Rue Laure Diebold, 69009 Lyon, France</span>
                    <br />
                    <i className="bi bi-telephone me-1" aria-hidden="true" />
                    <a href="tel:+331020304050">10 20 30 40 50</a>
                    <br />
                    <i className="bi bi-envelope me-1" aria-hidden="true" />
                    <a href="mailto:john.doe@gmail.com">john.doe@gmail.com</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingHost">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseHost"
                  aria-expanded="false"
                  aria-controls="collapseHost"
                >
                  Hébergeur
                </button>
              </h2>
              <div
                id="collapseHost"
                className="accordion-collapse collapse"
                aria-labelledby="headingHost"
                data-bs-parent="#legalAccordion"
              >
                <div className="accordion-body">
                  <p className="mb-2">
                    <strong>alwaysdata</strong>
                    <br />
                    91 rue du Faubourg Saint Honoré — 75008 Paris
                    <br />
                    <a href="https://www.alwaysdata.com/fr/" rel="noopener noreferrer">
                      www.alwaysdata.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingCredits">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseCredits"
                  aria-expanded="false"
                  aria-controls="collapseCredits"
                >
                  Crédits
                </button>
              </h2>
              <div
                id="collapseCredits"
                className="accordion-collapse collapse"
                aria-labelledby="headingCredits"
                data-bs-parent="#legalAccordion"
              >
                <div className="accordion-body">
                  <p>
                    Ce site a été réalisé par <strong>John Doe</strong>, étudiant au Centre Européen
                    de formation (CEF).
                  </p>
                  <ul className="mb-0">
                    <li>
                      Les images utilisées sur ce site sont libres de droits et issues du site{' '}
                      <a href="https://pixabay.com/" rel="noopener noreferrer">
                        Pixabay
                      </a>
                      .
                    </li>
                    <li>
                      Favicon par{' '}
                      <a
                        href="https://www.flaticon.com/fr/icone-gratuite/john-doe_709699"
                        rel="noopener noreferrer"
                      >
                        Flaticon
                      </a>
                      .
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
