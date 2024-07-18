import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Step by step',
    Svg: require('@site/static/img/step-by-step.svg').default,
    description: (
      <>
        This site contains step-by-step guidance for configurations that are not listed on <a href="https://learn.microsoft.com">learn.microsoft.com</a>
      </>
    ),
  },
  {
    title: 'Sometimes it can be hard',
    Svg: require('@site/static/img/lost.svg').default,
    description: (
      <>
        To find where a specific configuration is located in etc. Microsoft Entra, but this is not a problem anymore.
        Here on this site you will find various kind of step-by-step guides that are not listed on <a href="https://learn.microsoft.com">learn.microsoft.com</a>
      </>
    ),
  },
  {
    title: 'Are we missing a specific guideline?',
    Svg: require('@site/static/img/thinking.svg').default,
    description: (
      <>
        It takes some time to write these documents, but we are doing our best to keep up
        and have a continous flow of new step-by-step guides.
        Feel free to contribute on this project and help creating guides!
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
