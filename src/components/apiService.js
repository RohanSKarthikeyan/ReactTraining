// Simulation of data (initially empty)
let data = ["Rohan", "EmbedUr"];

// Simulation of fetching data from localStorage
const fetchData = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            data = JSON.parse(localStorage.getItem('apiData')) || [];
            resolve(data);
        }, 1000); // Simulation delay with timeout
    });
};

// Simulation of updating data and saving to localStorage
const updateData = (newData) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            data = newData;
            localStorage.setItem('apiData', JSON.stringify(data));
            resolve(data);
        }, 1000); // Simulation of delay with timeout
    });
};

export { fetchData, updateData };
