import { createSlice } from '@reduxjs/toolkit';

import {
  fetchContacts,
  deleteContact,
  addContact,
  updateContact,
} from './contactsOperations';

const initialContactsState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContactsState,
  extraReducers: builder => {
    // Fetch Contacts
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, handleRejected);

    // Add contact
    builder
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items.unshift(action.payload);
      })
      .addCase(addContact.rejected, handleRejected);

    // Delete contact
    builder
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = state.items.filter(
          contact => contact.id !== action.payload.id
        );
      })
      .addCase(deleteContact.rejected, handleRejected);

    // Update contact
    builder
      .addCase(updateContact.pending, handlePending)
      .addCase(updateContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = state.items.map(contact =>
          contact.id === action.payload.id ? action.payload : contact
        );
      })
      .addCase(updateContact.rejected, handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
