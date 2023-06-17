import React from "react";

/**
 * Retorna el componente Search 
 * @param {*} props 
 * @returns 
 */
const SearchComponent = (props) => {

    const searcher = (e) =>{
        props.setsearch(e.target.value)
    }

    return (
      <div>
        <input
            type="text"
            onChange={searcher}
            name="search-form"
            className="form-control"
            placeholder="      Search for..."
            value={props.search}
            />       
      </div>
    );
  
};
export default SearchComponent;