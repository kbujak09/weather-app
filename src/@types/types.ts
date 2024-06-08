/// <reference types="react-scripts" />

import { Dispatch, SetStateAction } from 'react';

declare namespace NodeJS {
  interface ProcessEnv {
    REACT_APP_API_KEY: string;
  }
}

export interface InputInterface {
  input: string,
  setInput: Dispatch<SetStateAction<string>>,
}

export interface CurrentInterface {
    name: string,
    temp_c: number,
    icon: string,
    daily_chance_of_rain: number 
};

export interface HourInterface {
  time: string,
  icon: string,
  temp_c: number
}
