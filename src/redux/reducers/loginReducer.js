import initialState from "./initialState";
import * as type from "../actions/actionTypes";
import moment from "moment";

export default function loginReducer(state = initialState.login, action) {
  switch (action.type) {
    case type.LOGIN_USER_SUCCESS:
      return { ...action.login, loadedAt: moment() };
    case type.LOGOUT_USER_SUCCESS:
      return {};
    default:
      return state;
  }
}
