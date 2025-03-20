export const checkValidData = (email, password, fullName, isSignIn) => {
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isPasswordValid = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
    password
  );

  if (!isSignIn && !fullName) return "Full name is required";
  if (!isEmailValid) return "Email is not valid";
  if (!isPasswordValid) return "Password is not valid, mininum one uppercase, lowercase, digit and one special symbol must be included! ";

  return null;
};
