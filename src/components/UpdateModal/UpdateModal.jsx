import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { modalStyles } from './styles';
// import { useDispatch } from 'react-redux';
import { UpdateForm } from 'components/UpdateForm/UpdateForm';

const UpdateModal = ({ open, onClose }) => {


  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={modalStyles.wrapper}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Update contact
        </Typography>

        <UpdateForm />
      </Box>
    </Modal>
  );
};

export default UpdateModal;
