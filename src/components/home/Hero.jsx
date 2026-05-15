const heroImage = `${process.env.PUBLIC_URL}/images/hero-bg.jpg`;

export function Hero() {
  return (
    <section
      className="hero-section d-flex align-items-center justify-content-center text-center text-white position-relative"
      style={{ backgroundImage: `url(${heroImage})` }}
      aria-labelledby="hero-title"
    >
      <div className="hero-overlay position-absolute top-0 start-0 w-100 h-100" />
      <div className="container position-relative py-5">
        <h1 id="hero-title" className="display-4 fw-semibold mb-3">
          Bonjour, je suis John Doe
        </h1>
        <h2 className="h4 fw-normal mb-4 text-white-50">Développeur web full stack</h2>
        <button
          type="button"
          className="btn btn-danger btn-lg btn-darken-hover px-4"
          data-bs-toggle="modal"
          data-bs-target="#githubProfileModal"
        >
          En savoir plus
        </button>
      </div>
    </section>
  );
}
