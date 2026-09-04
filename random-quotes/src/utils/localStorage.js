function setItem(key, value) {
  // Check if key is a string
  if (typeof key !== 'string') {
    console.error('Error: Key must be a string');
    return;
  }

  try {
    // Convert value to JSON string
    const jsonValue = JSON.stringify(value);
    // Set item in localStorage
    localStorage.setItem(key, jsonValue);
  } catch (error) {
    console.error('Error setting item in localStorage:', error);
  }
}

function getItem(key) {
  const value = localStorage.getItem(key);

  try {
    return JSON.parse(value);
  } catch (error) {
    return value;
  }
}

// Function to remove an item from localStorage
function removeItem(key) {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error('Error removing item from localStorage:', error);
  }
}

// Function to clear all items from localStorage
function clear() {
  try {
    localStorage.clear();
  } catch (error) {
    console.error('Error clearing localStorage:', error);
  }
}

export { setItem, getItem, removeItem, clear };
