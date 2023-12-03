import { actiontypes } from "../contants/actiontypes";

export const setdesiginationform = sh => {
//   console.log("action" + sh);
  return {
    type: actiontypes.showform,
    payload: sh
  };
};
