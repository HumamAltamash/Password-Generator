import { useState } from "react";

const usePasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const generatePassword = (length, checkboxData) => {
    let charset = "";
    let newPassword = "";

    const selectedOptions = checkboxData.filter((checkbox) => checkbox.state);

    if (selectedOptions.length === 0) {
      setError("Please select at least one option.");
      setPassword("");
      return;
    }

    selectedOptions.forEach((option) => {
      switch (option.title) {
        case "Include Uppercase Letters":
          charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          break;
        case "Include Lowercase Letters":
          charset += "abcdefghijklmnopqrstuvwxyz";
          break;
        case "Include Numbers":
          charset += "0123456789";
          break;
        case "Include Symbols":
          charset += "!@#$%^&*()_+~`|}{[]:;?><,./-=";
          break;
      }
    });

    for (let i = 0; i < length; i++) {
      newPassword += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    setPassword(newPassword);
    setError("");
  };

  return { password, error, generatePassword };
};

export default usePasswordGenerator;
