import { createContext, Dispatch, SetStateAction } from "react";
import { WeatherData } from "../@types/types";

export interface InputInterface {
  input: string,
  setInput: Dispatch<SetStateAction<string>>,
  data: WeatherData | object,
}

const defaultInputState = {
  input: '',
  setInput: (input: string) => {},
  data: {},
};

const Context = createContext(defaultInputState);

export { Context };