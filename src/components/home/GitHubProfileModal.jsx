function formatDate(iso) {
  if (!iso) return '—';
  try {
    return new Date(iso).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  } catch {
    return '—';
  }
}

export function GitHubProfileModal({ user, error, loading }) {
  return (
    <div
      className="modal fade"
      id="githubProfileModal"
      tabIndex="-1"
      aria-labelledby="githubProfileModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          <div className="modal-header bg-dark text-white border-secondary">
            <h2 className="modal-title h5" id="githubProfileModalLabel">
              Mon profil GitHub
            </h2>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Fermer"
            />
          </div>
          <div className="modal-body">
            {loading && (
              <div className="text-center py-4" role="status">
                <div className="spinner-border text-primary" aria-hidden="true" />
                <p className="mt-2 mb-0 small text-muted">Chargement du profil…</p>
              </div>
            )}
            {!loading && error && (
              <p className="text-danger mb-0">
                Impossible de récupérer les données GitHub pour le moment. Réessayez plus tard ou
                consultez directement le profil sur GitHub.
              </p>
            )}
            {!loading && !error && user && (
              <div className="row g-4 align-items-start">
                <div className="col-sm-4 text-center">
                  <img
                    src={user.avatar_url}
                    alt={`Avatar du compte GitHub ${user.login}`}
                    className="img-fluid rounded-circle shadow-sm"
                    width="180"
                    height="180"
                  />
                </div>
                <div className="col-sm-8">
                  <p className="h4 mb-1">
                    <i className="bi bi-github me-2" aria-hidden="true" />
                    {user.name || user.login}
                  </p>
                  <p className="text-muted mb-2">@{user.login}</p>
                  {user.bio && <p className="mb-3">{user.bio}</p>}
                  <ul className="list-unstyled small mb-0">
                    <li>
                      <i className="bi bi-folder2-open me-1" aria-hidden="true" />
                      <strong>Dépôts :</strong> {user.public_repos ?? '—'}
                    </li>
                    <li>
                      <i className="bi bi-people me-1" aria-hidden="true" />
                      <strong>Abonnés :</strong> {user.followers ?? '—'}
                    </li>
                    <li>
                      <i className="bi bi-person-plus me-1" aria-hidden="true" />
                      <strong>Abonnements :</strong> {user.following ?? '—'}
                    </li>
                    {user.location && (
                      <li>
                        <strong>Localisation :</strong> {user.location}
                      </li>
                    )}
                    {user.blog && (
                      <li>
                        <strong>Site :</strong>{' '}
                        <a
                          href={
                            user.blog.startsWith('http') ? user.blog : `https://${user.blog}`
                          }
                          rel="noopener noreferrer"
                        >
                          {user.blog}
                        </a>
                      </li>
                    )}
                    <li>
                      <strong>Membre depuis :</strong> {formatDate(user.created_at)}
                    </li>
                  </ul>
                  <a
                    className="btn btn-primary btn-darken-hover mt-3"
                    href={user.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Voir sur GitHub
                  </a>
                </div>
              </div>
            )}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
              Fermer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
