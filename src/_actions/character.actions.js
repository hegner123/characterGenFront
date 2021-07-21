import { characterConstants } from "../_constants";
import { characterService } from "../_services";
import { history } from "../_helpers";

export const characterActions = {
  generateCharacter,
};

function generateCharacter() {
  return (dispatch) => {
    characterService.generateCharacter().then(
      (character) => {
        dispatch(success(character));
      },
      (error) => {
        dispatch(failure(error.toString()));
      }
    );
  };
  function success(success) {
    console.log(success);
  }
  function failure(fail) {
    console.log(fail);
  }
}
