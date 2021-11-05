import styles from './details.module.css';

export const Address = () => {
  return (
    <div className={styles.address}>
      <p className="font-bold text-lg text-right p-2">عنوان الشحنة</p>
      <p className={styles.address__detail}>
        امبابة شارع طلعت حرب مدينة العمل بجوار البرنس منزل 17 بلوك
      </p>
      <div className={styles.support}>
        <p className={styles.title}>هل يوجد مشكلة فى شحنتك؟</p>
        <button className={styles.btn}> ابلاغ عن مشكلة</button>
      </div>
    </div>
  );
};
