import React from 'react';

import styles from './styles.module.scss';

interface Props {
  barColor: string;
  backgroundColor: string;
  height: number;
  progress: number; // 0 - 100
}

const ProgressBar: React.FunctionComponent<Props> = ({
  barColor,
  backgroundColor,
  height,
  progress,
}) => {
  const progressBarStyle = {
    width: `${progress}%`,
    backgroundColor: barColor,
  };

  const containerStyle = {
    backgroundColor: backgroundColor,
    height: `${height}px`,
  };

  return (
    <div className={styles.container} style={containerStyle}>
      <div className={styles.bar} style={progressBarStyle}></div>
    </div>
  );
};

export default ProgressBar;
