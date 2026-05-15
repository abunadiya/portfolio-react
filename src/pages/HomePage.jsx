import { useEffect, useState } from 'react';
import { Hero } from '../components/home/Hero';
import { AboutSkills } from '../components/home/AboutSkills';
import { GitHubProfileModal } from '../components/home/GitHubProfileModal';
import { Seo } from '../components/common/Seo';

const GITHUB_USER = 'github-johndoe';

let githubProfileFetchStarted = false;

export function HomePage() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (githubProfileFetchStarted) {
      return;
    }
    githubProfileFetchStarted = true;

    fetch(`https://api.github.com/users/${GITHUB_USER}`, {
      headers: { Accept: 'application/vnd.github+json' },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('GitHub API error');
        }
        return res.json();
      })
      .then((data) => {
        setUser(data);
        setError(false);
      })
      .catch(() => {
        setError(true);
        setUser(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Seo
        title="Accueil"
        description="John Doe, développeur web en formation au CEF — portfolio, services et contact pour une alternance en développement web."
      />
      <Hero />
      <AboutSkills />
      <GitHubProfileModal user={user} error={error} loading={loading} />
    </>
  );
}
