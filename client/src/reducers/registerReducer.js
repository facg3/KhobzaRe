import {
  REGISTER_START,
  REGISTER_FAIL,
  REGISTER_SUCCESS
} from '../constant/registerConstant';

const initialState = {
  userInfo: {},
  isFetching: false,
  error: undefined
};

const Register = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_START: {
      return {
        ...state,
        isFetching: true
      };
    }
    case REGISTER_FAIL: {
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    }
    case REGISTER_SUCCESS: {
      const userInfo = action.payload;
      return {
        ...state,
        isFetching: false,
        error: undefined,
        userInfo
      };
    }
    default:
      return state;
  }
};

export default Register;
