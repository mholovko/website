import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {FaQuestion} from 'react-icons/fa';
import {FiBook, FiEdit3, FiGithub} from 'react-icons/fi';

import Headline from '../Headline';
import styles from './styles.module.scss';

const data = [
  {
    href: 'docs/faq',
    icon: <FaQuestion size="48" />,
    description: <>Frequently Asked Questions</>,
  },
  {
    href: 'blog',
    icon: <FiEdit3 size="48" />,
    description: <>Explore our blog for news and tips</>,
  },
  {
    href: 'docs',
    icon: <FiBook size="48" />,
    title: <>Documentation</>,
    description: (
      <>Check our documentation to get your devices up and running in minutes</>
    ),
  },
  {
    href: 'https://github.com/runletapp/runlet',
    icon: <FiGithub size="48" />,
    title: <>Contribute</>,
    description: (
      <>Help us improving by submitting bugs and feature requests on GitHub</>
    ),
  },
];

export default Resources;

function Resource({href, icon, title, description}) {
  return (
    <Link className={clsx('card', styles.card)} to={href}>
      <div className="card__header">
        {icon && <div className="card__icon">{icon}</div>}
        {title && <h3>{title}</h3>}
      </div>
      {description && (
        <div className="card__body">
          <p>{description}</p>
        </div>
      )}
    </Link>
  );
}

function Resources() {
  return (
    <>
      {data && data.length > 0 && (
        <section id="resouces" className={styles.resources}>
          <div className="container">
            <Headline
              category="Resources"
              title="Browse our resources to get started with Runlet"
            />

            <div className="row">
              {data[0] && data[1] && (
                <div className={clsx('col', styles.resource)}>
                  <Resource key={0} {...data[0]} />
                  <Resource key={1} {...data[1]} />
                </div>
              )}

              {data[2] && (
                <div className={clsx('col', styles.resource)}>
                  <Resource key={2} {...data[2]} />
                </div>
              )}

              {data[3] && (
                <div className={clsx('col', styles.resource)}>
                  <Resource key={3} {...data[3]} />
                </div>
              )}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
