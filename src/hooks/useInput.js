import { useReducer } from "react";

const initialInputState = {
  inputValue: "",
  wasTouched: false,
};

const inputStateReducer = (prevState, action) => {
  if (action.type === "INPUT_CHANGE") {
    return { inputValue: action.value, wasTouched: prevState.wasTouched };
  }
  if (action.type === "INPUT_BLUR") {
    return { inputValue: prevState.inputValue, wasTouched: true };
  }
  if (action.type === "RESET_INPUT") {
    return { inputValue: "", wasTouched: false };
  }

  return initialInputState;
};

const useInput = (validateValueFunc) => {
  const [inputState, dispatchAction] = useReducer(
    inputStateReducer,
    initialInputState
  );

  const isValueValid = validateValueFunc(inputState.inputValue);
  const isInputValid = !isValueValid && inputState.wasTouched;

  const inputChangeHandler = (event) => {
    dispatchAction({ type: "INPUT_CHANGE", value: event.target.value });
  };

  const inputLostFocusHandler = () => {
    dispatchAction({ type: "INPUT_BLUR" });
  };

  const resetValues = () => {
    dispatchAction({ type: "RESET_INPUT" });
  };

  return {
    value: inputState.inputValue,
    hasError: isInputValid,
    isValid: isValueValid,
    inputChangeHandler,
    inputLostFocusHandler,
    resetValues,
  };
};

export default useInput;
