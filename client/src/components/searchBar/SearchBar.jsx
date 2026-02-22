import React, { useState } from "react";
import "./SearchBar.scss";
const types = ["buy", "sell"];
function SearchBar() {
  const [qurey, setQuery] = useState({
    type: "buy",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });
  
  const swithType = (val) => {
    setQuery((prev) => ({ ...prev, type: val }));
  };
  return (
    <div className="searchBar">
      <div className="type">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => swithType(type)}
            className={qurey.type === type ? "active" : ""}
          >
            {type}
          </button>
        ))}
      </div>
      <form action="">
        <input type="text" name="location" placeholder="city location" />
        <input
          type="number"
          name="minPrice"
          min={0}
          max={100000000}
          placeholder="min price"
        />
        <input
          type="number"
          name="maxPrice"
          min={0}
          max={100000000}
          placeholder="max price"
        />
        <button>
        <img src="/search.png" alt="" />
      </button>
      </form>
      
    </div>
  );
}

export default SearchBar;
