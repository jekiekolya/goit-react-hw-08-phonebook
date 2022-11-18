import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import * as React from 'react';
import PropTypes from 'prop-types';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';

import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import { ButtonBlue, Form } from './ModalUpdate.styled';
import { Box } from 'components/Box';
import InputField from 'components/InputField';
import { getContacts } from 'redux/selectors';
import { ButtonForm } from './ModalUpdate.styled';
import { updateContact } from 'redux/contacts/contactsOperations';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      <Box display="flex" justifyContent="center">
        {children}
      </Box>
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function ModalUpdate({ name, number, contactId }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  // FORM
  const contacts = useSelector(getContacts);
  const [nameNew, setNameNew] = useState(name);
  const [numberNew, setNumberNew] = useState(number);

  const dispatch = useDispatch();

  const handleChangeName = e => {
    setNameNew(e.currentTarget.value);
  };

  const handleChangeNumber = e => {
    setNumberNew(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Check input value and create notification
    const statusValidation = checkEqualValue.call(contacts, nameNew, numberNew);
    if (statusValidation === 'alert') return;

    dispatch(
      updateContact({
        contact: { name: nameNew, number: numberNew },
        contactId,
      })
    );
    handleClose();
  };

  return (
    <div>
      <ButtonBlue type="button" name="Update" onClick={handleClickOpen} />
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
          color="#02897A"
          fontWeight={700}
        >
          Update Contact
        </BootstrapDialogTitle>

        <Form onSubmit={handleSubmit}>
          <Box display="flex" flexDirection="column" gridGap={32}>
            <InputField
              nameLabel="Name"
              type="text"
              name="nameNew"
              value={nameNew}
              placeholder="Jekie Kolya"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={handleChangeName}
            />

            <InputField
              nameLabel="Number"
              type="tel"
              name="numberNew"
              value={numberNew}
              placeholder="777-77-77"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="number number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={handleChangeNumber}
            />

            <Box display="flex" justifyContent="center">
              <ButtonForm name="Update contact" />
            </Box>
          </Box>
        </Form>
      </BootstrapDialog>
    </div>
  );
}

ModalUpdate.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  contactId: PropTypes.string.isRequired,
};

function checkEqualValue(name, number) {
  const equalValue = this.filter(item => {
    return item.name === name && item.number === number;
  });

  if (equalValue.toString()) {
    Notify.failure(`Name and Number not changed`);
    return 'alert';
  }

  return 'ok';
}
