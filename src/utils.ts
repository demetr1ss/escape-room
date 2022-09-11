import { toast, Zoom } from 'react-toastify';

type showNotifyPropsType = {
  type: string;
  message: string;
}

const ToastType = {
  Error: 'error',
  Warn: 'warn',
} as const;

export const showNotify = (options: showNotifyPropsType): void => {
  switch(options.type) {
    case ToastType.Error:
      toast.error(options.message, {
        toastId: 1,
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2500,
        transition: Zoom,
        pauseOnHover: false,
      });
      break;
    case ToastType.Warn:
      toast.warn(options.message, {
        toastId: 2,
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2500,
        transition: Zoom,
        pauseOnHover: false,
      });
      break;
    default:
      throw new Error(`toast type "${options.type}" not exist`);
  }};
