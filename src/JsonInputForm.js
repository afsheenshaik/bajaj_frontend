import React, { useState } from "react";
import axios from "axios";

const JsonInputForm = ({ onResponse }) => {
  const [jsonInput, setJsonInput] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      // Validate JSON
      const parsedJson = JSON.parse(jsonInput);

      // Send the JSON to backend
      const response = await axios.post("http://localhost:5000/your-endpoint", parsedJson);

      // Pass the response to parent component
      onResponse(response.data);
    } catch (err) {
      setError("Invalid JSON input or request failed");
    }
  };

  return (
    <div>
      <h2>Enter JSON Data</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={jsonInput}
          onChange={(e) => setJsonInput(e.target.value)}
          placeholder='Enter your JSON here'
        />
        <br />
        <button type='submit'>Submit</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default JsonInputForm;
