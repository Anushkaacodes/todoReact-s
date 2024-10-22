import React from 'react';

const FilterButtons = ({ setFilter, currentFilter }) => {
  return (
<div className="filter-buttons">
  <button 
    onClick={() => setFilter("All")} 
    disabled={currentFilter === "All"}
  >
    All
  </button>
  <button 
    onClick={() => setFilter("Completed")} 
    disabled={currentFilter === "Completed"}
  >
    Completed
  </button>
  <button 
    onClick={() => setFilter("Incomplete")} 
    disabled={currentFilter === "Incomplete"}
  >
    Incomplete
  </button>
</div>

  );
};

export default FilterButtons;





