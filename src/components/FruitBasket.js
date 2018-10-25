import React from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = ({ fruit, allFilters, firstFilter, onUpdateFilter }) => 
  <div className="fruit-basket">
    <Filter
      filters={allFilters}
      handleChange={onUpdateFilter} />
    <FilteredFruitList
      fruit={fruit}
      filter={firstFilter} />
  </div>;

FruitBasket.defaultProps = {
  fruit: [],
  allFilters: [],
  firstFilter: null,
  updateFilterCallback: () => {}
};

export default FruitBasket;