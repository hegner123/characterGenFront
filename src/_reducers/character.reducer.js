import { characterConstants } from "../_constants";

export function characterGenerator(state = {}, action) {
  switch (action.type) {
    case characterConstants.GENERATE_REQUEST:
      return { request: true };
    case characterConstants.GENERATE_SUCCESS:
      return {};
    case characterConstants.GENERATE_FAILURE:
      return {};
    default:
      return state;
  }
}
