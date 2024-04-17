// auth.js

// Function to check if the user is authenticated
export const isAuthenticated = () => {
    // Retrieve the authentication token from local storage
    const token = localStorage.getItem('token');
  
    // Check if the token exists and is not expired (you can add more validation logic here if needed)
    return token ? true : false;
  };
  