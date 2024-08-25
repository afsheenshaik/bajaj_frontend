import React, { useState } from "react";

const ResponseSelector = ({ response }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedOptions([...selectedOptions, value]);
    } else {
      setSelectedOptions(selectedOptions.filter((option) => option !== value));
    }
  };

  const filteredResponse = selectedOptions.length
    ? response.filter((item) =>
        selectedOptions.includes(item.type) // Assuming response has a "type" field
      )
    : response;

  return (
    <div>
      <h2>Select Response Filters</h2>
      <label>
        <input type="checkbox" value="Alphabets" onChange={handleChange} /> Alphabets
      </label>
      <br />
      <label>
        <input type="checkbox" value="Numbers" onChange={handleChange} /> Numbers
      </label>
      <br />
      <label>
        <input type="checkbox" value="Highest lowercase alphabet" onChange={handleChange} /> Highest lowercase alphabet
      </label>
      <br />
      <div>
        <h3>Filtered Response:</h3>
        <pre>{JSON.stringify(filteredResponse, null, 2)}</pre>
      </div>
    </div>
  );
};

export default ResponseSelector;
