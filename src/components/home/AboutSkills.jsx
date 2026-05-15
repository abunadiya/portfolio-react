/** Photo « À propos » : public/images/john-doe-about.jpg */
const aboutPhoto = `${process.env.PUBLIC_URL}/images/john-doe-about.jpg`;

const skills = [
  { label: 'HTML5', value: 90, color: 'bg-danger' },
  { label: 'CSS3', value: 80, color: 'bg-info' },
  { label: 'JAVASCRIPT', value: 70, color: 'bg-warning' },
  { label: 'PHP', value: 60, color: 'bg-success' },
  { label: 'REACT', value: 50, color: 'bg-primary' },
];

export function AboutSkills() {
  return (
    <section className="py-5 bg-white" aria-labelledby="about-title">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6">
            <h2 id="about-title" className="section-title mb-4">
              À propos
            </h2>
            <div className="text-center text-lg-start mb-4">
              <img
                src={aboutPhoto}
                alt="Portrait de John Doe"
                className="img-fluid rounded shadow-sm"
                width="480"
                height="320"
              />
            </div>
            <p className="text-secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in nibh vestibulum,
              viverra odio vitae, vehicula velit. Suspendisse auctor, nibh non malesuada ultricies,
              ligula turpis convallis diam, id egestas quam nisi vel turpis.
            </p>
            <p className="text-secondary">
              Integer auctor velit vel est fermentum laoreet. Donec in faucibus risus, a ultrices
              nibh cursus et. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae.
            </p>
            <p className="text-secondary mb-0">
              Mauris aliquet nibh vel augue tempus, nec eleifend leo consequat. Vivamus non est
              feugiat, bibendum ligula vitae, tempus velit.
            </p>
          </div>
          <div className="col-lg-6">
            <h2 className="section-title mb-4" id="skills-title">
              Mes compétences
            </h2>
            <ul className="list-unstyled" aria-labelledby="skills-title">
              {skills.map((s) => (
                <li key={s.label} className="mb-3">
                  <div className="d-flex justify-content-between small mb-1 text-uppercase fw-semibold">
                    <span>{s.label}</span>
                    <span>{s.value} %</span>
                  </div>
                  <div
                    className="progress"
                    role="progressbar"
                    aria-valuenow={s.value}
                    aria-valuemin="0"
                    aria-valuemax="100"
                    aria-label={s.label}
                  >
                    <div
                      className={`progress-bar ${s.color}`}
                      style={{ width: `${s.value}%` }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
