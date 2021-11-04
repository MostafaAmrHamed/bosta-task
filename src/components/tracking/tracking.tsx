import React from 'react';

import styles from './tracking.module.css';

export const Tracking = () => {
  return (
    <div className={styles.tracking}>
      <div className={styles.container}>
        <div className={styles.stats}>
          <div className={styles.header}>
            <p>header 1</p>
            <p>header 2</p>
            <p>header 3</p>
            <p>header 4</p>
          </div>
          <div className={styles.info}>
            <p>header 1</p>
            <p>header 2</p>
            <p>header 3</p>
            <p>header 4</p>
          </div>
        </div>
        <div className={styles.progress}>
          <div>
            <p>header 1</p>
            <p>header 2</p>
            <p>header 3</p>
            <p>header 4</p>
          </div>
        </div>
      </div>
    </div>
  );
};
