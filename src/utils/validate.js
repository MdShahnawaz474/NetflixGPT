// export const checkValidData = (email, password) => {
//     // email validation regex
//     const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    
//     // Password validation regex
//     const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);

//     if (!isEmailValid) return "Email ID is not valid";
//     if (!isPasswordValid) return "Password is not valid";

//     return null;
// }

export const checkValidData = (email, pass) => {
    const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPassValid =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(pass);
    // const isNameValid = /^[A-ZÀ-ÿ][-,a-z. ']+$/.test(name);
  
    if (!isEmailValid) return "*Email ID is not valid";
    if (!isPassValid) return "*Password not valid";
    // if(!isNameValid)  return "Name is not valid";
    return null; // Return null if both email and password are valid
  };

  export const API_OPTIONS={
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYzBlNjE0ODFkODU4YjJiZGM4YWMxYjliODkxOWQ5MCIsIm5iZiI6MTcyODU1ODI2NS40NjExMDUsInN1YiI6IjY3MDdhZjVhZDA2MTZjN2IxOWZiNTY0NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.18k3WbtW9nvPnCYozhjzq6mOn1c0YQbd0CbJB99DBnA'
    }
  };