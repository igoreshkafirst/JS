function setItem(key, value) {
  // Check if key is a string
  if (typeof key !== 'string') {
    throw new Error('Error: Key must be a string');
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
