import React from 'react';
import useSWR from 'swr';

const GITHUB_USER = `docgovtnz`;
const API_URL = `https://api.github.com/search/repositories?q=user%3A${GITHUB_USER}&sort=updated&order=desc`;
const CACHE_TIME = 24 * 60 * 60 * 1000;
const fetcher = async url => {
  const result = await fetch(url);

  if (!result.ok) {
    const error = new Error('An error occurred while fetching the data.');

    error.info = await result.json();
    error.status = result.status;
    throw error;
  }
  return result.json();
};

const Loader = () => (
  <div className="Loader">
    <span>Loading…</span>
  </div>
);

const Error = () => (
  <div className="Loader">
    <span>Error</span>
  </div>
);

const Repository = ({ repository }) => {
  return (
    <div className="feature col col--6">
      <div className="card">
        <div className="card__header">
          {repository.owner && <span className="owner text-muted">{repository.owner.login}</span>}
          <h2>
            <a href={repository.html_url}>{repository.name}</a>
          </h2>
        </div>
        <div className="card__body">
          <div className="description">
            {repository.description}
          </div>
          <div className="details">
            {repository.language && (
              <span className="badge badge--primary">{repository.language}</span>
            )}
            &nbsp;
            {repository.license && (
              <span className="badge badge--primary">{repository.license.spdx_id}</span>
            )}
          </div>
        </div>
        <div className="card__footer">
          <div className="button-group">
            {repository.html_url && (
              <a href={repository.html_url} className="button button--secondary">
                View Repository
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Repositories = ({ repositories }) => {
  return (
    <div className="Repositories">
      <div className="row">
        {repositories.items.map(repository => (
          <Repository key={repository.id} repository={repository} />
        ))}
      </div>
    </div>
  );
};

const GitHub = () => {
  const { data, error, isValidating } = useSWR(`${API_URL}`, fetcher, {
    dedupingInterval: CACHE_TIME,
    revalidateOnFocus: false,
  });

  if (isValidating) {
    return <Loader />;
  } else if (error) {
    return <Error />;
  } else if (data) {
    return <Repositories repositories={data} />;
  } else return null;
};

export default GitHub;
