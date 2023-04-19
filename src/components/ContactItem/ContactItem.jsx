import PropTypes from 'prop-types';
// import { ListItem, Item, ItemButton, ItemSpan } from './ContactItem.styled';

import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsOperations';
import { ListItem, Item, ItemButton, ItemSpan } from './ContactItem.styled';

import UpdateModal from 'components/UpdateModal/UpdateModal';
import { useState } from 'react';



export const ContactItem = ({ info: { name, number, id } }) => {
  const [open, setOpen] = useState(false)
  
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));
  const openModal = () => {
    setOpen(true)
    console.log('click', name, number, id)
  }

  return (
    <>
       <Item>
      <ListItem>
        <ItemSpan>{name} :</ItemSpan> {number}
      </ListItem>

      {/* <Link to={`update/${id}`}> */}
       <ItemButton type="button" onClick={openModal} >
        Update contact
      </ItemButton>
      {/* </Link> */}

      <ItemButton type="button" onClick={handleDelete}>
        Delete contact
      </ItemButton>
      </Item>
      <UpdateModal open={open} onClose={() =>  setOpen(false)} />
    </>
   
  );
};

ContactItem.propTypes = {
  info: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};