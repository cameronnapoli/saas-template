import { CircularProgress } from '@mui/material';
import classNames from 'classnames';
import React from 'react';

import styles from './styles.module.scss';

interface Props {
  fillContainer?: boolean;
  light?: boolean;
  size?: number;
}

const Loading: React.FunctionComponent<Props> = ({
  fillContainer = true,
  light = false,
  size,
}) => {
  return (
    <div className={classNames(light ? styles.light : styles.dark, fillContainer ? styles.fill : undefined)}>
      <CircularProgress size={size} color="inherit" />
    </div>
  );
};

export default Loading;
