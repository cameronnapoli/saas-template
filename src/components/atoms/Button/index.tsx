import { CircularProgress } from '@mui/material';
import classNames from 'classnames';
import React from 'react';

import styles from './styles.module.scss';

type HTMLButtonProps = Omit<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, 'size'>;

interface Props extends React.PropsWithChildren, HTMLButtonProps {
  href?: string;
  color?: 'primary';
  size?: 'large' | 'small';
  fullWidth?: boolean;
  loading?: boolean;
}

const Button: React.FunctionComponent<Props> = ({
  href,
  className,
  color,
  size,
  fullWidth,
  loading,
  children,
  ...props
}) => {
  let branches = children;
  if (loading) {
    branches = (
      <CircularProgress color="inherit" size={24} style={{ marginBottom: -6, marginTop: 2 }} />
    );
  }

  return (
    <a href={href}>
      <button
        {...props}
        className={classNames(
          styles.root,
          styles[`size-${size || 'large'}`],
          styles[`color-${color || 'primary'}`],
          fullWidth && styles.fullWidth,
          className,
        )}
      >
        {branches}
      </button>
    </a>
  );
};

export default Button;
