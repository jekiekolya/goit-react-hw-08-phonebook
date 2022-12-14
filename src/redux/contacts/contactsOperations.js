import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Notify } from 'notiflix';

// NEW;
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      Notify.failure('Ups, we have a problem!');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', contact);
      Notify.success(`${contact.name} successfully added`);
      return response.data;
    } catch (error) {
      Notify.failure('Ups, we have a problem!');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      Notify.success(`${response.data.name} successfully deleted`);
      return response.data;
    } catch (error) {
      Notify.failure('Ups, we have a problem!');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async ({ contact, contactId }, thunkAPI) => {
    try {
      const response = await axios.patch(`/contacts/${contactId}`, contact);
      Notify.success(`${response.data.name} successfully updated`);
      return response.data;
    } catch (error) {
      Notify.failure('Ups, we have a problem!');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
