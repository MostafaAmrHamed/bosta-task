import React from 'react';

import styles from './tracking.module.css';

export const Tracking = () => {
  return (
    <div className={styles.tracking}>
      <div className={styles.container}>
        <div className={styles.stats}>
          <div className={styles.header} dir="ltr">
            <p>موعد التسليم خلال</p>
            <p>اسم التاجر</p>
            <p>اخر تحديث</p>
            <p>رقم الشحنة 41654</p>
          </div>
          <div className={styles.info}>
            <p>header 1</p>
            <p>header 2</p>
            <p>header 3</p>
            <p>header 4</p>
          </div>
        </div>
        <div className={styles.progress}>
          <div className={styles.track1}>T</div>
          <div className={styles.track2}>T</div>
          <div className={styles.track3}>T</div>
          <div className={styles.track4}>T</div>
        </div>
      </div>
    </div>
  );
};
