export function validateEmail(email) {
  const rules = {
    hasAtSymbol: email.includes("@"),
    hasValidDomain: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
    noWhitespace: !/\s/.test(email),
    noSpecialCharsBeforeAt: /^[a-zA-Z0-9._%+-]+@/.test(email)
  };

  const emailMessages = [];

  if (!rules.hasAtSymbol) emailMessages.push("Email must contain '@'.");
  if (!rules.hasValidDomain) emailMessages.push("Please enter a valid email domain.");
  if (!rules.noWhitespace) emailMessages.push("Email cannot contain spaces.");
  if (!rules.noSpecialCharsBeforeAt) emailMessages.push("Invalid characters before '@'.");

  return {
    isValidEmail: emailMessages.length === 0,
    emailMessages,
    rules
  };
}

export function validatePassword(password) {
  const rules = {
    minLength: password.length >= 8,
    hasUppercase: /[A-Z]/.test(password),
    hasLowercase: /[a-z]/.test(password),
    hasNumber: /[0-9]/.test(password),
    hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    noWhitespace: !/\s/.test(password)
  };

  const passwordMessages = [];

  if (!rules.minLength) passwordMessages.push("Password must be at least 8 characters.");
  if (!rules.hasUppercase) passwordMessages.push("Include at least one uppercase letter.");
  if (!rules.hasLowercase) passwordMessages.push("Include at least one lowercase letter.");
  if (!rules.hasNumber) passwordMessages.push("Include at least one number.");
  if (!rules.hasSpecialChar) passwordMessages.push("Include at least one special character.");
  if (!rules.noWhitespace) passwordMessages.push("Password cannot contain spaces.");

  return {
    isValidPassword: passwordMessages.length === 0,
    passwordMessages,
    rules
  };
}

export function validateName(name) {
  const trimmed = name.trim();

  const rules = {
    minLength: trimmed.length >= 2,
    onlyLettersAndSpaces: /^[A-Za-z\s]+$/.test(trimmed),
    noMultipleSpaces: !/\s{2,}/.test(trimmed),
    noLeadingOrTrailingSpaces: name === trimmed
  };

  const messages = [];

  if (!rules.minLength) messages.push("Name must be at least 2 characters.");
  if (!rules.onlyLettersAndSpaces) messages.push("Name can only contain letters and spaces.");
  if (!rules.noMultipleSpaces) messages.push("Name cannot contain multiple consecutive spaces.");
  if (!rules.noLeadingOrTrailingSpaces) messages.push("Name cannot start or end with spaces.");

  return {
    isValid: messages.length === 0,
    messages,
    rules
  };
}

export function validateEmailAndPassword(email, password){
  let isValid = true;
  let emailError = '';
  let passwordError = '';
  const {isValidEmail, emailMessages} = validateEmail(email);
  const {isValidPassword, passwordMessages} = validatePassword(password);

  if(!isValidEmail || !isValidPassword){
    isValid = false;
    emailError = emailMessages[0];
    passwordError = passwordMessages[0];
  }

  return {
    isValid,
    emailError,
    passwordError
  }
}