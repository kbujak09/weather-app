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
  location: {
    name: string,
  },
  current: {
    temp_c: number,
    condition: {
      icon: string,
    },
  },
  forecast: {
    forecastday: [
      {
        day: {
          daily_chance_of_rain: number 
        }
      }
    ]
  }
};
