import React from "react";

const SearchBox = (props) => {
  return (
    <div className="tc">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="Search Robots"
        onChange={props.searchChange}
      />
    </div>
  );
};

export default SearchBox;
