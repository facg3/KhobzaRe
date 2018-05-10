import axios from 'axios';

import {
  REGISTER_START,
  REGISTER_FAIL,
  REGISTER_SUCCESS
} from '../constant/registerConstant';

const registerStart = () => ({
  type: REGISTER_START
});
const registerFail = error => {
  return {
    type: REGISTER_FAIL,
    payload: error
  };
};
const registerSuccess = userInfo => {
  return {
    type: REGISTER_SUCCESS,
    payload: userInfo
  };
};
export const fetchRegister = bodyFormData => dispatch => {
  dispatch(registerStart());
  axios
    .post('http://localhost:5000/register', bodyFormData)
    .then(res => dispatch(registerSuccess(res.data)))
    .catch(err => dispatch(registerFail(err)));
};
