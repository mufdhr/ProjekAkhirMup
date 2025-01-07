import React, { useState, useEffect } from 'react';

// Mock API URL for demonstration purposes
const API_URL = 'https://api.example.com/data';

const Savesay = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from the API when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setData(jsonData);  // Set the fetched data
      } catch (err) {
        setError('Error fetching data: ' + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Handle changes to the data
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // Save updated data to the API
  const saveData = async () => {
    try {
      const response = await fetch(API_URL, {
        method: 'PUT', // Use PUT or POST depending on your API setup
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to save data');
      }
      alert('Data saved successfully');
    } catch (err) {
      setError('Error saving data: ' + err.message);
    }
  };

  // Clear data (this will just reset it locally, it doesn't interact with the API)
  const clearData = () => {
    setData({});
  };

  if (loading) return <div>Loading...</div>;

  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>API Data Example</h1>
      <input
        type="text"
        name="textData"
        value={data.textData || ''}
        onChange={handleChange}
        placeholder="Enter some data"
      />
      <button onClick={saveData}>Save Data</button>
      <button onClick={clearData}>Clear Data</button>
    </div>
  );
};

export default Savesay;
