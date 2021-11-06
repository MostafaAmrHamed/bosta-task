import { Address, Details } from './index';
import styles from './details.module.css';

type Props = {
  trackingNumber: string;
};
export const Shipment: React.FC<Props> = ({ trackingNumber }) => {
  return (
    <div className={styles.shipment}>
      <Details trackingNumber={trackingNumber} />
      <Address />
    </div>
  );
};
