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

export interface AirInterface {
  name: string,
  value: string
}

export interface ForecastInterface {
  date: string,
  max_temp_c: number,
  min_temp_c: number,
  daily_chance_of_rain: number,
  condition: {
    text: string,
    icon: string
  },
  wind: number,
  uv: number,
  humidity: number,
  sun_rise: string,
  sun_set: string
}