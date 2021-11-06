import React, { useState } from 'react';

import { HiSearchCircle } from 'react-icons/hi';
import { Shipment, Tracking } from '../index';

import styles from './track-shimpent.module.css';

export const TrackShipment = () => {
  const [trackNo, setTrackNo] = useState('');
  const [show, setShow] = useState(false);
  return (
    <div className={styles.track__page}>
      <div className={styles.search__section}>
        <p className="text-red-500 font-bold text-3xl text-right pt-2">تتبع شحنتك</p>
        <p className="font-bold pt-2 pb-4">اكتب رقم الشحنة وتابع شحنتك خطوة بخطوة</p>
        <div className={styles.search + ' flex justify-around'}>
          <HiSearchCircle
            className="text-4xl text-red-600 cursor-pointer"
            onClick={() => setShow(true)}
          />
          <div className="mb-4 col-span-3">
            <input
              className="appearance-none text-right w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="رقم الشحنة"
              onChange={(e) => {
                setTrackNo(e.target.value);
                setShow(false);
              }}
            ></input>
          </div>
        </div>
      </div>
      {show && (
        <div>
          <Tracking trackingNumber={trackNo} />
          <Shipment trackingNumber={trackNo} />
        </div>
      )}
    </div>
  );
};
