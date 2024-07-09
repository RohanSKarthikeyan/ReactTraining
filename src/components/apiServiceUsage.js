import { fetchData, updateData } from './apiService';

// Example usage 
const fetchAndUpdateData = async () => {
    try {
        // Fetch data
        const fetchedData = await fetchData();
        console.log('Fetched Data:', fetchedData);

        // Updating data
        const newItem = "Karthikeyan" ;
        const updatedData = [...fetchedData, newItem];
        await updateData(updatedData);
        console.log('Updated Data:', updatedData);

        // Fetching data again to see the updated version
        const newData = await fetchData();
        console.log('New Fetched Data:', newData);
    } catch (error) {
        console.error('Error fetching or updating data:', error);
    }
};

// Calling  the function to simulate API calls
fetchAndUpdateData();
