import { AiOutlineCheckCircle, AiFillCheckCircle } from 'react-icons/ai';

export const reason = (state: string) => {
  switch (state) {
    case 'WAITING_FOR_CUSTOMER_ACTION':
      return {
        resMessage: 'لم يتم تسليم الشحنة',
        color: 'rgb(225, 177, 43)',
      };
    case 'CANCLED':
      return {
        resMessage: 'تم إلغاء الشحنة',
        color: 'rgb(255, 7, 27)',
      };
    default:
      return {
        resMessage: '',
        color: '',
      };
  }
};
export const states = (status: string) => {
  const resState = reason(status);
  switch (status) {
    case 'TICKET_CREATED':
    case 'NOT_YET_SHIPPED':
      return {
        message: resState.resMessage || 'تم انشاء الشحنة',
        tag: <AiFillCheckCircle fill={resState.color || 'rgb(0, 173, 33)'} />,
        color: resState.color || 'rgb(110, 180, 110)',
        state: 1,
      };
    case 'PACKAGE_RECEIVED':
      return {
        message: resState.resMessage || 'تم استلام الشحنة من التاجر',
        tag: <AiFillCheckCircle fill={resState.color || 'rgb(0, 173, 33)'} />,
        color: resState.color || 'rgb(110, 180, 110)',
        state: 2,
      };
    case 'OUT_FOR_DELIVERY':
    case 'IN_TRANSIT':
    case 'WAITING_FOR_CUSTOMER_ACTION':
      return {
        message: resState.resMessage || 'الشحنة خرجت للتسليم',
        tag: <AiFillCheckCircle fill={resState.color || 'rgb(0, 173, 33)'} />,
        color: resState.color || 'rgb(110, 180, 110)',
        state: 3,
      };
    case 'DELIVERED':
    case 'DELIVERED_TO_SENDER':
    case 'RECEIVED_DELIVERY_LOCATION':
      return {
        message: 'تم تسليم الشحنة',
        tag: <AiFillCheckCircle fill={resState.color || 'rgb(0, 173, 33)'} />,
        color: 'rgb(0, 173, 33)',
        state: 4,
      };
    default:
      return {
        tag: <AiOutlineCheckCircle fill="rgb(235, 235, 235)" />,
        color: 'rgb(02, 173, 33)',
        state: 1,
      };
  }
};
