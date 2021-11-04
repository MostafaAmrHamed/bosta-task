import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { AiOutlineCheckCircle, AiFillCheckCircle } from 'react-icons/ai';
import styles from './tracking.module.css';

type Items = {
  TrackingNumber: string;
  CurrentStatus: {
    state: string;
    timestamp: string;
  };
  PromisedDate?: string;
};
const states = (status: string) => {
  // const resColor = reason();
  switch (status) {
    case 'TICKET_CREATED' || 'NOT_YET_SHIPPED':
      return {
        message: 'تم انشاء الشحنة',
        tag: <AiFillCheckCircle fill="rgb(02, 173, 33)" />,
        color: 'rgb(0, 173, 33)',
        state: 1,
      };
    case 'PACKAGE_RECEIVED':
      return {
        message: 'تم استلام الشحنة من التاجر',
        tag: <AiFillCheckCircle fill="rgb(02, 173, 33)" />,
        color: 'rgb(0, 173, 33)',
        state: 2,
      };
    case 'OUT_FOR_DELIVERY' || 'IN_TRANSIT':
      return {
        message: 'الشحنة خرجت للتسليم',
        tag: <AiFillCheckCircle fill="rgb(02, 173, 33)" />,
        color: 'rgb(0, 173, 33)',
        state: 3,
      };
    case 'DELIVERED' || 'DELIVERED_TO_SENDER':
      return {
        message: 'تم تسليم الشحنة',
        tag: <AiFillCheckCircle fill="rgb(0, 173, 33)" />,
        color: 'rgb(0, 173, 33)',
        state: 4,
      };
    default:
      return {
        tag: <AiOutlineCheckCircle fill="rgb(192, 192, 192)" />,
        color: 'rgb(0, 173, 33)',
        state: 1,
      };
  }
};
export const Tracking = () => {
  const [items, setItems] = useState<Items>();
  useEffect(() => {
    axios
      .get('https://tracking.bosta.co/shipments/track/1094442')
      .then((res) => setItems(res.data));
  }, []);
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
    </div>
  );
};
