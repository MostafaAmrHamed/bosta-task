import { Address, Details } from './index';
import styles from './details.module.css';

export const Shipment = () => {
  return (
    <div className={styles.shipment}>
      <Details />
      <Address />
    </div>
  );
};
