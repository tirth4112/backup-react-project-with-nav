// Desigination-showform.js
import { actiontypes } from "../contants/actiontypes";

const initialState = {
  showform: false
};

export const showForm = (state = initialState, { type, payload }) => {
  switch (type) {
    case actiontypes.showform:
      return { ...state, showform: payload };
    default:
      return state;
  }
};
