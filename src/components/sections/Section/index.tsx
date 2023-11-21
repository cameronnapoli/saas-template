import classNames from 'classnames';
import React from 'react';

import styles from './styles.module.scss';

interface Props extends React.PropsWithChildren {
  backgroundColor?: 'transparent' | 'primary';
  greenTriangle?: boolean;
  maxWidth?: 'normal' | 'small';
  size?: 'normal' | 'small';
  id?: string;
  heroSection?: boolean;
}

const Section: React.FunctionComponent<Props> = ({
  backgroundColor,
  greenTriangle,
  maxWidth,
  size,
  id,
  heroSection,
  children,
}) => {
  const small = size === 'small';
  return (
    <div
      className={classNames(
        greenTriangle ? styles.greenTriangle : null,
      )}
      id={id}
    >
      <div
        className={classNames(
          styles.root,
          (backgroundColor && backgroundColor !== 'transparent') ? styles[`bg-${backgroundColor}`] : null,
          heroSection ? styles.heroSection : null,
          small ? styles.small : styles.normal,
        )}
      >
        <div
          className={classNames(
            styles.rootInner,
            maxWidth === 'small' ? styles.rootSmall : styles.rootNormal,
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Section;
