import createAction from "../actionCreater";

export const setCurrentUser = (user) => {
  return createAction("SET_CURRENT_USER", user);
};
