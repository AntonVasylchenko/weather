import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
export const fetchData = createAsyncThunk("data/fetchDataStatus", async (querty: string, thunkAPI) => {
  try {
    const path = `https://api.openweathermap.org/data/2.5/forecast?q=${querty}&units=metric&appid=415bb8fbf5c7e3646f9f87fa83247a1d`;
    const response = await fetch(path);
    const status = response.status;
    if (status === 404) {
      return thunkAPI.rejectWithValue("");
    }
    const data = await response.json();
    return thunkAPI.fulfillWithValue(data);
  } catch (error) {
    console.log(error);
  }
});

export interface elementList {
  clouds: {
    all: string;
  };
  dt: number;
  dt_txt: string;
  main: {
    feels_like: number;
    grnd_level: number;
    humidity: number;
    pressure: number;
    sea_level: number;
    temp: number;
    temp_kf: number;
    temp_max: number;
    temp_min: number;
  };
  pop: number;
  sys: {
    pod: string;
  };
  visibility: number;
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
  wind: {
    deg: number;
    gust: number;
    speed: number;
  };
}

interface UsersState {
  city: {};
  list: elementList[];
  status: "loading" | "success" | "error";
}

const initialState = {
  city: {},
  list: [],
  status: "loading",
} as UsersState;

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.city = {};
      state.list = [];
      state.status = "loading";
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.city = action.payload.city;
      state.list = action.payload.list;
      state.status = "success";
    });
    builder.addCase(fetchData.rejected, (state) => {
      state.city = {};
      state.list = [];
      state.status = "error";
    });
  },
});

export const selectStatus = (state: RootState) => state.data.status;
export const selectCity = (state: RootState) => state.data.city;
export const selectList = (state: RootState) => state.data.list;
export default dataSlice.reducer;
