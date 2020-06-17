import * as types from './mutation-types';

export default {
  [types.SET_USER](state: any, parameter: any) {
    state.user = parameter;
  },
  [types.SET_CONFIG](state: any, parameter: any) {
    state.config = parameter;
  },
};
