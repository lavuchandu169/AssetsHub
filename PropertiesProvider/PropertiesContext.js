import React, { createContext, useState, useContext } from 'react';

const PropertiesContext = createContext();

// Custom hook for easy access to the context
export const useProperties = () => useContext(PropertiesContext);

export const PropertiesProvider = ({ children }) => {
  const [properties, setProperties] = useState([]);

  // Function to add property both locally and on the server
  const addProperty = async (property) => {
    try {
      // Example API call to add the property on the server
      const response = await fetch('https://your-api-endpoint/properties', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(property),
      });

      const newProperty = await response.json();

      // Update the local state to include the new property
      setProperties(prevProperties => [...prevProperties, newProperty]);

    } catch (error) {
      console.error("Error adding property:", error);
      // Handle errors as needed
    }
  };

  return (
    <PropertiesContext.Provider value={{ properties, addProperty }}>
      {children}
    </PropertiesContext.Provider>
  );
};
