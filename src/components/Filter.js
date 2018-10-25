import React from 'react';

const Filter = ({ allFilter, handleChange }) => 
  <select onChange={handleChange} defaultValue='all'>
    <option value='all'>All</option>
    {allFilter.map(filter =>
      <option key={filter} value={filter}>{filter}</option>
    )}
  </select>;
Filter.defaultProps = {
  allFilter: [],
  handleChange: function() {}
};

export default Filter;