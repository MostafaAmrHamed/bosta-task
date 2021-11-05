import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { states } from '../tracking/handleStates';

import styles from './details.module.css';

type Items = {
  TransitEvents: { state: string; timestamp: string; hub?: string; reason?: string }[];
};
export const Details = () => {
  const [items, setItems] = useState<Items>();
  const [hub, setHub] = useState<any>('');
  useEffect(() => {
    axios.get(`https://tracking.bosta.co/shipments/track/7234258`).then((res) => {
      setItems(res.data);
    });
  }, []);
  useEffect(() => {
    if (items) {
      const firstHub = items.TransitEvents.find((element) => element.hub)?.hub;
      if (firstHub) {
        setHub(firstHub);
      }
    }
  }, [items]);

  return (
    <section className={styles.details}>
      <p className="font-bold text-lg p-2">تفاصيل الشحنة</p>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className="md:col-span-2">تفاصيل</p>
          <p>الوقت</p>
          <p>التاريح</p>
          <p>الفرع</p>
        </div>
        {items ? (
          <div>
            {items.TransitEvents.map((item, index) => {
              return (
                <div className={styles.info} key={index}>
                  <div className="md:col-span-2">
                    <p>{states(item.state).message}</p>
                    {item.reason && (
                      <p style={{ color: `${states(item.state).color}` }}>{item.reason}</p>
                    )}
                  </div>
                  <p>
                    {new Date(item.timestamp).toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </p>
                  <p>{new Date(item.timestamp).toLocaleDateString()}</p>
                  <p>{hub}</p>
                </div>
              );
            })}
          </div>
        ) : (
          'Loading'
        )}
      </div>
    </section>
  );
};
