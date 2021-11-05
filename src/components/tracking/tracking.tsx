import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { states, reason } from './handleStates';
import styles from './tracking.module.css';

type Props = {
  trackingNumber: number;
};
type Items = {
  TrackingNumber: string;
  CurrentStatus: {
    state: string;
    timestamp: string;
    reason?: string;
  };
  PromisedDate?: string;
};

export const Tracking: React.FC<Props> = ({ trackingNumber }) => {
  const [items, setItems] = useState<Items>();
  useEffect(() => {
    axios
      .get(`https://tracking.bosta.co/shipments/track/${trackingNumber}`)
      .then((res) => setItems(res.data));
  }, [trackingNumber]);
  return (
    <div className={styles.tracking}>
      {items ? (
        <div className={styles.container}>
          <div className={styles.stats}>
            <div className="md:order-4">
              <p className={styles.header}>رقم الشحنة {items.TrackingNumber}</p>
              <p
                className={styles.info + ' text-xl'}
                style={{ color: `${states(items.CurrentStatus.state).color}` }}
              >
                {states(items.CurrentStatus.state).message}
              </p>
            </div>
            <div className="md:order-3">
              <p className={styles.header}>اخر تحديث</p>
              <p className={styles.info}>
                at {new Date(items.CurrentStatus.timestamp).toLocaleString()}{' '}
                {new Date(items.CurrentStatus.timestamp).toLocaleString('ar-EG-u-nu-latn', {
                  weekday: 'long',
                })}
              </p>
            </div>
            <div className="md:order-2">
              <p className={styles.header}>اسم التاجر</p>
              <p className={styles.info}>Amazon EG</p>
            </div>
            <div className="md:order-1">
              <p className={styles.header}>موعد التسليم خلال</p>
              <p className={styles.info}>
                {items.PromisedDate
                  ? new Date(items.PromisedDate).toLocaleString('ar-EG-u-nu-latn', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })
                  : new Date(items.CurrentStatus.timestamp).toLocaleString()}
              </p>
            </div>
          </div>

          <div className={styles.progress}>
            <div>
              <div className={styles.bar}>
                {states(items.CurrentStatus.state).state >= 4
                  ? states(items.CurrentStatus.state).tag
                  : states('FALSE').tag}
              </div>
              <p className={styles.title}>تم التسليم</p>
            </div>
            <div>
              <div className={styles.bar}>
                {states(items.CurrentStatus.state).state >= 3
                  ? states(items.CurrentStatus.state).tag
                  : states('FALSE').tag}
              </div>
              <p className={styles.title}>الشحنة خرجت للتسليم</p>
              <p style={{ color: `${reason(items.CurrentStatus.state).color}` }}>
                {items.CurrentStatus.reason}
              </p>
            </div>
            <div>
              <div className={styles.bar}>
                {states(items.CurrentStatus.state).state >= 2
                  ? states(items.CurrentStatus.state).tag
                  : states('FALSE').tag}
              </div>
              <p className={styles.title}>تم استلام الشحنة من التاجر</p>
            </div>
            <div>
              <div className={styles.bar}>
                {states(items.CurrentStatus.state).state >= 1
                  ? states(items.CurrentStatus.state).tag
                  : states('FALSE').tag}
              </div>
              <p className={styles.title}>تم انشاء الشحنة</p>
            </div>
          </div>
        </div>
      ) : (
        <h1>Loading</h1>
      )}
      {/* {textProgess.map((item, index) => {
        return (
          <div key={index}>
            <div className={styles.bar}>
              {states(items.CurrentStatus.state).state >= index
                ? states(items.CurrentStatus.state).tag
                : states('FALSE').tag}
            </div>
            <p className={styles.title}>{item}</p>
            {index === 1 && (
              <p style={{ color: `${reason(items.CurrentStatus.state).color}` }}>
                {items.CurrentStatus.reason}
              </p>
            )}
          </div>
        );
      })} */}
    </div>
  );
};
