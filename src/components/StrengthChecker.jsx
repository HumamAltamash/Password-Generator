const StrengthChecker = ({ password }) => {
  const getPasswordStrength = (password) => {
    let strength = 0;
    if (password.length >= 8) {
      strength += 1;
    }
    if (password.match(/[a-z]/) && password.match(/[A-Z]/)) {
      strength += 1;
    }
    if (password.match(/[0-9]/)) {
      strength += 1;
    }
    if (password.match(/[^a-zA-Z0-9]/)) {
      strength += 1;
    }
    if (password.length >= 12) {
      strength += 1;
    }
    return strength;
  };
  const strength = getPasswordStrength(password);
  return (
    <div className="strength">
      <label>Password Strength:</label>
      <label>{strength}</label>
    </div>
  );
};

export default StrengthChecker;
