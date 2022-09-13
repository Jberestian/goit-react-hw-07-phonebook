import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => {
  return (
    <>
      <label htmlFor="filter">Find Contact By Name</label>
      <input value={value} name="filter" type="text" onChange={onChange} />
    </>
  );
};

export default Filter;

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};
