import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Label, Input } from './Filter.styled';
import { filterContacts } from '../../redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const filterChange = event => {
    dispatch(filterContacts(event.target.value));
  };

  return (
    <Label>
      Find contacts by name
      <Input onChange={filterChange} type="text" placeholder="Enter name" />
    </Label>
  );
};

Filter.propTypes = {
  filterChange: PropTypes.func,
};
