import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store';

export interface WeatherState {
  value: string,
  lastQuery: string[]
}

const initialState: WeatherState = {
  value: '',
  lastQuery: [],
}

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    changeQuery: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    },
    changeLastQuery:(state, action: PayloadAction<string>) => {
      if (state.lastQuery.includes(action.payload)) return;
      state.lastQuery.push(action.payload)
    },
    removeLastQuery:(state, action: PayloadAction<string>) => {
      console.log(1);
      state.lastQuery = state.lastQuery.filter( el => el !== action.payload )
    }
  },
})


export const selectWeather = (state: RootState) => state.weather;
export const { changeQuery, changeLastQuery,removeLastQuery} = weatherSlice.actions

export default weatherSlice.reducer