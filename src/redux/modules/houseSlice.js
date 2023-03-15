import { createAsyncThunk } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  house: [],
  isLoading: false,
  isError: false,
  error: null,
};

export const __getHouse = createAsyncThunk('getHouse', async (payload, thunkAPI) => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_HOUSE_URL}/house`);
    return thunkAPI.fulfillWithValue(response.data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const __deleteHouse = createAsyncThunk(
  'deleteHouse',
  async (payload, thunkAPI) => {
    try {
      await axios.delete(`${process.env.REACT_APP_HOUSE_URL}/house/${payload}`);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const __postHouse = createAsyncThunk('postHouse', async (payload, thunkAPI) => {
  try {
    await axios.post(`${process.env.REACT_APP_HOUSE_URL}/house`, payload);
    return thunkAPI.fulfillWithValue(payload);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
export const __editHouse = createAsyncThunk('editHouse', async (payload, thunkAPI) => {
  try {
    await axios.put(`${process.env.REACT_APP_HOUSE_URL}/house/${payload.id}`, payload);
    return thunkAPI.fulfillWithValue(payload);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const houseSlice = createSlice({
  name: 'house',
  initialState,
  reducers: {},
  extraReducers: {
    [__getHouse.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__getHouse.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.house = action.payload;
    },
    [__getHouse.rejected]: (state, action) => {
      state.isError = true;
      state.isLoading = false;
      state.error = action.payload;
    },

    [__deleteHouse.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__deleteHouse.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.house = state.house.filter((item) => item.id !== parseInt(action.payload));
    },
    [__deleteHouse.rejected]: (state, action) => {
      state.isError = true;
      state.isLoading = false;
      state.error = action.payload;
    },

    [__postHouse.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__postHouse.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.house = [...state.house, action.payload];
    },
    [__postHouse.rejected]: (state, action) => {
      state.isError = true;
      state.isLoading = false;
      state.error = action.payload;
    },

    [__editHouse.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__editHouse.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isError = false;
      state.house = state.house.map((item) =>
        item.id === payload.id ? (item = payload) : item
      );
    },
    [__editHouse.rejected]: (state, action) => {
      state.isError = true;
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
// .reducer 필수
export default houseSlice.reducer;
export const { addHouse, deleteHouse } = houseSlice.actions;
