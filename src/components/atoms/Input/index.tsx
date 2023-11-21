import classNames from 'classnames';
import React from 'react';

import styles from './styles.module.scss';

interface Props extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  disabled?: boolean;
  value?: string;
  fullWidth?: boolean;
  size?: 'large' | 'small';
  light?: boolean;
}

const Input: React.FunctionComponent<Props> = ({
  disabled,
  value,
  className,
  fullWidth,
  size = 'large',
  light = true,
  ...props
}) => {
  return (
    <input
      className={classNames(
        styles.root,
        className,
        styles[`size-${size}`],
        light ? styles.light : styles.dark,
        fullWidth ? 'w-full' : undefined,
      )}
      type="text"
      disabled={disabled}
      value={value}
      {...props}
    />
  );
};

export default Input;
