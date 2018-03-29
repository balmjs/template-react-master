import { STATUS_OK } from '../config/constants';

export const callback = ({ code, data, message }) => {
  let result = {
    success: false,
    data
  };

  if (code === STATUS_OK) {
    result.success = true;
  } else {
    alert(message);
  }

  return result;
};
