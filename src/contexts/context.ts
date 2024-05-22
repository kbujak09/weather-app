import { createContext, Dispatch, SetStateAction } from "react";

export interface InputInterface {
  input: string,
  setInput: Dispatch<SetStateAction<string>>
}

const defaultInputState = {
  input: '',
  setInput: (input: string) => {}
};

const Context = createContext(defaultInputState);

export { Context };