import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Policies and Documentation',
    imageUrl: 'img/undraw_at_work.svg',
    description: (
      <>
        Our approach to open source, and technical notes about our projects.
      </>
    ),
    buttonText: 'View Policies',
    buttonUrl: '/docs',
  },
  {
    title: 'Code Repositories',
    imageUrl: 'img/undraw_collecting.svg',
    description: (
      <>
        The source code for our open source projects.
      </>
    ),
    buttonText: 'Browse Repositories',
    buttonUrl: '/repositories',
  },
  {
    title: 'Open Data',
    imageUrl: 'img/undraw_environmental_study.svg',
    description: (
      <>
        Our open data services, APIs and repositories.
      </>
    ),
    buttonText: 'Discover Open Data',
    buttonUrl: '/data',
  },
];

function Feature({imageUrl, title, description, buttonText, buttonUrl}) {
  const imgUrl = useBaseUrl(imageUrl);
  const aUrl = useBaseUrl(buttonUrl);
  return (
    <div className={clsx('feature col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={aUrl} className="button button--block button--secondary">{buttonText}</a>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Promoting Open Source and Open Data at the Department of Conservation">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <div className="hero__container">
            <h1 className="hero__title">{siteConfig.title}</h1>
            <p className="hero__subtitle">{siteConfig.tagline}</p>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
